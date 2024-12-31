<script setup lang="ts">
  import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
  const routes = useRouter().getRoutes()
  const currentRoute = useRoute()
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex space-x-8 h-16 items-center">
          <RouterLink
            v-for="route in routes"
            :to="route.path"
            :key="route.path"
            :class="{ 'text-gray-900': currentRoute.path !== route.path }"
            class="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium relative"
            active-class="text-blue-600 font-semibold"
            exact-active-class="after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
          >
            {{ route.name }}
          </RouterLink>
        </nav>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <RouterView />
    </main>
  </div>
</template>
