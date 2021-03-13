<template>
  <div class="post-list__item">
    <h3>PostListItem</h3>
    {{ sortedPosts }}
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedPosts() {
      // TODO
      return this.posts;
    }
  }
};
</script>

<style scoped lang="scss"></style>
