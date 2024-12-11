<script lang="ts" setup>
const count = ref(0);
</script>

<template>
  <header class="bg-gray-800 text-white p-4">
    <nav class="flex justify-center">
      <NuxtLink to="/" class="text-white decoration-none p-2 hover:bg-green-300"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/about"
        class="text-white decoration-none p-2 hover:bg-green-300"
        >About</NuxtLink
      >
      <NuxtLink
        to="/contact"
        class="text-white decoration-none p-2 hover:bg-green-300"
        >Contact</NuxtLink
      >
      <NuxtLink
        to="/dynamic-layout"
        class="text-white decoration-none p-2 hover:bg-green-300"
        >Dynamic Layout</NuxtLink
      >
      <NuxtLink
        to="/teleport"
        class="text-white decoration-none p-2 hover:bg-green-300"
        >Teleport</NuxtLink
      >
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #343a40;
  color: white;
  padding: 15px 0;
}

.nav-container {
  display: flex;
  justify-content: center;
}

.nav-link {
  text-decoration: none;
  color: white;
  padding: 10px 15px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #495057;
}
</style>
