<script setup lang="ts">
import { computed, ref } from "vue";

const encodedUrlRef = ref("");

const decodedResult = computed(() => {
  let result = "";
  const encoded = encodedUrlRef.value.trim();
  if (encoded === "") {
    return result;
  }

  try {
    if (encoded) {
      // Decode URL
      result = decodeURIComponent(encoded);
    }
  } catch (error) {
    console.error(error);
    result = "Decode Failed";
  }
  return result;
});
</script>

<template>
  <main>
    <div class="flex flex-col space-y-3">
      <label class="text-gray-700 font-medium"> URL unescape: </label>
      <input
        type="text"
        v-model="encodedUrlRef"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
      />
      <label class="text-gray-600 text-sm flex items-center px-3">
        {{ decodedResult }}
      </label>
    </div>
  </main>
</template>
