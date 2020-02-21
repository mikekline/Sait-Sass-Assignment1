const menuClosed = document.querySelector('#accordion');
const menuOpen = document.querySelector('.open');
const mobileSideNav = document.querySelector('.nav');
const windowWidth = window.matchMedia('(min-width: 600px)');


//Creating a function to clear the toggled menu classes after leaving the mobile query. So if the menu is left open and the viewport is expanded. It will be closed when it has been reduced again.
const clearMobileNav = screen => {
  if(screen.matches) {
    menuOpen.classList.remove('open-transition');
    mobileSideNav.classList.remove('menu-active');
    menuClosed.classList.remove('closed-transition');
  }
}


const menuToggles = () => {
  menuOpen.classList.toggle('open-transition');
  mobileSideNav.classList.toggle('menu-active');
  menuClosed.classList.toggle('closed-transition');
}


windowWidth.addListener(clearMobileNav);
menuClosed.addEventListener('click', menuToggles);
menuOpen.addEventListener('click', menuToggles);
 