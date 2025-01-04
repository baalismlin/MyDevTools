document.addEventListener('copy', async () => {
  const copiedText = document.getSelection()?.toString()
  if (copiedText) {
    console.log(copiedText)
    chrome.storage?.local.get(['copyHistory'], async (result) => {
      const history = result.copyHistory || []
      history.unshift({ text: copiedText, id: Date.now() })
      if (history.length > 50) {
        history.pop()
      }
      await chrome.storage?.local.set({ copyHistory: history })
    })

    // Broadcast the message to all extension pages
    try {
      await chrome.runtime?.sendMessage({
        action: 'updateCopyHistory',
      })
    } catch (error) {
      console.log(error)
    }
  }
})
