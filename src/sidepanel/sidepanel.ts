import './sidepanel.css'

const now = new Date()

document.addEventListener('DOMContentLoaded', () => {
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
        datetimeLabel.textContent = datetime.toUTCString().replace('GMT', `${datetime.getMilliseconds()}`).substring(5)
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

const getTwoDigit = (value: number) => ("0" + value).slice(-2)


const urlEscape = () => {
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

const urlUnescape = () => {
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
      let listItems = listStr.split(/\r\n|\r|\n/)
      console.log(listItems)
      const randomIndex = Math.floor(Math.random() * listItems.length)
      selectedResult.textContent = listItems[randomIndex]
    } catch (error) {
      console.error(error)
      selectedResult.textContent = 'Invalid Input List'
    }
  })
}
