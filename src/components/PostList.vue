<template>
  <div class="post-list">
    <h2>PostList</h2>
    <PostListItem v-for="post in posts" :key="post" :post="post" />
  </div>
</template>

<script>
import PostListItem from "@/components/PostListItem.vue";

export default {
  name: "PostList",
  components: { PostListItem },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss"></style>
