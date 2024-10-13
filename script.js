const buttons = document.querySelectorAll(".btn-success");
const decrease = document.querySelectorAll("#minus");

buttons.forEach((button) => {
  let count = 0;

  const incrementNumber = button.querySelector(".badge");

  button.addEventListener("click", function () {
    count++;
    incrementNumber.textContent = count;
  });
});
