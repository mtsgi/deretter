<template>
  <p>
    <h2>User {{ $route.params.id }}</h2>

    <Head>
      <Title>User {{ $route.params.id }}</Title>
      <Meta name="description" :content="`User ${ $route.params.id }`" />
    </Head>
  </p>
</template>
