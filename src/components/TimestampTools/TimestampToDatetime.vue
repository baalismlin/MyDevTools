<script setup lang="ts">
import { computed, ref } from "vue";

const timestampRef = ref(0);

const datetimeResult = computed(() => {
  let result = "";
  const timestamp = timestampRef.value;
  if (timestamp === 0) {
    return result;
  }

  try {
    if (isFinite(timestamp) && timestamp > 0) {
      const datetime = new Date(timestamp);
      result = datetime
        .toUTCString()
        .replace("GMT", `${datetime.getMilliseconds()}`)
        .substring(5);
    }
  } catch (error) {
    console.error(error);
    result = "Conversion Failed";
  }
  return result;
});
</script>

<template>
  <main>
    <div class="flex flex-col space-y-3">
      <label class="text-gray-700 font-medium">
        Convert timestampe to datetime:
      </label>
      <div class="grid grid-cols-2 gap-3">
        <input
          type="number"
          v-model="timestampRef"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        />
        <label class="text-gray-600 text-sm flex items-center px-3">
          {{ datetimeResult }}
        </label>
      </div>
    </div>
  </main>
</template>
