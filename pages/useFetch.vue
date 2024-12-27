<script setup lang="ts">
import { comment } from "postcss";

const query = ref<string>("");
const comments = ref([]);

const { data, refresh } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts"
);

const router = useRouter();
async function handleFormSubmit(event: any) {
  event.preventDefault();
  const dataTwice = await $fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${query?.value}`
  );

  comments.value = dataTwice;
}
</script>

<template>
  <div class="p-5 bg-gray-100 rounded-lg shadow-md">
    <form @submit="handleFormSubmit">
      <label>search comment</label>
      <input v-model="query" />
      <button class="bg-blue-400" type="submit">submit</button>
    </form>

    <div class="flex gap-4">
      <div class="bg-white shadow-lg rounded-md">
        <h1>post data</h1>
        <button @click="refresh()">refresh</button>
        <span
          v-for="item in data"
          :key="item.id"
          class="block mb-2 p-3 bg-white border hover:text-blue-300 hover:underline border-gray-300 rounded hover:bg-gray-200 transition"
          @click="() => router.push(`/post/${item.id}`)"
        >
          {{ item.title }}
        </span>
      </div>
      <div class="bg-white shadow-lg rounded-md">
        <h1>comment data</h1>
        <!-- Menampilkan komentar jika ada -->
        <h3>Comments:</h3>
        <div v-for="comment in comments" :key="comment.id">
          <p>{{ comment.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
