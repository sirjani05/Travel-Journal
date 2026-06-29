const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", (e) =>{
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
  origin:"bottom",
  distance:"50px",
  duration: 1000,
};
scrollRevealOption().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});
scrollRevealOption().reveal(".header-content p", {
  ...scrollRevealOption,
  delay: 500,
});
scrollRevealOption().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
scrollRevealOption().reveal(".header-btns", {
  ...scrollRevealOption,
  delay: 1500,
});


scrollRevealOption().reveal(".destination-card", {
  ...scrollRevealOption,
  interval: 500,
});

scrollRevealOption().reveal(".showcase-image img", {
  ...scrollRevealOption,
  origin: "right",
});
scrollRevealOption().reveal(".showcase-content p", {
  ...scrollRevealOption,
  delay: 500,
});
scrollRevealOption().reveal(".showcase-content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
scrollRevealOption().reveal(".showcase-btn", {
  ...scrollRevealOption,
  delay: 1500,
});

scrollRevealOption().reveal(".banner-card", {
  ...scrollRevealOption,
  interval: 500,
});


scrollRevealOption().reveal(".discover-card", {
  ...scrollRevealOption,
  interval: 500,
});
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
})