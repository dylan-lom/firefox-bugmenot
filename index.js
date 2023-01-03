browser.tabs
  .query( { active: true, windowId: browser.windows.WINDOW_ID_CURRENT })
  .then(tabs => tabs[0])
  .then(tab => tab.url
    .split(/https?:\/\//)[1]
    .split(/\//)[0]
  )
  .then(domain => browser.windows.create({
    url: `https://bugmenot.com/view/${domain}`,
  }))
  .catch(err => {
    document.querySelector('#error').innerHTML = err.toString()
  })
