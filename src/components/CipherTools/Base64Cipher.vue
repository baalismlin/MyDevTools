<script setup lang="ts">
  import type { DecryptFunction, EncryptFunction } from '@/types'
  import CommonCipher from './CommonCipher.vue'

  const encrypt: EncryptFunction = (data: string) => btoa(data)
  const decrypt: DecryptFunction = (data: string) => atob(data)
</script>

<template>
  <CommonCipher schema="Base64" :encrypt="encrypt" :decrypt="decrypt" />
</template>
