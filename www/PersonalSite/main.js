const menu = document.querySelector('.navMenu')


menu.addEventListener('click', toggleMenu)


function toggleMenu() {
    const dropDown = document.getElementById('dropMenu')

    if (dropDown.style.display === 'none') {
        dropDown.style.display = 'block'
    } else {dropDown.style.display = 'none' }
}
