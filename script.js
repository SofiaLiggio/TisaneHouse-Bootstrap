// Collegato a index.html per i bottoni "aggiungi"

const btnPlus = document.querySelectorAll("#plus");
const btnMinus = document.querySelectorAll("#minus");
const btnNumber = document.querySelectorAll("#btn");

btnPlus.forEach((btnIncrease) => {
  btnIncrease.addEventListener("click", function () {
    const theNumberBtn = btnIncrease
      .closest(".btn-success")
      .querySelector("#btn");
    theNumberBtn.textContent++;
  });
});

btnMinus.forEach((btnDecrease) => {
  btnDecrease.addEventListener("click", function () {
    const theNumberBtn = btnDecrease
      .closest(".btn-success")
      .querySelector("#btn");
    if (theNumberBtn.textContent > 0) {
      theNumberBtn.textContent--;
    }
  });
});
