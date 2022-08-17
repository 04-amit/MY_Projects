const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const btn = document.querySelector("#btn");
const colorName = document.querySelector("#colorH");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[random(hex.length)];
  }
  document.body.style.backgroundColor = hexColor;
  colorName.textContent = hexColor;
});

function random(n) {
  return Math.floor(Math.random() * n);
}
