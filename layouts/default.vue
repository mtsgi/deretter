<template>
  <div>
    <header>
      <NuxtLink to="/">TOP</NuxtLink>
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
    color: rgb(30, 156, 241);
    padding: 8px;
  }
}
</style>
