const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".sp-navigation");

console.log(hamburger);

hamburger.addEventListener("click", () => {
  console.log("clicked");
  navigation.classList.toggle("open");
  hamburger.classList.toggle("open");
});
