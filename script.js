const menuHamburger = document.getElementById('mobile-btn')

menuHamburger.addEventListener('click', () => {
    const i = menuHamburger.children
    i[0].classList.toggle('fa-x')
    const mobileMenu = document.getElementById('mobile_menu')
    mobileMenu.classList.toggle('active')
})
