let timer =60;
let hitRn = 0;
let score = 0;

function bubbleMake(){
    let clutter = "";
 for(let i = 1; i<= 176; i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbtm").innerHTML = clutter;
}bubbleMake();


function runTimer(){
    let clearTimer = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").innerHTML = timer;
        }else{
            let gameOver = document.querySelector(".pbtm");
            gameOver.innerHTML = `<h1> Game Over. <pre>Your Score: ${score}</pre> </h1>`
            // gameOver.createElement = ` <p>Your Score is ${score}</p>`
            gameOver.style.color = "green";
            clearInterval(clearTimer);
        }
    },1000)
}runTimer();


function changeHit(){
     hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitRn;
}changeHit();


function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
    
}

function finalOutput(){
    document.querySelector(".pbtm").addEventListener("click",function(details){
        checkedBub = Number(details.target.textContent)
        if(checkedBub === hitRn){
            increaseScore();
            changeHit();
            bubbleMake();
        }
    })
}
finalOutput();

