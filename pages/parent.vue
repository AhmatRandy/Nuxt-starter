<template>
  <div>
    <h1>I am the parent view</h1>
    <NuxtPage :page-key="(route) => route.fullPath" />
  </div>
</template>
