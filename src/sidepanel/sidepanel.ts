import './sidepanel.css'

const now = new Date()

document.addEventListener('DOMContentLoaded', () => {
  timestampToDatetime()
  datetimeToTimestamp()
  urlEscapeOrUnescape()
})

const timestampToDatetime = () => {
  const timestampInput = document.getElementById('timestamp-input') as HTMLInputElement
  const datetimeLabel = document.getElementById('date-result') as HTMLLabelElement

  timestampInput?.addEventListener('input', () => {
    const timestamp = parseInt(timestampInput?.value)

    if (isFinite(timestamp) && timestamp > 0) {
      const datetime = new Date(timestamp)
      datetimeLabel.innerText = datetime.toUTCString().replace('GMT', `${datetime.getMilliseconds()}`).substring(5)
    }

  })

  // timestampInput.value = now.getTime().toString()
  // const event = new Event('input', { bubbles: true })
  // timestampInput.dispatchEvent(event)
}

const datetimeToTimestamp = () => {
  const dateInput = document.getElementById('date-input') as HTMLInputElement
  const timestampLabel = document.getElementById('timestamp-result') as HTMLLabelElement

  dateInput?.addEventListener('input', () => {
    console.log(dateInput.value)
    const timestamp = Date.parse(dateInput.value)
    timestampLabel.innerText = timestamp.toString()
  })

  // dateInput.value = `${now.getUTCFullYear()}-${getTwoDigit(now.getUTCMonth() + 1)}-${getTwoDigit(now.getUTCDate())}T${getTwoDigit(now.getUTCHours())}:${getTwoDigit(now.getUTCMinutes())}:${getTwoDigit(now.getUTCSeconds())}`
  // const event = new Event('input', { bubbles: true })
  // dateInput.dispatchEvent(event)
}

const getTwoDigit = (value: number) => ("0" + value).slice(-2)


const urlEscapeOrUnescape = () => {

}
