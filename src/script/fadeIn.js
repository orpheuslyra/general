document.addEventListener("DOMContentLoaded", () => {
  const spBreakPoint = 768;

  if (window.innerWidth > spBreakPoint) {
    document.querySelector(".hero-image").classList.add("show");
  }

  const elements = document.querySelectorAll(".fade-in");
  const heroCopy = document.querySelector(".hero-copy");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === heroCopy) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, 500);
          } else {
            entry.target.classList.add("show");
          }
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );
  elements.forEach((el) => observer.observe(el));
});
