<script setup lang="ts">
const route = useRoute();

if (route.params.group === "admins" && !route.params.id) {
  console.log("Warning! Make sure user is authenticated!");
}

console.log("oke", route.params.slug);
</script>

<template>
  <p v-if="route.params.slug.includes(`admins`)">{{ $route.params.slug }}</p>
</template>
