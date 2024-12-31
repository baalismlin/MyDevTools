<script setup lang="ts">
  import { computed, ref } from 'vue'
  import CopyableResult from '../CopyableResult.vue'

  const datetimeRef = ref(new Date().toISOString().slice(0, 19))

  const timestampResult = computed(() => {
    let result = ''
    try {
      const timestamp = Date.parse(datetimeRef.value)
      result = timestamp.toString()
    } catch (error) {
      console.error(error)
      result = 'Conversion Failed'
    }
    return result
  })
</script>

<template>
  <div class="flex flex-col space-y-3">
    <label class="text-gray-700 font-medium">
      Convert datetime to timestamp:
    </label>
    <div class="grid grid-cols-2 gap-3">
      <input
        type="datetime-local"
        v-model="datetimeRef"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
      />
      <CopyableResult :result="timestampResult" />
    </div>
  </div>
</template>
