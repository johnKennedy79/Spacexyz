const btn = document.getElementById("desbtn");
let x = document.getElementById("destination");

function toggledes() {
  if (x.style.height === "0vh") {
    x.style.height = "100vh";
  } else {
    x.style.height = "0vh";
  }
}

btn.addEventListener("click", toggledes);

//Button 2

const btn2 = document.getElementById("transbtn");
let y = document.getElementById("transport");

function toggletran() {
  if (y.style.height === "0vh") {
    y.style.height = "100vh";
  } else {
    y.style.height = "0vh";
  }
}

btn2.addEventListener("click", toggletran);

//button 3
const btn3 = document.getElementById("visa");
let z = document.querySelector(".app");

function togglevisa() {
  if (z.style.height === "0vh") {
    z.style.height = "100vh";
  } else {
    z.style.height = "0vh";
  }
}

btn3.addEventListener("click", togglevisa);

//form selector and basket
let Mercury = 1.446;
let Venus = 1.736;
let Mars = 2.671;
let cost = 0;

const p1 = document.getElementsByName("Mercury");
const p2 = document.getElementsByName("Venus");
const p3 = document.getElementsByName("Mars");
const pr = document.getElementById("cost");

function basket() {}

document.addEventListener("change", basket);
