<script setup lang="ts">
definePageMeta({
  title: "Child Page",
  description: "This is the child page description.",
});

const route = useRoute();
</script>

<template>
  <p>oke</p>

  <h1>{{ route.meta.title }}</h1>
  <h1>{{ route.meta.description }}</h1>
</template>
