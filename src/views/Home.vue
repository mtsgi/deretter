<template>
  <div class="home">
    <h1>Home</h1>
    <PostList />
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";

export default {
  name: "Home",
  components: {
    PostList
  }
};
</script>
