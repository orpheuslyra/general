document.addEventListener("DOMContentLoaded", function () {
  const spBreakPoint = 768;
  const images = document.querySelectorAll(".slideIn");
  const getThreadhold = () => {
    if (window.innerWidth <= spBreakPoint) {
      return 50;
    } else {
      return 200;
    }
  };

  const handleScroll = () => {
    const threshold = getThreadhold();
    const scrollPosition = window.scrollY + window.innerHeight;

    images.forEach((image, index) => {
      const rect = image.getBoundingClientRect();
      const imageTopPosition = rect.top + window.scrollY;

      if (scrollPosition > imageTopPosition + index * threshold) {
        image.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 初回ロード時にも実行
});
