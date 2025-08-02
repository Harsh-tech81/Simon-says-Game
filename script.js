let gameSeq = [];
let userSeq = [];  // hr level pr change hoyga
let btns = ["red", "yellow", "green", "purple"];
let started = false;  // abhi tk game start nhi hua h 
let level = 0;
let max = -1;

document.addEventListener("keypress", function () {   // avoid using arrow function bcz it can give error on this type of keyword
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});
function GameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}
let h2 = document.querySelector('h2');
// first step completed which was starting the Game Now next step is "Flash Buttons" and "Level Up"

function levelUp() {
    userSeq = [];
    level++;
    h2.innerHTML = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    GameFlash(randomBtn);
}

// Button Event Listeners 
function check(idx) {
    if (gameSeq[idx] == userSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        max = Math.max(level, max);
        h2.innerHTML = `Game Over: You have Lost the Game and Your Final Score is <b> ${level} </b> <br>Highest Score : <b>  ${max} </b> <br> Press any Key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userflash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    check(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (Bt of allBtns) {
    Bt.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

