<script lang="ts" setup>
const count = ref(0);
</script>

<template>
  <header class="app-header">
    <nav class="nav-container">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/about" class="nav-link">About</NuxtLink>
      <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
      <NuxtLink to="/dynamic-layout" class="nav-link">Dynamic Layout</NuxtLink>
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
