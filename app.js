document.querySelector(".hamburger").addEventListener("click", () => {
  document.body.classList.toggle("open");
});

document.querySelector(".close").addEventListener("click", () => {
  document.body.classList.toggle("open");
});

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    document.querySelector(".header_container").classList.add("on_scroll");
  else
    document.querySelector(".header_container").classList.remove("on_scroll");
};

const scroll = document.getElementById("scroll");
const hero = document.querySelector(".hero");

const isContainerAtTop = () => {
  const containerRect = hero.getBoundingClientRect();
  return containerRect.top < -50;
};
window.addEventListener("scroll", () => {
  if (isContainerAtTop()) {
    scroll.classList.add("active");
  } else {
    scroll.classList.remove("active");
  }
});

Array.from(document.querySelectorAll(".nav_li")).forEach((ele) =>
  ele.addEventListener("click", () => document.body.classList.toggle("open"))
);