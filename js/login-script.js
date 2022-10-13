const formElem = document.getElementById("form-login")
const username = document.getElementById('username')
const password = document.getElementById('password')

const users = {
  mentor: {
    cred: ['0002@gmail.com', '123456789'],
    url: '/templates/mentor/overview.dashboard.html'
  },
  admin: {
    cred: ['0001@gmail.com', '123456789'],
    url: '/templates/overview.dashboard.html'
  },
}

formElem.addEventListener('submit', router)

function router(evt) {
  const { mentor: { cred: mentorCred, url: mentorUrl }, admin: { cred: adminCred } } = users

  const checkMentor = username.value === mentorCred[0] && password.value === mentorCred[1]
  const checkAdmin = username.value === adminCred[0] && password.value === adminCred[1]

  evt.preventDefault()

  switch (true) {
    case checkMentor:
      location.href = mentorUrl
      break;
    case checkAdmin:
      location.href = mentorUrl
      break;
    default:
      location.href = '/templates/overview.dashboard.html'
  }
}