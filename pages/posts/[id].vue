<script lang="ts" setup>
import { usePosts } from '../../composables/posts';
const { posts } = usePosts();

const route = useRoute();

const post = posts.value.find(post => String(post.id) === route.params.id)
</script>

<template>
  <p>
    <h2>Post {{ $route.params.id }}</h2>
    
    <Post :post="post" />
    
    <Head>
      <Title>Post {{ $route.params.id }}</Title>
      <Meta name="description" :content="`Post ${ $route.params.id }`" />
    </Head>
  </p>
</template>
