<script setup lang="ts">
  import type { EncryptFunction } from '@/types'
  import CommonCipher from './CommonCipher.vue'
  import MD5 from 'crypto-js/MD5'
  import SHA1 from 'crypto-js/SHA1'
  import SHA256 from 'crypto-js/SHA256'
  import SHA512 from 'crypto-js/SHA512'

  const md5: EncryptFunction = (data: string) => MD5(data).toString()
  const sha1: EncryptFunction = (data: string) => SHA1(data).toString()
  const sha256: EncryptFunction = (data: string) => SHA256(data).toString()
  const sha512: EncryptFunction = (data: string) => SHA512(data).toString()
</script>

<template>
  <CommonCipher schema="MD5" :encrypt="md5" />
  <CommonCipher schema="SHA1" :encrypt="sha1" class="mt-4" />
  <CommonCipher schema="SHA256" :encrypt="sha256" class="mt-4" />
  <CommonCipher schema="SHA512" :encrypt="sha512" class="mt-4" />
</template>
