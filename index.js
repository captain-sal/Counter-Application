let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

// let bonuspoints = 50;
// console.log(bonuspoints)
// bonuspoints+=50;
// console.log(bonuspoints);
// bonuspoints-=75;
// console.log(bonuspoints);
// bonuspoints+=45;
// console.log(bonuspoints);
