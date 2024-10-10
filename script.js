const buttons = document.querySelectorAll(".btn-success");

buttons.forEach((button) => {
  let count = 0;

  const incrementNumber = button.querySelector(".badge");

  button.addEventListener("click", function () {
    count++;
    incrementNumber.textContent = count;
  });
});
