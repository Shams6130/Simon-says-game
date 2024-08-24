let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["red", "yellow", "green", "purple"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 350);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  btnFlash(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
}
function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `game over your score was <b> ${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="antiquewhite";

        
    },250);
    reset();
  }
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", userFlash);
}
function userFlash() {
  let btn = this;
  btnFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}
function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
