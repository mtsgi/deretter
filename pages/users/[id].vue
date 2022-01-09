<script lang="ts" setup>
  import { useConfig } from '../../composables/config';
  const { config } = useConfig();
  import { usePosts } from '../../composables/posts';
  const { getPosts } = usePosts();

  const route = useRoute();

  const endpoint = `${config.value.api_base}derepo/statuses?idolId=${route.params.id}`
  const posts = await getPosts(endpoint);

  const username = posts.at(0)?.name;

  const title = `${username} | deretter`;
  useMeta({
    title,
    meta: [
      { name: 'og:title', content: title },
      { name: 'description', content: username },
      { name: 'og:description', content: username }
    ],
  });
</script>

<template>
  <p>
    <h2>{{ username }}</h2>

    <Post v-for="post in posts" :post="post" />
  </p>
</template>
