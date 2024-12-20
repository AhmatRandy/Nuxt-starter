<template>
  <div>
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Title -->
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-900">Teleport Demo</h1>
        <p class="mt-2 text-gray-600">
          Demonstrasi perbedaan SSR dan Client Teleport
        </p>
      </div>

      <!-- SSR Teleport -->
      <Teleport to="#teleports">
        <div class="flex justify-center">
          <div
            class="w-full max-w-lg p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg"
          >
            <h3 class="text-xl font-bold text-red-600 mb-2">SSR Teleport</h3>
            <p class="text-green-50">
              Hello from Server-side teleport! This content is rendered on the
              server.
            </p>
            <div
              class="mt-4 inline-block px-3 py-1 bg-green-700 text-white text-sm rounded-full"
            >
              Server Rendered ⚡
            </div>
          </div>
        </div>
      </Teleport>

      <!-- Client Teleport -->
      <ClientOnly>
        <Teleport to="#teleports">
          <div class="flex justify-center">
            <div
              class="w-full max-w-lg p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg"
            >
              <h3 class="text-xl font-bold text-white mb-2">Client Teleport</h3>
              <p class="text-blue-50">
                Hello from Client-side teleport! This content is rendered only
                on the client.
              </p>
              <div
                class="mt-4 inline-block px-3 py-1 bg-blue-700 text-white text-sm rounded-full"
              >
                Client Rendered 🌐
              </div>
            </div>
          </div>
        </Teleport>
      </ClientOnly>

      <!-- Modal Example -->
      <div class="flex justify-center mt-8">
        <Modal title="Teleport Modal">
          <div class="text-gray-600">
            <p>Hello from Modal teleport!</p>
            <p class="mt-4">
              This is an example of a modal with improved styling using Tailwind
              CSS.
            </p>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
