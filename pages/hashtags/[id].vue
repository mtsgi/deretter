<script lang="ts" setup>
  const { config } = useConfig();
  const { getPosts } = usePosts();

  const route = useRoute();

  const endpoint = `${config.value.api_base}derepo/statuses?hashtagId=${route.params.id}`
  const posts = await getPosts(endpoint);

  const title = `Hashtag ${ route.params.id } | deretter`;
  useHead({
    title,
    meta: [
      { hid: 'og:title', name: 'og:title', content: title },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:text:title', name: 'twitter:text:title', content: title },
      { hid: 'description', content: 'deretter Hashtag', name: 'description' },
      { hid: 'og:description', name: 'og:description', content: 'deretter Hashtag' }
    ]
  });
</script>

<template>
  <p>
    <h2>Hashtag {{ $route.params.id }}</h2>

    <Post v-for="post in posts" :post="post" />
  </p>
</template>
