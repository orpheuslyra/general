const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".sp-navigation");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamburger.classList.toggle("open");
});
