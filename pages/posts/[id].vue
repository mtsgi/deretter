<script lang="ts" setup>
import { usePosts } from '../../composables/posts';
const { getPost } = usePosts();

const route = useRoute();

const post = await getPost(`derepo/statuses/${route.params.id}`);
</script>

<template>
  <p>
    <h2>Post {{ $route.params.id }}</h2>
    
    <Post v-if="post" :post="post" />

    <div v-else>Unknown Post</div>
    
    <Head>
      <Title>Post {{ $route.params.id }}</Title>
      <Meta name="description" :content="`Post ${ $route.params.id }`" />
    </Head>
  </p>
</template>
