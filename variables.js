const practiceForm = document.querySelector("#practice-form");
const userInput = document.querySelector("#syntax-check");

const tokenizeVar = (input) => {
  const varCheck = input.slice(0, 3) === "var";
  const equalsCheck = input.includes("=");
  const asiCheck = input.slice(input.length - 1) === ";";
  const [name, value] = input.slice(3, input.length - 1).split("=");

  console.log(name, value);
};

practiceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // strip out spaces and whitespace
  const value = userInput.value
    .split("")
    .filter((character) => character !== " " && character !== "\n")
    .join("");

    tokenizeVar(value);
});
