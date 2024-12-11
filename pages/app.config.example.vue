<script setup>
import { useAppConfig } from "nuxt/app";
const config = useAppConfig();
</script>

<template>
  <div>
    <h1>{{ config.siteName }}</h1>
    <NuxtPage />
  </div>
</template>
