<script lang="ts" setup>
  const { config } = useConfig();
  const { getPosts } = usePosts();

  const route = useRoute();

  const endpoint = `${config.value.api_base}derepo/statuses?idolId=${route.params.id}`
  const posts = await getPosts(endpoint);

  const username = posts.at(0)?.name;

  const title = `${username} | deretter`;
  useHead({
    title,
    meta: [
      { hid: 'og:title', name: 'og:title', content: title },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:text:title', name: 'twitter:text:title', content: title },
      { hid: 'description', name: 'description', content: username },
      { hid: 'og:description', name: 'og:description', content: username }
    ],
  });
</script>

<template>
  <p>
    <h2>{{ username }}</h2>

    <Post v-for="post in posts" :post="post" />
  </p>
</template>
