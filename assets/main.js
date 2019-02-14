const coverBtn = document.querySelector("#cover");
const inFrontBtn = document.querySelector("#inFront");
const inBackBtn = document.querySelector("#inBack");
const backBtn = document.querySelector("#back");

const cover = document.querySelector(".landing");
const inFront = document.querySelector(".things");
const inBack = document.querySelector(".story");
const back = document.querySelector(".finale");

function swap() {
  cover.classList.remove("show");
  inFront.classList.remove("show");
  inBack.classList.remove("show");
  back.classList.remove("show");
}

coverBtn.addEventListener("click", function() {
  console.log("Works");
  swap();
  window.setTimeout(function() {
    cover.classList.add("show");
  }, 1000);
});

inFrontBtn.addEventListener("click", function() {
  swap();
  window.setTimeout(function() {
    inFront.classList.add("show");
  }, 1000);
});

inBackBtn.addEventListener("click", function() {
  swap();
  window.setTimeout(function() {
    inBack.classList.add("show");
  }, 1000);
});

backBtn.addEventListener("click", function() {
  swap();
  window.setTimeout(function() {
    back.classList.add("show");
  }, 1000);
});
