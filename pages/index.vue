<script lang="ts" setup>
  import { useConfig } from '../composables/config';
  const { config } = useConfig();
  import { usePosts } from '../composables/posts';
  const { cache, getPosts } = usePosts();

  const endpoint = `${config.value.api_base}derepo/statuses?maxResults=100`
  const posts = await getPosts(endpoint);
</script>

<template>
  <main>
    <h2>Posts</h2>

    <Post v-for="post in posts" :post="post" />
    
    <h3>Cached APIs</h3>
    <div v-for="c in Object.keys(cache)">{{ c }}</div>

    <Head>
      <Title>TOP | deretter</Title>
    </Head>
  </main>
</template>
