<script setup lang="ts">
  import { ref } from 'vue'
  import MarkdownDisplay from '../MarkdownDisplay.vue'

  const apiUrl = 'https://api.github.com/repos/tldr-pages/tldr/contents/pages'
  const command = ref('')
  const platform = ref('common')
  const searchResults = ref('')

  interface CommandResponse {
    content: string
    download_url: string
    encoding: string
    git_url: string
    html_url: string
    name: string
    path: string
    sha: string
    size: number
    type: string
    url: string
    _links: {
      git: string
      html: string
      self: string
    }
  }

  const handleSearch = async () => {
    const response = await fetch(
      `${apiUrl}/${platform.value}/${command.value}.md`,
    )
    const { content, encoding }: CommandResponse = await response.json()
    if (content && encoding == 'base64') {
      searchResults.value = atob(content)
    }
  }
</script>

<template>
  <div class="max-w-2xl mx-auto p-4">
    <!-- Search Section -->
    <div class="flex gap-2 mb-6">
      <input
        v-model="command"
        type="text"
        placeholder="curl"
        @keyup.enter="handleSearch"
        class="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        @click="handleSearch"
        class="px-6 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Search
      </button>
    </div>

    <!-- Results Section -->
    <div v-if="searchResults" class="space-y-4 text-sm text-gray-500 mb-2">
      <MarkdownDisplay :content="searchResults" />
    </div>
  </div>
</template>
