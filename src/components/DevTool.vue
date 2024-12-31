<script setup lang="ts">
defineProps(["title", "tools"]);
</script>
<template>
  <div class="container mx-auto p-4 max-w-2xl min-w-[360px]">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
      {{ title }}
    </h1>
    <div
      class="bg-white rounded-lg shadow-sm p-4 mb-4"
      v-for="(comp, index) in tools"
      :key="index"
    >
      <component :is="comp"></component>
    </div>
  </div>
</template>
