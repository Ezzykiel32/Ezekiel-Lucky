const menuBtn = document.getElementById("hamburger-menu")
const menuOptions = document.querySelector(".mobile-navigations")
menuBtn.addEventListener('click', () => {
    if (!menuOptions.classList.contains("hide")) {
        menuOptions.classList.add('hide')
        menuBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />'
    }
    else{
        menuOptions.classList.remove("hide")
        menuBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />'
    }
})


