<script setup lang="ts">
  import { ref } from 'vue'
  import type { Message, ClipboardItem } from '@/types/index'

  const clipboardItems = ref<Array<ClipboardItem>>([])
  const copiedId = ref(-1)

  const getClipboardItems = () => {
    chrome.storage?.local.get(['copyHistory'], (result) => {
      const history = (result.copyHistory || []) as Array<ClipboardItem>
      clipboardItems.value = history
    })
  }

  chrome.runtime?.onMessage.addListener((message: Message) => {
    if (message.action === 'updateCopyHistory') {
      getClipboardItems()
    }
  })

  getClipboardItems()

  // Handle copy item
  const handleCopy = async (item: ClipboardItem) => {
    try {
      await navigator.clipboard.writeText(item.text)
      copiedId.value = item.id
      setTimeout(() => {
        copiedId.value = -1
      }, 2000)

      // Move item to top
      clipboardItems.value = [
        { ...item, id: Date.now() },
        ...clipboardItems.value.filter((i) => i.id !== item.id),
      ]
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Format timestamp
  const formatTime = (date: number) => {
    const now = Date.now()
    const diff = now - date

    if (diff < 60000) return 'Just now'
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`
    return new Date(date).toLocaleString()
  }

  const clearHistory = async () => {
    copiedId.value = -1
    clipboardItems.value = new Array<ClipboardItem>()

    await chrome.storage?.local.set({ copyHistory: null })
  }
</script>
<template>
  <div class="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md relative">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">Clipboard History</h2>
      <button
        class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
        @click="clearHistory"
      >
        Clear All
      </button>
    </div>
    <div class="space-y-2">
      <div
        v-for="item in clipboardItems"
        :key="item.id"
        class="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border"
      >
        <div class="flex-grow">
          <div class="text-sm text-gray-900 break-all">
            {{ item.text }}
          </div>
          <div class="flex items-center mt-1 text-xs text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3 mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <div>
              {{ formatTime(item.id) }}
            </div>
          </div>
        </div>
        <button
          @click="handleCopy(item)"
          class="p-2 rounded-md hover:bg-gray-100 transition-colors"
          title="Copy to clipboard"
        >
          <svg
            v-if="copiedId === item.id"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-green-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </button>
      </div>
      <div
        v-if="clipboardItems.length === 0"
        class="text-center text-gray-500 py-8"
      >
        No clipboard history yet, reload the page and try again please.
      </div>
    </div>
  </div>
</template>
