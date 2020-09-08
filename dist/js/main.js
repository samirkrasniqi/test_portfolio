// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of menu (gjendja fillestare e menys:sosht menyja )
let showMenu = false;

// Ktu na duhet ni event psh kur klikojm n'hamburger
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        // maspari krijohet (X-i) i hamburgerit qe paraqet klasen e mbylljes nese plotsohet kushti
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));
        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));
        // Set Menu State
        showMenu = false;
    }
}