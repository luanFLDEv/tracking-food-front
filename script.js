const btnLogin = document.getElementById('btnLogin')
const modal = document.getElementById('loginModal')
const closeBtn = document.querySelector('.close')
const btnCreate = document.getElementById('btncreate')
const createModal = document.getElementById('createModal')
const closeBtn2 = document.querySelector('.close__2')
btnLogin.addEventListener('click', () => {
	modal.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
	console.log('teste')
	modal.style.display = 'none'
})

window.addEventListener('click', e => {
	if (e.target === modal) {
		modal.style.display = 'none'
	}
})

btnCreate.addEventListener('click', () => {
	createModal.style.display = 'flex'
})
closeBtn2.addEventListener('click', () => {
	createModal.style.display = 'none'
})

window.addEventListener('click', e => {
	if (e.target === createModal) {
		createModal.style.display = 'none'
	}
})
