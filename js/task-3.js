const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");
input.addEventListener("input", function () {
  let inputValue = this.value.trim();
  if (inputValue === "" || inputValue === " ") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = `${inputValue}!`;
  }
});
