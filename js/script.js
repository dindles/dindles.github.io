const moreTimboButtonPress = document.getElementById("motimbos");
const fewerTimboButtonPress = document.getElementById("fewtimbos");

let counter = 1;

function chooseTimbo() {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  diceRoll <= 3 ? makeTextTimbo() : makeImgTimbo();
}

function makeTextTimbo() {
  const newTimbo = document.createElement("p");
  newTimbo.innerText = "Got the Timbos on the toes and this is how it goes.";
  newTimbo.setAttribute("id", "timbo_" + counter++);
  newTimbo.setAttribute("class", "timbo");
  document.body.appendChild(newTimbo);
  posTimbo(counter);
}

function makeImgTimbo() {
  const newTimbo = document.createElement("img");
  newTimbo.setAttribute(
    "src",
    "../assets/images/timbos/-crop-342-184-245px-Wear-Men's-Boots-with-Jeans-Step-9.jpg.jpeg"
  );
  newTimbo.setAttribute("id", "timbo_" + counter++);
  newTimbo.setAttribute("class", "timbo");
  document.body.appendChild(newTimbo);
  posTimbo(counter);
}

function posTimbo(counter) {
  const timbo = document.getElementById("timbo_" + --counter);
  console.log(timbo);
  let topPos = Math.random();
  let leftPos = Math.random();
  topPos *= screen.availHeight / 100;
  leftPos *= screen.availWidth / 50;
  timbo.style.top = topPos + "px";
  timbo.style.left = leftPos + "px";
}

function remTimbo() {
  const remTimbo = document.getElementById("timbo_" + --counter);
  remTimbo.remove();
}

moreTimboButtonPress.addEventListener("click", chooseTimbo);
fewerTimboButtonPress.addEventListener("click", remTimbo);
