<script setup lang="ts">
import { computed, ref } from "vue";

const timestampRef = ref(0);

const datetimeResult = computed(() => {
  let result = "";
  try {
    const timestamp = timestampRef.value;
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

const datetimeRef = ref(new Date().toISOString().slice(0, 19));

const timestampResult = computed(() => {
  let result = "";
  try {
    const timestamp = Date.parse(datetimeRef.value);
    result = timestamp.toString();
  } catch (error) {
    console.error(error);
    result = "Conversion Failed";
  }
  return result;
});
</script>

<template>
  <main>
    <div class="container mx-auto p-4 max-w-2xl min-w-[360px]">
      <h1 class="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
        Timestamp Tools
      </h1>

      <div class="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div class="flex flex-col space-y-3">
          <label class="text-gray-700 font-medium"
            >Convert timestampe to datetime:</label
          >
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
      </div>

      <div class="bg-white rounded-lg shadow-sm p-4">
        <div class="flex flex-col space-y-3">
          <label class="text-gray-700 font-medium"
            >Convert datetime to timestamp:</label
          >
          <div class="grid grid-cols-2 gap-3">
            <input
              type="datetime-local"
              v-model="datetimeRef"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <label class="text-gray-600 text-sm flex items-center px-3">
              {{ timestampResult }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
