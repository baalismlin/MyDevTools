<script setup lang="ts">
  import { computed, ref } from 'vue'
  import CopyableResult from '../CopyableResult.vue'

  const itemListRef = ref('')

  const selectedResult = computed(() => {
    let result = ''
    const itemList = itemListRef.value.trim()
    if (itemList === '') {
      return result
    }

    try {
      const items = itemList.split(/\r\n|\r|\n/)
      const randomIndex = Math.floor(Math.random() * items.length)
      result = items[randomIndex]
    } catch (error) {
      console.error(error)
      result = 'Invalid Input List'
    }
    return result
  })
</script>

<template>
  <div class="flex flex-col space-y-3">
    <label class="text-gray-700 font-medium">
      Select an item from a line separated list
    </label>
    <textarea
      type="text"
      v-model="itemListRef"
      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
    >
    </textarea>
    <CopyableResult :result="selectedResult" />
  </div>
</template>
