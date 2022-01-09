<script lang="ts" setup>
  import { useConfig } from '../../composables/config';
  const { config } = useConfig();
  import { usePosts } from '../../composables/posts';
  const { getPost } = usePosts();

  const route = useRoute();

  const endpoint = `${config.value.api_base}derepo/statuses/${route.params.id}`
  const post = await getPost(endpoint);

  const title = `${post.name}: ${post.message.replaceAll('<br>', '').substring(0, 20)} | deretter`
  useMeta({
    title,
    meta: [
      { name: 'og:title', content: title },
      { name: 'description', content: post.message },
      { name: 'og:description', content: post.message }
    ]
  });
</script>

<template>
  <p>
    <Post v-if="post" :post="post" />

    <div v-else>Unknown Post</div>
  </p>
</template>
