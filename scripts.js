const portfolio = {};

portfolio.hamburger = document.querySelector(".hamburger");
portfolio.nav = document.querySelector(".nav");

portfolio.hamburgerEvent = () => {
  portfolio.hamburger.addEventListener("click", () => {
    portfolio.hamburger.classList.toggle("clicked");
    portfolio.nav.classList.toggle("showNav");
  });
};

portfolio.init = () => {
  portfolio.hamburgerEvent();
};

portfolio.init();
