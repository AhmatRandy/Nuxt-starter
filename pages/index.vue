<script setup lang="js">
const layout = "default"
</script>
<template>
  <div class="home-container">
    <h1 class="title">Welcome to Nuxt Starter</h1>
    <div class="features-grid">
      <div class="feature-card">
        <h3>Vue 3</h3>
        <p>Latest Vue.js version with Composition API</p>
      </div>
      <div class="feature-card">
        <h3>TypeScript</h3>
        <p>Full TypeScript support out of the box</p>
      </div>
      <div class="feature-card">
        <h3>Auto Imports</h3>
        <p>Components and composables auto-importing</p>
      </div>
      <div class="feature-card">
        <h3>File-based Routing</h3>
        <p>Automatic routing based on files structure</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  padding: 2rem 0;
}

.title {
  font-size: 2.5rem;
  color: #0c4a6e;
  text-align: center;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: #00dc82;
  margin-bottom: 1rem;
}
</style>
