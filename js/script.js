const selectors = document.querySelectorAll('.con-selector .secondary-button')

selectors.forEach(selector => addEvent(selector))

function addEvent(list) {
  list.addEventListener('click', () => { list.classList.toggle('active') })
}
