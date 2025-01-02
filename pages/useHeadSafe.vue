<script setup lang="ts">
useSeoMeta({
  title: "Seo and Meta",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <span>oke</span>
    <Head>
      <Meta name="description" :content="title" />
      <Style
        type="text/css"
        children="body { background-color: white; }"
      ></Style>
    </Head>

    <h1>{{ title }}</h1>
  </div>
</template>
