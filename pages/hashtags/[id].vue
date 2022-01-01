<script lang="ts" setup>
  import { useConfig } from '../../composables/config';
  const { config } = useConfig();
  import { usePosts } from '../../composables/posts';
  const { getPosts } = usePosts();

  const route = useRoute();

  const endpoint = `${config.value.api_base}derepo/statuses?hashtagId=${route.params.id}`
  const posts = await getPosts(endpoint);
</script>

<template>
  <p>
    <h2>Hashtag {{ $route.params.id }}</h2>

    <Post v-for="post in posts" :post="post" />

    <Head>
      <Title>Hashtag {{ $route.params.id }}</Title>
      <Meta name="description" :content="`Hashtag ${ $route.params.id }`" />
    </Head>
  </p>
</template>
