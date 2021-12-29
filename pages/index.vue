<script lang="ts" setup>
  import { useConfig } from '../composables/config';
  const { config } = useConfig();
  import { usePosts } from '../composables/posts';
  const { posts } = usePosts();
  
  // API URL
  const derepoAPI = computed(() => {
    return `${config.value.api_base}derepo/statuses?maxResults=100`;
  });

  console.log("Posts", posts.value);

  if (!posts.value) {
    // Fetch TL Data
    await fetch(derepoAPI.value, {
      method: "GET",
      mode: "cors"
    })
      .then(res => res.json())
      .then(data => {
        posts.value = data;
      });
  }
</script>

<template>
  <main>
    <h2>Posts</h2>

    <Post v-for="post in posts" :post="post" />

    <Head>
      <Title>TOP | deretter</Title>
    </Head>
  </main>
</template>
