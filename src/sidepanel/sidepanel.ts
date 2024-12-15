import './sidepanel.css'

const now = new Date()

document.addEventListener('DOMContentLoaded', () => {
  timestampToDatetime()
  datetimeToTimestamp()
  urlEscapeOrUnescape()
})

const timestampToDatetime = () => {
  const timestampInput = document.getElementById('timestampInput') as HTMLInputElement
  const datetimeLabel = document.getElementById('datetimeLabel') as HTMLLabelElement

  timestampInput?.addEventListener('input', () => {
    const timestamp = parseInt(timestampInput?.value)

    if (isFinite(timestamp) && timestamp > 0) {
      const datetime = new Date(timestamp)
      datetimeLabel.innerText = datetime.toUTCString().replace('GMT', `${datetime.getMilliseconds()}`).substring(5)
    }

  })

  timestampInput.value = now.getTime().toString()
  const event = new Event('input', { bubbles: true })
  timestampInput.dispatchEvent(event)
}

const datetimeToTimestamp = () => {
  const dateInput = document.getElementById('dateInput') as HTMLInputElement
  const timeInput = document.getElementById('timeInput') as HTMLInputElement
  const millisecondInput = document.getElementById('millisecondInput') as HTMLInputElement
  const timestampLabel = document.getElementById('timestampLabel') as HTMLLabelElement

  const arr = [dateInput, timeInput, millisecondInput].forEach(inputElement => {
    inputElement?.addEventListener('input', () => {
      const timestamp = Date.parse(`${dateInput.value}T${timeInput.value}.${millisecondInput.value}Z`)

      timestampLabel.innerText = timestamp.toString()
    })
  })

  dateInput.value = `${now.getUTCFullYear()}-${getTwoDigit(now.getUTCMonth() + 1)}-${getTwoDigit(now.getUTCDate())}`
  timeInput.value = `${getTwoDigit(now.getUTCHours())}:${getTwoDigit(now.getUTCMinutes())}:${getTwoDigit(now.getUTCSeconds())}`
  millisecondInput.value = now.getUTCMilliseconds().toString()

  const event = new Event('input', { bubbles: true })
  millisecondInput.dispatchEvent(event)
}

const getTwoDigit = (value: number) => ("0" + value).slice(-2)


const urlEscapeOrUnescape = () => {

}
