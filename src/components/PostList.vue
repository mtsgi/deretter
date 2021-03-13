<template>
  <div class="post-list">
    <h2>PostList</h2>
    <PostListItem
      v-for="group in groups"
      :key="`group_${getGroupId(group)}`"
      :posts="group"
    />
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
  },
  methods: {
    getGroupId: group => {
      group[0] ? group[0].groupId : 0;
    }
  },
  computed: {
    groups() {
      const groups = this.posts.reduce((acc, cur) => {
        (acc[cur.groupId] || (acc[cur.groupId] = [])).push(cur);
        return acc;
      }, {});
      const getOrder = post => post.groupOrder;
      const getEarliest = group =>
        group.reduce((a, b) => (getOrder(a) < getOrder(b) ? a : b));
      return Object.values(groups).sort((groupA, groupB) => {
        const dateA = new Date(getEarliest(groupA).postTime);
        const dateB = new Date(getEarliest(groupB).postTime);
        return dateB - dateA;
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
