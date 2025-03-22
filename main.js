// **__________show/hide menu_________
const navMenu = document.querySelector(".nav-menu"),
  navMiniMenu = document.querySelector(".nav-mini-menu"),
  navClose = document.querySelector(".nav-close");

// show menu
navMiniMenu.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

// hide menu
const hideMenu = () => {
  navMenu.classList.remove("show-menu");
};
navClose.addEventListener("click", hideMenu);

// **__________hide menu when any of the link is clicked________
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
  link.addEventListener("click", hideMenu);
});

// **__________show header shadow when scrolling________
const header = document.querySelector(".header");

const showShadow = () => {
  window.scrollY >= 50
    ? header.classList.add("show-shadow")
    : header.classList.remove("show-shadow");
};
window.addEventListener("scroll", showShadow);

// **_______________scroll back to top___________________
const scrollUp = document.querySelector(".scroll-up");

function showScroll() {
  window.scrollY >= 300
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}

// show-hide .scroll-Up button
window.addEventListener("scroll", showScroll);

// scroll up on click
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// **_______________dark theme___________________
const navTheme = document.querySelector(".nav-theme");
const themeIcon = document.querySelector(".theme-icon");
const body = document.body;

// check user preference in localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeIcon.classList.replace("ri-moon-line", "ri-sun-line");
}

const changeTheme = () => {
  body.classList.toggle("dark-theme");
  // change icons
  if (body.classList.contains("dark-theme")) {
    themeIcon.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("theme", "light");
  }
};

navTheme.addEventListener("click", changeTheme);

// **_______________show-close modal window___________________
if (body.classList.contains("homepage")) {
  const seeMore = document.querySelector(".see-more");
  const modal = document.querySelector(".modal");
  const modalClose = document.querySelector(".modal-close");

  seeMore.addEventListener("click", () => {
    modal.classList.remove("hide-modal");
  });
  modalClose.addEventListener("click", () => {
    modal.classList.add("hide-modal");
  });
}
