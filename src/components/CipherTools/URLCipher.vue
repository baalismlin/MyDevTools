<script setup lang="ts">
  import type { DecryptFunction, EncryptFunction } from '@/types'
  import CommonCipher from './CommonCipher.vue'

  const encrypt: EncryptFunction = (data: string) => encodeURIComponent(data)
  const decrypt: DecryptFunction = (data: string) => encodeURIComponent(data)
</script>

<template>
  <CommonCipher schema="URL" :encrypt="encrypt" :decrypt="decrypt" />
</template>
