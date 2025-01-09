const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".sp-navigation");
const menuItems = document.querySelectorAll(".sp-navigation .link-ul li a");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
    hamburger.classList.add("close");
    navigation.classList.remove("open");
    navigation.classList.add("close");
  } else {
    hamburger.classList.remove("close");
    hamburger.classList.add("open");
    navigation.classList.remove("close");
    navigation.classList.add("open");
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("Menu item clicked");
    navigation.classList.remove("open");
    navigation.classList.add("close");
    hamburger.classList.remove("open");
  });
});
