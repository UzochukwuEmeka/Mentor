const goalCard = document.querySelectorAll('.goal-card')

function handleCardElem(elem) {
  const statusDpd = elem.querySelector('.dropdown .status-btn-3')
  const statusContent = elem.querySelectorAll('.dropdown .dropdown-menu li a')


  statusContent.forEach(elem => {

    elem.addEventListener('click', () => {
      statusDpd.innerHTML = `
        ${elem.textContent} <i class="fa-solid fa-angle-down ms-2"></i>`

      const values = {
        notStart: 'not started',
        progress: 'in progress',
        complete: 'completed'
      }

      if (elem.textContent.toLowerCase() == values.notStart) {
        statusDpd.classList.add('not-start')
        statusDpd.classList.remove('in-progress')
        statusDpd.classList.remove('completed')
      } else if (elem.textContent.toLowerCase() == values.progress) {
        statusDpd.classList.add('in-progress')
        statusDpd.classList.remove('not-start')
        statusDpd.classList.remove('completed')
      } else if (elem.textContent.toLowerCase() == values.complete) {
        statusDpd.classList.add('completed')
        statusDpd.classList.remove('in-progress')
        statusDpd.classList.remove('not-start')
      }
    })
  })
}

function getCardElem(elem) {
  elem.addEventListener('click', handleCardElem(elem))
}

goalCard.forEach(card => getCardElem(card))
