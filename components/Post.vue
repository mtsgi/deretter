<script lang="ts" setup>
  import { useConfig } from '../composables/config';
  const { config } = useConfig();

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

    <div>
      <NuxtLink :to="`/hashtags/${hashtag.id}`" v-for="hashtag in props.post.hashtags">
        #{{ hashtag.word }}
      </NuxtLink>
    </div>

    <a
      v-if="props.post.imagePath"
      :href="`${config.assets_base}${props.post.imagePath}.png`"
      target="_blank"
      rel="noopener noreferrer"
    >
      [画像]
    </a>

    <div>
      <NuxtLink :to="`/posts/${props.post.id}`">
        {{ props.post.postTime }}
      </NuxtLink>
    </div>

    <hr />
  </article>
</template>
