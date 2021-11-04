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

window.onload = function () {
  generateBingoNumber();
};
