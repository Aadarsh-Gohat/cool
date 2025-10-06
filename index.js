const verbutton = document.querySelector(".verbutton");
const verticalmenu = document.querySelector(".verticalmenu");

const vericon = document.querySelectorAll(".vericon");

const spa = document.querySelectorAll(".spa");

verbutton.addEventListener("click", () => {
  verticalmenu.classList.toggle("verticalmenuadd");

  for (let i = 0; vericon.length > i; i++) {
    spa[i].classList.toggle("spaa");
  }
});
