<script lang="ts" setup>
  const { config } = useConfig();
  const { cache } = usePosts();

  // Set meta tags
  useHead({
    meta: [
      { name: 'referrer', content: 'no-referrer' },
      { name: 'twitter:card', content: 'summary' }
    ],
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    }
  })

  const APIUrl = "https://deretter.microcms.io/api/v1/config";
  const APIKey= "f56237c7-77d5-4e1d-932a-d19eb2b58496";

  // Fetch App Config
  await fetch(APIUrl, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-MICROCMS-API-KEY": APIKey
    }
  })
    .then(res => res.json())
    .then(data => {
      config.value = data;
    });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <footer>
      <h3>Cached Endpoints</h3>
      <div v-for="c in Object.keys(cache)">{{ c }}</div>
      <h3>Privacy Policy</h3>
      {{ config.privacy_policy }}
      <h3>Copyright</h3>
      {{ config.copyrights }}
      <h3>About</h3>
      {{ config.about }}
    </footer>
  </NuxtLayout>
</template>
