<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(
  "data",
  () => $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`),
  {
    watch: [route],
  }
);

console.log("data", data);
</script>

<template>
  <div class="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl font-bold mb-2">{{ data?.title }}</h1>
    <p class="text-gray-700 mb-4">{{ data?.body }}</p>
    <div class="flex justify-between">
      <button
        @click="() => $router.push(`/useFetch`)"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        back
      </button>
      <button
        class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
      >
        Share
      </button>
    </div>
  </div>
</template>
