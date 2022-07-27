const selectors = document.querySelectorAll('.con-selector .secondary-button')

const sidebar = document.querySelector('.con-nav-sidebar')
const menu = document.getElementById('first-menu')

selectors.forEach(selector => addEvent(selector))

function addEvent(list) {
  list.addEventListener('click', () => { list.classList.toggle('active') })
}

menu.addEventListener('click', slideIn)

document.addEventListener('click', slideClose)

function slideIn() {
  const run = setTimeout(slideOpen, 1)
}

function slideOpen() {
  sidebar.classList.add('active')
}

function slideClose(evt) {
  const target = evt.target.closest('.nav-sidebar')
  if (!target) sidebar.classList.remove('active')
}
