//GSAP MOBILE MENU V2

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");
    const menuLinks = document.querySelectorAll(".menu-nav-link");

  // Check if required elements exist
  if (!menu || !menuBtn) {
    console.warn("Menu elements not found");
    return;
  }

  let isOpen = false;

  // Set initial menu position
  gsap.set(menu, { x: "100%" });
  gsap.set(menuBtn, { rotation: 0 });

  // Function to open menu
  function openMenu() {
    gsap.to(menu, {
      x: "0%",
      duration: 0.5,
      ease: "power2.out"
    });
    gsap.to(menuBtn, {
      rotation: 90,
      duration: 0.3,
      ease: "power2.out"
    });
    document.body.style.overflow = "hidden";
    menuBtn.setAttribute("aria-expanded", "true");
    isOpen = true;
  }

  // Function to close menu
  function closeMenu() {
    gsap.to(menu, {
      x: "100%",
      duration: 0.5,
      ease: "power2.in"
    });
    gsap.to(menuBtn, {
      rotation: 0,
      duration: 0.3,
      ease: "power2.in"
    });
    document.body.style.overflow = "";
    menuBtn.setAttribute("aria-expanded", "false");
    isOpen = false;
  }

  // Toggle button click handler
  menuBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking on navigation links
  menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      if (isOpen) {
        closeMenu();
      }
    });
  });

  // Close menu when clicking outside (optional enhancement)
  document.addEventListener("click", function(e) {
    if (isOpen && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu on Escape key press (accessibility enhancement)
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && isOpen) {
      closeMenu();
    }
  });
});