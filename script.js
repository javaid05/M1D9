const generateBingoNumber = function (num) {
  let bgContainer = document.getElementsByClassName("bingo-container")[0];
  for (let i = 1; i <= num; i++) {
    let bgNumber = document.createElement("div");
    bgNumber.classList.add("bingoNumber");
    bgNumber.innerText = i;
    bgContainer.appendChild(bgNumber);
  }
};
generateBingoNumber(76);

let numberGenerate = [];

const randomNumberDisplay = document.getElementById("displayNumber");
let randomNumber = Math.ceil(Math.random() * 76);
randomNumberDisplay.innerHTML = `<p>${randomNumber}</p>`;
numberGenerate.push(randomNumber);
window.onload = function () {
  generateBingoNumber();
  highlightNumber(randomNumber);
};
let bingoNumbers = document.getElementsByClassName("bingoNumber");
let userNumbers = document.getElementsByClassName("userNumber");

let highlightNumber = function (number) {
  for (let bingonum of bingoNumbers) {
    if (bingonum.innerText == number) {
      bingonum.classList.add("highlighted");
    }
  }
};
for (let userNum of userNumbers) {
  if (userNum.innerText == number) {
    userNum.classList.add("highlighted");
  }
}
let buttonClick = document.getElementById("numberGenerator");
buttonClick.addEventListener("click", generateBingoNumber);
