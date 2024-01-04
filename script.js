// scroll behavior
window.addEventListener("scroll", function () {
  const navBar = this.document.querySelector(".mainNav");
  const threshold = 100;

  if (window.pageYOffset > threshold) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

// mobile navigation
const btnNav = document.querySelector(".btn-mobile-nav");
const navBar = document.querySelector(".nav-actions");

btnNav.addEventListener("click", function () {
  console.log("clicked");
  navBar.classList.toggle("nav-open");
});