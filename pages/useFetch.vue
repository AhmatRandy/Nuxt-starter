<script setup lang="ts">
const name = ref("");
const { data } = await useFetch("https://jsonplaceholder.typicode.com/posts");

async function handleFormSubmit() {
  const res = await $fetch("/api/submit", {
    method: "POST",
    body: {
      name: name.value,
    },
  });
}
</script>

<template>
  <!-- <div v-if="data == null">No data</div> -->
  <div>
    <form @submit="handleFormSubmit">
      <!-- form input tags -->
      <label>name</label>
      <input v-model="name" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<!-- <script setup lang="ts">
const router = useRouter();

const postData = await $fetch("https://jsonplaceholder.typicode.com/posts");

console.log("data", postData);
</script>

<template>
  <div class="p-5 bg-gray-100 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-4">Daftar Post</h1>
    <label>name</label>
    <input v-model="name" />
    <span
      v-for="item in postData"
      :key="item.id"
      class="block mb-2 p-3 bg-white border hover:text-blue-300 hover:underline border-gray-300 rounded hover:bg-gray-200 transition"
      @click="() => router.push(`/post/${item.id}`)"
    >
      {{ item.title }}
    </span>
  </div>
</template> -->
