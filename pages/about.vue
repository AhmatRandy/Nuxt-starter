<script setup lang="ts"></script>

<template>
  <ClientOnly fallback-tag="h1" fallback="Loading comments...">
    <div class="about-container">
      <h1 class="title">About Us</h1>
      <div class="content">
        <p class="description">
          We are a team of passionate developers building amazing web
          applications with Nuxt.js. Our mission is to create fast, scalable,
          and user-friendly applications.
        </p>
        <div class="team-section">
          <h2>Our Team</h2>
          <div class="team-grid">
            <div class="team-member">
              <h3>John Doe</h3>
              <p>Frontend Developer</p>
            </div>
            <div class="team-member">
              <h3>Jane Smith</h3>
              <p>UI/UX Designer</p>
            </div>
            <div class="team-member">
              <h3>Mike Johnson</h3>
              <p>Backend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.about-container {
  padding: 2rem 0;
}

.title {
  font-size: 2.5rem;
  color: #0c4a6e;
  text-align: center;
  margin-bottom: 2rem;
}

.content {
  max-width: 800px;
  margin: 0 auto;
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 3rem;
}

.team-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.team-section h2 {
  color: #00dc82;
  margin-bottom: 2rem;
  text-align: center;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.team-member {
  text-align: center;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
}

.team-member h3 {
  color: #0c4a6e;
  margin-bottom: 0.5rem;
}

.team-member p {
  color: #64748b;
}
</style>
