<script setup lang="ts">
  import { Marked } from 'marked'
  import { markedHighlight } from 'marked-highlight'
  import hljs from 'highlight.js'
  import 'highlight.js/styles/github.css'
  import { computed } from 'vue'

  const marked = new Marked(
    markedHighlight({
      emptyLangClass: 'hljs',
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      },
    }),
  )

  const props = defineProps<{
    content: string
  }>()

  const htmlContent = computed(() => {
    return marked.parse(props.content)
  })
</script>

<template>
  <div class="w-full">
    <div class="markdown-body prose max-w-none" v-html="htmlContent" />
  </div>
</template>

<style>
  .markdown-body {
    @apply text-gray-800 text-base leading-relaxed;
  }

  .markdown-body h1 {
    @apply text-4xl font-bold mb-4 pb-2 border-b border-gray-200;
  }

  .markdown-body h2 {
    @apply text-3xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200;
  }

  .markdown-body h3 {
    @apply text-2xl font-semibold mt-6 mb-4;
  }

  .markdown-body h4 {
    @apply text-xl font-semibold mt-6 mb-4;
  }

  .markdown-body p {
    @apply mb-4;
  }

  .markdown-body ul,
  .markdown-body ol {
    @apply pl-8 mb-4;
  }

  .markdown-body ul {
    @apply list-disc;
  }

  .markdown-body ol {
    @apply list-decimal;
  }

  .markdown-body li {
    @apply mb-2;
  }

  .markdown-body pre {
    @apply bg-gray-50 rounded-lg p-4 mb-4 overflow-x-auto;
  }

  .markdown-body code {
    @apply bg-gray-100 text-sm px-1.5 py-0.5 rounded font-mono;
  }

  .markdown-body pre code {
    @apply bg-transparent p-0 text-sm;
  }

  .markdown-body blockquote {
    @apply pl-4 border-l-4 border-gray-300 text-gray-600 my-4;
  }

  .markdown-body table {
    @apply w-full mb-4 border-collapse;
  }

  .markdown-body table th,
  .markdown-body table td {
    @apply border border-gray-300 p-2;
  }

  .markdown-body table th {
    @apply bg-gray-50;
  }

  .markdown-body table tr:nth-child(2n) {
    @apply bg-gray-50;
  }

  .markdown-body a {
    @apply text-blue-600 hover:underline;
  }

  .markdown-body hr {
    @apply my-8 border-t border-gray-200;
  }

  .markdown-body img {
    @apply max-w-full rounded-lg my-4;
  }
</style>
