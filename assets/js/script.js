const navBar = document.getElementById("nav-bar");
const menuButton = document.getElementById("menu-button");
const purchaseButton = document.getElementById("purchase-button");
const menuDropdown = document.getElementById("menu-dropdown");
const purchaseDropdown = document.getElementById("purchase-dropdown");

// Handle dropdown toggle
menuButton.addEventListener("click", () => {
  menuDropdown.style.display =
    menuDropdown.style.display === "block" ? "none" : "block";
  purchaseDropdown.style.display = "none";
});

purchaseButton.addEventListener("click", () => {
  purchaseDropdown.style.display =
    purchaseDropdown.style.display === "block" ? "none" : "block";
  menuDropdown.style.display = "none";
});

// Sticky nav bar toggle
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    navBar.classList.add("sticky-top");
    navBar.classList.remove("nav-bar");
  } else {
    navBar.classList.remove("sticky-top");
    navBar.classList.add("nav-bar");
  }
});
