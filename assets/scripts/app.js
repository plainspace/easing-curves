console.log('👋 hello from the javascript file.')

const easings = document.querySelectorAll('.easing')

function handleClick(el) {
  // show alert
  el.classList.add('clicked')

  // copy to clipboard

  // remove alert
  setTimeout(() => {
    el.classList.remove('clicked')
  }, 800)
}

// listen for clicks
easings.forEach(el => {
  el.addEventListener('click', evt => handleClick(evt.target))
})
