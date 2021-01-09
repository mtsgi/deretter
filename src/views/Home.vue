<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";

export default {
  name: "Home",
  components: {
    PostList
  },
  data() {
    return {
      statuses: [
        {
          id: 1,
          message: "Hello"
        }
      ]
    };
  },
  computed: {
    posts() {
      return this.statuses;
    }
  }
};
</script>
