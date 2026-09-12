const logo = document.querySelector('body header img')

const burgerBtn = document.querySelector('body header button')

const menuList = document.querySelector('body header ul')

burgerBtn.addEventListener('click', () => {
    const isOpen = menuList.classList.toggle('open')


    logo.style.zIndex = isOpen ? '999' : ''
    burgerBtn.style.zIndex = isOpen ? '999' : ''
    burgerBtn.classList.toggle('close', isOpen)
    burgerBtn.textContent = isOpen ? '❌' : ''
})
