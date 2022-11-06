const ratings = document.querySelectorAll('.con-row .ratings i')

ratings.forEach(elem => {
  elem.addEventListener('click', () => elem.classList.toggle('fa-solid'))
})

