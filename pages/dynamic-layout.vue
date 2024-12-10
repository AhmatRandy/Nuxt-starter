<script setup lang="ts">
// definePageMeta({
//   layout: false,
// });
</script>

<template>
  <NuxtLayout>
    <p>tes 123</p>
  </NuxtLayout>

  <button @click="setPageLayout('custom')">add layout</button>
  <button @click="setPageLayout(false)">remove layout</button>
</template>
