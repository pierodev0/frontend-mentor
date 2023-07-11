const navButton = document.querySelector(".nav__button");
const navMenu = document.querySelector(".nav__container");

navButton.addEventListener("click", () => {

  const navLogo = document.querySelector(".nav__logo")

  navMenu.classList.toggle("nav__container--active")

  if(navMenu.classList.contains("nav__container--active")){
    navLogo.setAttribute('src', './images/logo-bookmark white.svg')
    navButton.setAttribute('src','././images/icon-close.svg')
  } else {
    navLogo.setAttribute('src', './images/logo-bookmark.svg')
    navButton.setAttribute('src','././images/icon-hamburger.svg')
  }
})
