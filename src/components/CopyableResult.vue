<script setup lang="ts">
const props = defineProps(["result"]);

function copyResult() {
  navigator.clipboard.writeText(props.result);
}
</script>

<template>
  <label
    class="text-gray-600 text-sm flex items-center px-3 cursor-pointer hover:bg-gray-50 relative group"
    @click="copyResult"
    title="click to copy the content"
  >
    {{ result }}
    <span class="invisible group-hover:visible text-xs text-gray-400 ml-2">
      click to copy
    </span>
  </label>
</template>
