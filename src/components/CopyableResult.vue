<script setup lang="ts">
  const props = defineProps(['result'])

  function copyResult() {
    navigator.clipboard.writeText(props.result)
  }
</script>

<template>
  <label
    class="text-gray-600 text-sm flex items-center px-3 py-2 cursor-pointer hover:bg-gray-50 relative group w-full"
    @click="copyResult"
  >
    <div class="flex-1 truncate" :title="result">
      {{ result }}
    </div>
    <span
      class="invisible group-hover:visible text-xs text-gray-400 ml-2 whitespace-nowrap"
    >
      click to copy
    </span>
  </label>
</template>
