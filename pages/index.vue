<script setup>
// your setup script
</script>

<template>
  <main>
    <ul>
      <li v-for="n in 4" :key="n">
        <NuxtLink :to="`/posts/${n}`">Post {{ n }}</NuxtLink>
      </li>
    </ul>
    <ul>
      <li v-for="n in 4" :key="n">
        <NuxtLink :to="`/users/${n}`">User {{ n }}</NuxtLink>
      </li>
    </ul>

    <Head>
      <Title>TOP | deretter</Title>
    </Head>
  </main>
</template>
