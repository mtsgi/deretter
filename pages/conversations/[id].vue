<script lang="ts" setup>
  import { useConfig } from '../../composables/config';
  const { config } = useConfig();
  import { usePosts } from '../../composables/posts';
  const { getPosts } = usePosts();

  const route = useRoute();

  const endpoint = `${config.value.api_base}derepo/statuses?groupId=${route.params.id}`
  const posts = await getPosts(endpoint);

  const title = `Conversation ${route.params.id} | deretter`;
  useMeta({
    title,
    meta: [
      { hid: 'og:title', name: 'og:title', content: title },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:text:title', name: 'twitter:text:title', content: title },
      { hid: 'description', name: 'description', content: 'Conversation' },
      { hid: 'og:description', name: 'og:description', content: 'Conversation' }
    ],
  });
</script>

<template>
  <p>
    <h2>Conversation</h2>

    <Post v-for="post in posts" :post="post" />
  </p>
</template>
