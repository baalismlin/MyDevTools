<script setup lang="ts">
  import { computed, ref } from 'vue'
  import CopyableResult from '../CopyableResult.vue'
  import type { DecryptFunction, EncryptFunction } from '@/types'

  const props = defineProps<{
    schema: string
    encrypt: EncryptFunction
    decrypt?: DecryptFunction
  }>()
  const isEncrypt = ref(true)
  const inputText = ref('')

  const result = computed(() => {
    let result = ''
    const text = inputText.value
    if (text) {
      if (isEncrypt.value) {
        result = props.encrypt(text)
      } else {
        if (props.decrypt) {
          result = props.decrypt(text)
        }
      }
    }
    return result
  })
</script>

<template>
  <div class="flex flex-col space-y-3">
    <div class="flex items-center justify-between">
      <span class="text-sm font-medium text-gray-900">
        {{ schema }} {{ isEncrypt ? 'Encrypt' : 'Decrypt' }}
      </span>
      <label
        v-if="decrypt"
        class="relative inline-flex items-center cursor-pointer"
      >
        <input type="checkbox" v-model="isEncrypt" class="sr-only peer" />
        <div
          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
        ></div>
      </label>
    </div>

    <input
      type="text"
      :placeholder="
        isEncrypt ? 'Enter text to encrypt' : 'Enter text to decrypt'
      "
      v-model="inputText"
      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
    />
    <CopyableResult :result="result" />
  </div>
</template>
