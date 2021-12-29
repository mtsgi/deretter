<template>
  <p>
    User
    {{ $route.params.id }}
    <Head>
      <Title>User {{ $route.params.id }}</Title>
      <Meta name="description" :content="`User ${ $route.params.id }`" />
    </Head>
  </p>
</template>
