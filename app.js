let gameSeq = [];
let userSeq = [];

let btns = ["orange", "red", "purple", "green"];

let started = false;
let level = 0;
let highest = 0;

let h2 = document.querySelector("h2");
let h3 = document.createElement("h3");
h3.innerText = `Highest Score: ${highest}`;
document.body.append(h3);

document.addEventListener("keypress", function () {
    if(started == false){
    console.log("game is started");
    started = true;

    levelUp();
    }
    
});

function levelUp(){

    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}


function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        if(highest < level){
            highest = level;
            h3.innerText = `Highest Score: ${highest}`;

        }
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        // document.querySelector("body").style.backgroundColor = "red";
        // setTimeout(function(){
        //     document.querySelector("body").style.backgroundColor = "white";
        // }, 150)
        document.body.classList.add("game-over");
        setTimeout(() => {
            document.body.classList.remove("game-over");
        }, 500);

        reset();
    }
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}



