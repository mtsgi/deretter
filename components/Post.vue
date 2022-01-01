<script lang="ts" setup>
  import { useConfig } from '../composables/config';
  const { config } = useConfig();

  import { Post } from '../composables/posts';

  const props = defineProps<{
    post: Post
  }>();

  const stampPath = computed(() => {
    if (props.post.message.indexOf('stamp_only:') === 0) {
      return props.post.message.replace('stamp_only:', '');
    }
    else return null;
  });

  const paragraphs = computed(() => {
    if (stampPath.value) return [];
    return props.post.message.split('<br>');
  });
</script>

<template>
  <article class="post">
    <NuxtLink :to="`/users/${props.post.idolId}`">
      <strong>{{ props.post.name }}</strong>
    </NuxtLink>

    <div class="post__message">
      <p v-for="p in paragraphs">{{ p }}</p>

      <a
        v-if="stampPath"
        :href="`${config.assets_base}${stampPath}.png`"
        target="_blank"
        rel="noopener noreferrer"
      >
        [スタンプ]
      </a>
    </div>

    <div class="post__hashtags">
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

    <div class="post__detail">
      <NuxtLink :to="`/posts/${props.post.id}`">
        {{ props.post.postTime }}
      </NuxtLink>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.post {
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #c0c0c0;
  a {
    color: rgb(30, 156, 241);
  }
  p {
    margin: 0;
  }

  &__hashtags {
    display: flex;
    gap: 8px;
  }

  &__detail {
    font-size: 12px;
    a {
      color: rgb(83, 100, 113);
    }
  }
}
</style>
