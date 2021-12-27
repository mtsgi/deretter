<template>
  <p>
    Post
    {{ $route.params.id }}
    <Head>
      <Title>Post {{ $route.params.id }}</Title>
      <Meta name="description" :content="`Post ${ $route.params.id }`" />
    </Head>
  </p>
</template>
