<template>
  <NuxtLoadingIndicator />
  <div class="contact-container">
    <h1 class="title">Contact Us</h1>
    <div class="contact-content">
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  console.log("Form submitted:", form);
  // Add your form submission logic here
};
</script>

<style scoped>
.contact-container {
  padding: 2rem 0;
}

.title {
  font-size: 2.5rem;
  color: #0c4a6e;
  text-align: center;
  margin-bottom: 2rem;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #0c4a6e;
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #00dc82;
  box-shadow: 0 0 0 3px rgba(0, 220, 130, 0.1);
}

.submit-btn {
  background: #00dc82;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.submit-btn:hover {
  background: #00b76b;
}
</style>
