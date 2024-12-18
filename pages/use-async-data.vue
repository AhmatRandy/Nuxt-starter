<script setup lang="ts">
const page = ref(1);
const { data: posts } = await useAsyncData(
  "posts",
  () =>
    $fetch("https://fakeApi.com/posts", {
      params: {
        page: page.value,
      },
    }),
  {
    watch: [page],
  }
);

console.log("posts", posts);
</script>

<template>
  <div>
    <!-- <h1>{{ data }}</h1> -->
  </div>
</template>
