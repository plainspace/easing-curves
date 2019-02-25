console.log('👋 hello from the javascript file.')

const easings = document.querySelectorAll('.easing')

easings.forEach(elem => {
  elem.addEventListener('mouseover', ({ target }) => {
    target.classList.add('active')
    // document.documentElement.classList.add('should-fade')
  })
  elem.addEventListener('mouseout', ({ target }) => {
    target.classList.remove('active')
    // document.documentElement.classList.remove('should-fade')
  })
})
