<script lang="ts" setup>
  import { useConfig } from '../composables/config';
  const { config } = useConfig();
  import { usePosts } from '../composables/posts';
  const { getPosts } = usePosts();

  const endpoint = `${config.value.api_base}derepo/statuses?maxResults=100`
  const posts = await getPosts(endpoint);

  useMeta({
    meta: [
      { name: 'description', content: 'Timeline - deretter' }
    ],
    title: 'Timeline | deretter'
  });
</script>

<template>
  <main>
    <h2>Timeline</h2>

    <Post v-for="post in posts" :post="post" />
  </main>
</template>
