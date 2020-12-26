<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner'

export default {
  name: 'Home',
  components: { PostList, Spinner },
  setup() {
    const { posts, error, load } = getPosts()

    load()
    
    return { posts, error }
  },
}
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>