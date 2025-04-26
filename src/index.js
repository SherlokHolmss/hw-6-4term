import { input } from './utils.js';


const textInput = document.querySelector("input");
const btn = document.querySelector("button");
const output = document.querySelector("p");




btn.addEventListener("click", () => {
  const name = textInput.value;
  output.textContent = name ? input(name) : "Введіть любе слово";
});
