// target dom elements
const menu_btn = document.querySelector(".menu-btn"),
  menu = document.querySelector(".menu"),
  menu_branding = document.querySelector(".menu-branding"),
  menu_nav = document.querySelector(".menu-nav"),
  nav_items = document.querySelectorAll(".nav-item");

let isMenuOpen = false;

function toggleMenu() {
  if (!isMenuOpen) {
    menu_btn.classList.add("close");

    menu.classList.add("show");

    menu_branding.classList.add("show");

    menu_nav.classList.add("show");

    nav_items.forEach(item => item.classList.add("show"));

    isMenuOpen = true;
  } else {
    menu_btn.classList.remove("close");

    menu.classList.remove("show");

    menu_branding.classList.remove("show");

    menu_nav.classList.remove("show");

    nav_items.forEach(item => item.classList.remove("show"));

    isMenuOpen = false;
  }
}

// event handlers
menu_btn.addEventListener("click", toggleMenu);
