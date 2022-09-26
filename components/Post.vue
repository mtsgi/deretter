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
    <NuxtLink class="post__icon" :to="`/users/${props.post.idolId}`">
      <img
        :src="`${config.assets_base}${props.post.iconPath}.png`"
        referrerpolicy="no-referrer"
      />
    </NuxtLink>

    <div class="post__container">
      <NuxtLink class="post__name" :to="`/users/${props.post.idolId}`">
        <strong>{{ props.post.name }}</strong>
      </NuxtLink>

      <div class="post__message">
        <p v-for="p in paragraphs">{{ p }}</p>

        <img
          v-if="stampPath"
          :src="`${config.assets_base}${stampPath}.png`"
          referrerpolicy="no-referrer"
        />
      </div>

      <div class="post__hashtags">
        <NuxtLink :to="`/hashtags/${hashtag.id}`" v-for="hashtag in props.post.hashtags">
          #{{ hashtag.word }}
        </NuxtLink>
      </div>

      <img
        v-if="props.post.imagePath"
        :src="`${config.assets_base}${props.post.imagePath}.png`"
        class="post__image"
        referrerpolicy="no-referrer"
      />

      <div class="post__detail">
        <NuxtLink :to="`/posts/${props.post.id}`">
          {{ props.post.postTime }}
        </NuxtLink>
        <NuxtLink :to="`/conversations/${props.post.groupId}`">
          View conversation
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.post {
  margin-bottom: 16px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  a {
    color: rgb(30, 156, 241);
  }
  p {
    margin: 0;
  }

  &__icon img {
    border-radius: 6px;
    width: 64px;
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.15);
  }

  &__container {
    flex-grow: 1;
  }

  &__name {
    color: #000000;
    display: block;
    margin-bottom: 8px;
  }

  &__hashtags {
    display: flex;
    gap: 8px;
  }

  &__image {
    max-width: 100%;
    border-radius: 12px;
    margin-top: 8px;
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.15);
  }

  &__detail {
    font-size: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
    a {
      color: #9ea6ac;
      margin-right: 8px;
    }
  }
}
</style>
