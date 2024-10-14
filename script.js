const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnNumber = document.getElementById("btn");

btnPlus.addEventListener("click", function () {
  btnNumber.textContent++;
});

btnMinus.addEventListener("click", function () {
  if (btnNumber.textContent > 0) {
    btnNumber.textContent--;
  }
});

// UTILIZZARE IL FOREACH PER GLI ALTRI BTNS
