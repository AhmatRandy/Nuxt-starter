<script lang="ts" setup>
const page = ref<string>("1");
const { data: posts } = await useAsyncData(
  "posts",
  () =>
    $fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${page?.value}`
    ),
  {
    watch: [page],
  }
);
</script>
<template>
  <label>search</label>
  <input v-model="page" />
  <span v-if="posts.length === 0">data not found</span>
  <ClientOnly fallback="loading..">
    <div v-for="items in posts">
      <ul>
        <li>
          {{ items.title }}
          {{ items.body }}
        </li>
      </ul>
    </div>
  </ClientOnly>
</template>
