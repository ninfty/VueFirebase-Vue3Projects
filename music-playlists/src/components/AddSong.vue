<template>
  <div class="add-song">
    <button v-if="!showForm" @click="showForm = true">Add Songs</button>
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <h4>Add a New Song <span class="close-form-button" @click="closeForm">X</span></h4>
      <input type="text" placeholder="Song title" required v-model="title">
      <input type="text" placeholder="Artist" required v-model="artist">
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import useDocument from '../composables/useDocument'

export default {
  props: ['playlist'],
  setup(props) {
    const title = ref('')
    const artist = ref('')
    const showForm = ref(false)
    const { updateDoc } = useDocument('playlists', props.playlist.id)

    const handleSubmit = async () => {
      const newSong = {
        title: title.value,
        artist: artist.value,
        id: Math.floor(Math.random() * 1000000)
      }
      const res = await updateDoc({
        songs: [...props.playlist.songs, newSong]
      })
      title.value = ''
      artist.value = ''
    }

    const closeForm = async () => {
      showForm.value = false
    }

    return { title, artist, showForm, handleSubmit, closeForm }
  }
}
</script>

<style scoped>
  .add-song {
    text-align: center;
    margin-top: 40px;
  }
  form {
    max-width: 100%;
    text-align: left;
  }
  .close-form-button {
    cursor: pointer;
    background: var(--secondary);
    border-radius: 8px;
    border: 0;
    padding: 8px 12px;
    margin-top: -8px;
    font-weight: 600;
    float: right;
  }
  .close-form-button:hover {
    background: var(--primary);
    color: white;
  }
</style>