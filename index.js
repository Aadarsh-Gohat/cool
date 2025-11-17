const verbutton = document.querySelector(".verbutton");
const verticalmenu = document.querySelector(".verticalmenu");

const vericon = document.querySelectorAll(".vericon");

const spa = document.querySelectorAll(".spa");

verbutton.addEventListener("click", () => {
  verticalmenu.classList.toggle("verticalmenuadd");


  for (let i = 0; vericon.length > i; i++) {
    spa[i].classList.toggle("spaa");
    vericon[i].classList.toggle("vericonadd");
  }
});

// const box=document.getElementById("dis");
const box = document.getElementsByClassName("content");
const pre = document.getElementsByClassName("pre-btn");
const next = document.getElementsByClassName("next-btn");
const distaance = 400;

pre[0].addEventListener("click", () => {
  box[0].scrollBy({ left: -distaance, behavior: "smooth" });
});

next[0].addEventListener("click", () => {
  box[0].scrollBy({ left: distaance, behavior: "smooth" });
});

pre[1].addEventListener("click", () => {
  box[1].scrollBy({ left: -distaance, behavior: "smooth" });
});

next[1].addEventListener("click", () => {
  box[1].scrollBy({ left: distaance, behavior: "smooth" });
});
