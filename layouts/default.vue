<script lang="ts" setup>
interface Link {
  path: string;
  label: string;
}

const links:Link[] = [
  {
    path: "/",
    label: "TOP"
  },
  {
    path: "/hashtags",
    label: "Hashtags"
  }
]
</script>

<template>
  <div>
    <header>
      <NuxtLink v-for="link in links" :to="link.path">
        {{ link.label }}
      </NuxtLink>
    </header>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
header {
  background: #f0f0f0;
  display: flex;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #555555;
    padding: 8px;

    &.router-link-active {
      color: rgb(30, 156, 241);
    }
  }
}
</style>
