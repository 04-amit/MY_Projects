const color = ["red", "green", "rgb(205, 133, 63)", "#eee8aa"];

const btn = document.querySelector("#btn");
const colorName = document.querySelector("#colorH");

btn.addEventListener("click", () => {
  let randomNumber = random(color.length);
  document.body.style.backgroundColor = color[randomNumber];
  colorName.textContent = color[randomNumber];
});

function random(n) {
  return Math.floor(Math.random() * n);
}
