const selectors = document.querySelectorAll('#element-toggle')

const sidebar = document.querySelector('.con-nav-sidebar')
const menu = document.getElementById('first-menu')
const deleteGoalBtn = document.getElementById('delete-goal-btn')

// Toggle buttons
selectors.forEach(selector => addEvent(selector))

function addEvent(list) {
  list.addEventListener('click', () => { list.classList.toggle('active') })
}

// Sidebar handler
menu?.addEventListener('click', slideIn)

document.addEventListener('click', slideClose)

function slideIn() {
  const run = setTimeout(slideOpen, 1)
}

function slideOpen() {
  sidebar.classList.add('active')
}

function slideClose(evt) {
  const target = evt.target.closest('.nav-sidebar')
  if (!target) sidebar?.classList.remove('active')
}

deleteGoalBtn?.addEventListener('click', () => { confirm('Are you sure you want to delete?') })