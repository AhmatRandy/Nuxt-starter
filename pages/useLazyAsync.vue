<script setup lang="ts">
const { status, data: count } = useLazyAsyncData("count", () =>
  $fetch("https://jsonplaceholder.typicode.com/posts")
);

console.log("status", status);
</script>

<template>
  <div>
    {{ status === "pending" ? "Loading" : count }}
  </div>
</template>
