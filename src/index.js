const Menu = document.querySelector('.migdiv')
const MenuDiv = document.querySelector('.menuMobile')
const closeMenu = document.querySelector('.pitdiv')


Menu.addEventListener('click',name)

function name () {
    MenuDiv.classList.toggle('show')  
    Menu.classList.add('hideMenu')                                                            
}


closeMenu.addEventListener('click',close)

function close() {
    MenuDiv.classList.toggle('show')  
    Menu.classList.remove('hideMenu')  
}

