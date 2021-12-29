<script setup>
  const message = new Date();
  console.log("init", message);

  const onClick = () => alert(message);
</script>

<template>
  <div>
    <NuxtPage />
    <footer>
      <button @click="onClick">Init date</button>
    </footer>
  </div>
</template>
