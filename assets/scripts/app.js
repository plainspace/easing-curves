console.log('👋 hello from the javascript file.')

const easings = document.querySelectorAll('.easing')

function handleClick(el) {
  // show alert
  el.classList.add('clicked')

  // copy to clipboard
  const text = el.querySelector('.js_clipboard_text')
  console.log(text)
  text.select()
  document.execCommand('copy')
  console.log(`%c Copied Text ${text}`, `color: green;`)

  // remove alert
  setTimeout(() => {
    el.classList.remove('clicked')
  }, 800)
}

// listen for clicks
easings.forEach(el => {
  el.addEventListener('click', evt => handleClick(evt.target))
})
