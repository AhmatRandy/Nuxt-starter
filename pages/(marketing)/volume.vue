<script setup lang="ts">
definePageMeta({
  title: "my volume page",
});

const route = useRoute();
</script>

<template>
  <p>{{ route.meta.title }}</p>
</template>

<style scoped></style>
