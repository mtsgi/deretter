<script lang="ts" setup>
  const { config } = useConfig();
  const { getHashtags } = usePosts();

  const endpoint = `${config.value.api_base}derepo/hashtags`
  const hashtags = await getHashtags(endpoint);

  const sorted = computed(() => {
    return [...hashtags].reverse()
  });
</script>

<template>
  <p>
    <h2>Hashtags</h2>

    <ul>
      <li v-for="hashtag in sorted">
        <NuxtLink :to="`/hashtags/${hashtag.id}`">
          #{{ hashtag.word }}
        </NuxtLink>
      </li>
    </ul>

    <Head>
      <Title>Hashtags | deretter</Title>
      <Meta name="description" content="Hashtags" />
    </Head>
  </p>
</template>

<style lang="scss" scoped>
  ul {
    padding: 0;
    li {
      list-style: none;
      a {
        display: block;
        color: rgb(30, 156, 241);
        line-height: 2;
      }
    }
  }
</style>
