const nomadicaBtn = document.getElementById("nomadica-btn");
const purchaseBtn = document.getElementById("purchase-btn");
const menuDropdown = document.getElementById("menu-dropdown");
const purchaseDropdown = document.getElementById("purchase-dropdown");
const navbar = document.querySelector(".mobile-nav");

document.addEventListener("DOMContentLoaded", () => {
  // NAVBAR CLOSING

  // Function to close all dropdowns
  const closeDropdowns = () => {
    menuDropdown.style.display = "none";
    purchaseDropdown.style.display = "none";
    nomadicaBtn.style.color = "white";
    purchaseBtn.style.color = "white";
  };

  // close dropdown when clicking events outside of them
  document.addEventListener("click", (event) => {
    // Check if the click was outside the dropdowns and buttons
    if (
      !menuDropdown.contains(event.target) &&
      !purchaseDropdown.contains(event.target) &&
      event.target !== nomadicaBtn &&
      event.target !== purchaseBtn
    ) {
      closeDropdowns();
    }
  });

  // TOGGLE ON AND OFF NOVBARS

  // Toggle dropdown menus
  nomadicaBtn.addEventListener("click", () => {
    menuDropdown.style.display =
      menuDropdown.style.display === "block" ? "none" : "block";
    purchaseDropdown.style.display = "none"; // Close other menu
    if (menuDropdown.style.display == "block") {
      nomadicaBtn.style.color = "orangered";
      purchaseBtn.style.color = "white";
    } else {
      nomadicaBtn.style.color = "white";
    }
  });

  purchaseBtn.addEventListener("click", () => {
    purchaseDropdown.style.display =
      purchaseDropdown.style.display === "block" ? "none" : "block";
    menuDropdown.style.display = "none"; // Close other menu
    if (purchaseDropdown.style.display == "block") {
      purchaseBtn.style.color = "orangered";
      nomadicaBtn.style.color = "white";
    } else {
      purchaseBtn.style.color = "white";
    }
  });

  // CHANGE THE POSITION OF THE NAVBAR AFTER SCROLL

  // Scroll behavior
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
      navbar.classList.add("scrolled");
      menuDropdown.classList.add("dropdown-scrolled");
      purchaseDropdown.classList.add("dropdown-scrolled");
    } else {
      navbar.classList.remove("scrolled");
      menuDropdown.classList.remove("dropdown-scrolled");
      purchaseDropdown.classList.remove("dropdown-scrolled");
    }
  });
});
