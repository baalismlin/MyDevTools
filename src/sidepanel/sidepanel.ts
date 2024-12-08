import './sidepanel.css'

document.addEventListener('DOMContentLoaded', () => {
  const sideButton = document.getElementById('convertButton')
  const timestampElement = document.getElementById('timestamp') as HTMLInputElement
  const datetimeLabel = document.getElementById('datetimeLabel') as HTMLLabelElement

  sideButton?.addEventListener('click', () => {
    const timestamp = parseInt(timestampElement?.value)

    if (isFinite(timestamp) && timestamp > 0) {
      const datetime = new Date(timestamp)
      // Locale String with Options
      const options = {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        fractionalSecondDigits: 3
      } as const
      datetimeLabel.innerText = datetime.toLocaleString("en-US", options)
    }

  })
})
