<template>
  <div class="post">
    <h1>Post</h1>
    <p>{{ $route.params.id }}</p>
    <PostList :posts="group" />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";

export default {
  name: "Post",
  components: {
    PostList
  },
  data() {
    return {
      group: []
    };
  }
};
</script>
