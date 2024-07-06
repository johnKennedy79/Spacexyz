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
