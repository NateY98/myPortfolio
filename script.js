const portfolio = {};

portfolio.hamburger = document.querySelector(".hamburger");
portfolio.nav = document.querySelector(".navContainer");
portfolio.navItemOne = document.querySelector(".liOne");
portfolio.navItemTwo = document.querySelector(".liTwo");
portfolio.navItemThree = document.querySelector(".liThree");
portfolio.navItemFour = document.querySelector(".liFour");

portfolio.navItemEventOne = () => {
  portfolio.navItemOne.addEventListener("click", () => {
    portfolio.hamburger.classList.toggle("clicked");
    portfolio.nav.classList.toggle("showNav");
  });
};

portfolio.navItemEventTwo = () => {
  portfolio.navItemTwo.addEventListener("click", () => {
    portfolio.hamburger.classList.toggle("clicked");
    portfolio.nav.classList.toggle("showNav");
  });
};

portfolio.navItemEventThree = () => {
  portfolio.navItemThree.addEventListener("click", () => {
    portfolio.hamburger.classList.toggle("clicked");
    portfolio.nav.classList.toggle("showNav");
  });
};

portfolio.navItemEventFour = () => {
  portfolio.navItemFour.addEventListener("click", () => {
    portfolio.hamburger.classList.toggle("clicked");
    portfolio.nav.classList.toggle("showNav");
  });
};

portfolio.hamburgerEvent = () => {
  portfolio.hamburger.addEventListener("click", () => {
    portfolio.hamburger.classList.toggle("clicked");
    portfolio.nav.classList.toggle("showNav");
  });
};

portfolio.init = () => {
  portfolio.hamburgerEvent();
  portfolio.navItemEventOne();
  portfolio.navItemEventTwo();
  portfolio.navItemEventThree();
  portfolio.navItemEventFour();
};

portfolio.init();
