<script setup lang="ts">
  import DevTool from '@/components/DevTool.vue'

  import URLCipher from '@/components/CipherTools/URLCipher.vue'
  import Base64Cipher from '@/components/CipherTools/Base64Cipher.vue'
  import HashCipher from '@/components/CipherTools/HashCipher.vue'

  import TimestampToDatetime from '@/components/TimestampTools/TimestampToDatetime.vue'
  import DatetimeToTimestamp from '@/components/TimestampTools/DatetimeToTimestamp.vue'

  import SelectFromList from '@/components/RandomTools/SelectFromList.vue'

  const devTools = [
    {
      title: 'Time Tools',
      tools: [DatetimeToTimestamp, TimestampToDatetime],
    },
    {
      title: 'Cipher Tools',
      tools: [URLCipher, Base64Cipher, HashCipher],
    },
    {
      title: 'Random tools',
      tools: [SelectFromList],
    },
  ]
</script>

<template>
  <main>
    <DevTool
      v-for="(devTool, index) in devTools"
      :key="index"
      :title="devTool.title"
      :tools="devTool.tools"
    />
  </main>
</template>
