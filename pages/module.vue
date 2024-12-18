<script setup lang="ts">
const param1 = ref("value1");
const { data, status, error, refresh } = await useFetch("/api/modules", {
  query: { param1, param2: "value2" },
});

console.log("data", error);
</script>

<template>
  <span v-if="error">{{ status }}</span>
</template>
