<script setup lang="ts">
document.addEventListener('DOMContentLoaded', () => {
  console.log('html loaded')
  timestampToDatetime()
  datetimeToTimestamp()
  urlEscape()
  urlUnescape()
  randomSelection()
})

const timestampToDatetime = () => {
  const timestampInput = document.getElementById('timestamp-input') as HTMLInputElement
  const datetimeLabel = document.getElementById('date-result') as HTMLLabelElement

  timestampInput?.addEventListener('input', () => {
    try {
      const timestamp = parseInt(timestampInput.value.trim())

      if (isFinite(timestamp) && timestamp > 0) {
        const datetime = new Date(timestamp)
        datetimeLabel.textContent = datetime
          .toUTCString()
          .replace('GMT', `${datetime.getMilliseconds()}`)
          .substring(5)
      }
    } catch (error) {
      console.error(error)
      datetimeLabel.textContent = 'Conversion Failed'
    }
  })
}

const datetimeToTimestamp = () => {
  const dateInput = document.getElementById('date-input') as HTMLInputElement
  const timestampLabel = document.getElementById('timestamp-result') as HTMLLabelElement

  try {
    dateInput?.addEventListener('input', () => {
      const timestamp = Date.parse(dateInput.value.trim())
      timestampLabel.textContent = timestamp.toString()
    })
  } catch (error) {
    console.error(error)
    timestampLabel.textContent = 'Conversion Failed'
  }
}

const urlUnescape = () => {
  const encodedInput = document.getElementById('encoded-input') as HTMLInputElement
  const decodedResult = document.getElementById('decoded-result') as HTMLLabelElement

  encodedInput?.addEventListener('input', () => {
    try {
      const encoded = encodedInput.value.trim()
      if (!encoded) {
        decodedResult.textContent = ''
        return
      }

      // Decode URL
      const decoded = decodeURIComponent(encoded)
      decodedResult.textContent = decoded
    } catch (error) {
      console.error(error)
      decodedResult.textContent = 'Decode Failed'
    }
  })
}

const urlEscape = () => {
  const decodedInput = document.getElementById('decoded-input') as HTMLInputElement
  const encodedResult = document.getElementById('encoded-result') as HTMLLabelElement

  decodedInput?.addEventListener('input', () => {
    try {
      const decoded = decodedInput.value.trim()
      if (!decoded) {
        encodedResult.textContent = ''
        return
      }

      // Encode URL
      const encoded = encodeURIComponent(decoded)
      encodedResult.textContent = encoded
    } catch (error) {
      console.error(error)
      encodedResult.textContent = 'Encode Failed'
    }
  })
}

const randomSelection = () => {
  const listInput = document.getElementById('list-input') as HTMLInputElement
  const selectedResult = document.getElementById('selected-result') as HTMLLabelElement

  listInput?.addEventListener('input', () => {
    try {
      const listStr = listInput.value.trim()
      const listItems = listStr.split(/\r\n|\r|\n/)
      console.log(listItems)
      const randomIndex = Math.floor(Math.random() * listItems.length)
      selectedResult.textContent = listItems[randomIndex]
    } catch (error) {
      console.error(error)
      selectedResult.textContent = 'Invalid Input List'
    }
  })
}
</script>

<template>
  <main>
    <div class="container mx-auto p-4 max-w-2xl min-w-[360px]">
      <h1 class="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Timestamp Tools</h1>

      <div class="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div class="flex flex-col space-y-3">
          <label class="text-gray-700 font-medium">Convert timestampe to datetime:</label>
          <div class="grid grid-cols-2 gap-3">
            <input
              type="number"
              id="timestamp-input"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <label class="text-gray-600 text-sm flex items-center px-3" id="date-result"> </label>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm p-4">
        <div class="flex flex-col space-y-3">
          <label class="text-gray-700 font-medium">Convert datetime to timestamp:</label>
          <div class="grid grid-cols-2 gap-3">
            <input
              type="datetime-local"
              id="date-input"
              step="0.001"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <label class="text-gray-600 text-sm flex items-center px-3" id="timestamp-result">
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-4 max-w-2xl min-w-[360px]">
      <h1 class="text-xl sm:text-2xl font-bold text-gray-800 mb-6">String tools</h1>
      <div class="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div class="flex flex-col space-y-3">
          <label class="text-gray-700 font-medium">URL escape:</label>
          <input
            type="text"
            id="decoded-input"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <label class="text-gray-600 text-sm flex items-center px-3" id="encoded-result"> </label>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div class="flex flex-col space-y-3">
          <label class="text-gray-700 font-medium">URL unescape:</label>
          <input
            type="text"
            id="encoded-input"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <label class="text-gray-600 text-sm flex items-center px-3" id="decoded-result"> </label>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-4 max-w-2xl min-w-[360px]">
      <h1 class="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Random tools</h1>

      <div class="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div class="flex flex-col space-y-3">
          <label class="text-gray-700 font-medium">Randomly selection:</label>
          <textarea
            type="text"
            id="list-input"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          >
          </textarea>
          <label class="text-gray-600 text-sm flex items-center px-3" id="selected-result"> </label>
        </div>
      </div>
    </div>
  </main>
</template>
