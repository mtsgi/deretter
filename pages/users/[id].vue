<script lang="ts" setup>
  import { useConfig } from '../../composables/config';
  const { config } = useConfig();
  import { usePosts } from '../../composables/posts';
  const { getPosts } = usePosts();

  const route = useRoute();

  const endpoint = `${config.value.api_base}derepo/statuses?idolId=${route.params.id}`
  const posts = await getPosts(endpoint);
</script>

<template>
  <p>
    <h2>User {{ $route.params.id }}</h2>

    <Post v-for="post in posts" :post="post" />

    <Head>
      <Title>User {{ $route.params.id }}</Title>
      <Meta name="description" :content="`User ${ $route.params.id }`" />
    </Head>
  </p>
</template>
