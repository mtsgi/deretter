<template>
  <div class="post-list__item">
    <h3>PostListItem</h3>
    {{ post }}
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss"></style>
