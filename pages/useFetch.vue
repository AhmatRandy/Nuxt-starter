<script setup lang="ts">
const router = useRouter();

const { data, status, error, refresh } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts"
);

console.log("data", data);
</script>

<template>
  <div class="p-5 bg-gray-100 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-4">Daftar Post</h1>
    <span
      v-for="item in data"
      :key="item.id"
      class="block mb-2 p-3 bg-white border hover:text-blue-300 hover:underline border-gray-300 rounded hover:bg-gray-200 transition"
      @click="() => router.push(`/post/${item.id}`)"
    >
      {{ item.title }}
    </span>
  </div>
</template>
