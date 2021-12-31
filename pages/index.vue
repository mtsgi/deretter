<script lang="ts" setup>
  import { usePosts } from '../composables/posts';
  const { cache, getPosts } = usePosts();

  const posts = await getPosts("derepo/statuses?maxResults=100");
</script>

<template>
  <main>
    <h2>Posts</h2>

    <Post v-for="post in posts" :post="post" />
    
    <h3>Cached APIs</h3>
    {{ Object.keys(cache) }}

    <Head>
      <Title>TOP | deretter</Title>
    </Head>
  </main>
</template>
