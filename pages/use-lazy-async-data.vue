<script setup lang="ts">
const { status, data: count } = await useLazyAsyncData("count", () =>
  $fetch("/api/count")
);
const name = ref("");
// console.log("data", data);

watch(count, (newCount) => {
  // Because count might start out null, you won't have access
  // to its contents immediately, but you can watch it.
});
</script>

<template>
  <span>{{ status }}</span>
  <div>
    {{ status === "error" ? "Loading" : count }}
  </div>
</template>
