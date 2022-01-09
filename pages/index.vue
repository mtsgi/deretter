<script lang="ts" setup>
  import { useConfig } from '../composables/config';
  const { config } = useConfig();
  import { usePosts } from '../composables/posts';
  const { getPosts } = usePosts();

  const endpoint = `${config.value.api_base}derepo/statuses?maxResults=100`
  const posts = await getPosts(endpoint);

  const title = 'Timeline | deretter';
  useMeta({
    meta: [
      { hid: 'og:title', name: 'og:title', content: title },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:text:title', name: 'twitter:text:title', content: title },
      { hid: 'description', name: 'description', content: 'Timeline - deretter' },
      { hid: 'og:description', name: 'og:description', content: 'Timeline - deretter' }
    ],
    title
  });
</script>

<template>
  <main>
    <h2>Timeline</h2>

    <Post v-for="post in posts" :post="post" />
  </main>
</template>
