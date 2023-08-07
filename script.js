const togglebtn = document.querySelector('.togglebtn')
const togglebtnIcon = document.querySelector('.togglebtn 1')
const dropdown_menu = document.querySelector('.dropdown_menu')

togglebtn.onclick = function(){
    dropdown_menu.classList.toggle('open')
    const isOpen = dropdown_menu.classList.contains('open')


    
togglebtnIcon.classList = isOpen
 ? 'fa-solid fa-bars'
 : 'fa-solid fa-bars'
}
