<script setup lang="ts">
defineProps<{
  title: string;
}>();

const open = ref(false);
</script>

<template>
  <div>
    <!-- Trigger Button -->
    <button
      @click="open = true"
      class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Open Modal
    </button>

    <Teleport to="#teleports">
      <!-- Overlay -->
      <div
        v-if="open"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        @click="open = false"
      />

      <!-- Modal Card -->
      <UCard
        v-if="open"
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-xl shadow-2xl"
      >
        <template #header>
          <div class="px-6 py-4 border-b">
            <h3 class="text-xl font-semibold text-gray-900">{{ title }}</h3>
          </div>
        </template>

        <div class="px-6 py-4">
          <slot />
        </div>

        <template #footer>
          <div class="px-6 py-4 border-t bg-gray-50 flex justify-end">
            <button
              @click="open = false"
              class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </template>
      </UCard>
    </Teleport>
  </div>
</template>
