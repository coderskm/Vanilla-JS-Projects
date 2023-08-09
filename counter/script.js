let increment = document.getElementById("inc");
let reset = document.getElementById("res");
let decrement = document.getElementById("dec");
let counterVal = document.getElementById("counter-value");

increment.addEventListener("click", () => {
  counterVal.innerText = +counterVal.innerText + 1;
});

reset.addEventListener("click", () => {
  counterVal.innerHTML = 0;
});

decrement.addEventListener("click", () => {
  counterVal.innerHTML = counterVal.innerHTML > 0 ? +counterVal.innerHTML - 1 : 0;
});
