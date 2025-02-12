const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".sp-navigation");
const headerSp = document.querySelector(".header-sp");
const menuItems = document.querySelectorAll(".sp-navigation .link-ul li a");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("open")) {
    headerSp.classList.remove("open");
    hamburger.classList.remove("open");
    navigation.classList.remove("open");
    navigation.classList.add("close");
    hamburger.classList.add("close");
  } else {
    hamburger.classList.add("open");
    navigation.classList.add("open");
    headerSp.classList.add("open");
    navigation.classList.remove("close");
    hamburger.classList.remove("close");
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const targetId = item.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    navigation.classList.remove("open");
    navigation.classList.add("close");
    hamburger.classList.remove("open");
    headerSp.classList.remove("open");
  });
});
