<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost'

export default {
  props: ['posts'],
  components: { SinglePost },
  setup() {

  }
}
</script>

<style>

</style>