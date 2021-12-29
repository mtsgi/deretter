<script lang="ts" setup>
import { Post } from '../composables/posts';

const props = defineProps<{
  post: Post
}>();
</script>

<template>
  <article>
    <NuxtLink :to="`/users/${props.post.idolId}`">
      <strong>{{ props.post.name }}</strong>
    </NuxtLink>
    <div>{{ props.post.message }}</div>
    <NuxtLink :to="`/posts/${props.post.id}`">
      {{ props.post.postTime }}
    </NuxtLink>
  </article>
</template>
