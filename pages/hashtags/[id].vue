<script lang="ts" setup>
  import { useConfig } from '../../composables/config';
  const { config } = useConfig();
  import { usePosts } from '../../composables/posts';
  const { getPosts } = usePosts();

  const route = useRoute();

  const endpoint = `${config.value.api_base}derepo/statuses?hashtagId=${route.params.id}`
  const posts = await getPosts(endpoint);

  const title = `Hashtag ${ route.params.id } | deretter`;
  useMeta({
    title,
    meta: [
      { name: 'og:title', content: title },
      { name: 'description', content: 'deretter Hashtag' },
      { name: 'og:description', content: 'deretter Hashtag' }
    ]
  });
</script>

<template>
  <p>
    <h2>Hashtag {{ $route.params.id }}</h2>

    <Post v-for="post in posts" :post="post" />
  </p>
</template>
