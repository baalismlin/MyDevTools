<script setup lang="ts">
import { computed, ref } from "vue";

const decodedUrlRef = ref("");

const encodedResult = computed(() => {
  let result = "";
  const decoded = decodedUrlRef.value.trim();
  if (decoded === "") {
    return result;
  }

  try {
    if (decoded) {
      // Encode URL
      result = encodeURIComponent(decoded);
    }
  } catch (error) {
    console.error(error);
    result = "Encode Failed";
  }

  return result;
});
</script>

<template>
  <main>
    <div class="flex flex-col space-y-3">
      <label class="text-gray-700 font-medium"> URL escape: </label>
      <input
        type="text"
        v-model="decodedUrlRef"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
      />
      <label class="text-gray-600 text-sm flex items-center px-3">
        {{ encodedResult }}
      </label>
    </div>
  </main>
</template>
