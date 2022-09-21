<script lang="ts" setup>
  const { config } = useConfig();
  const { getPost } = usePosts();

  const route = useRoute();

  const endpoint = `${config.value.api_base}derepo/statuses/${route.params.id}`
  const post = await getPost(endpoint);

  const title = `${post.name}: ${post.message.replaceAll('<br>', '').substring(0, 20)} | deretter`
  useHead({
    title,
    meta: [
      { hid: 'og:title', name: 'og:title', content: title },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:text:title', name: 'twitter:text:title', content: title },
      { hid: 'description', name: 'description', content: post.message },
      { hid: 'og:description', name: 'og:description', content: post.message }
    ]
  });
</script>

<template>
  <p>
    <Post v-if="post" :post="post" />

    <div v-else>Unknown Post</div>
  </p>
</template>
