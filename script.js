alert("In this game we have to click the maximum number bubbles. This game has 60 sec .In time period we have to hit maximum number bubbles. This game starts just after you press the 'ok'. With the halp of this we can increase the speed of finding the error of the bug ");
var timer = 60;
var score = 0;
var hitNum =0;

//this function is made for the increment of score
function IncreaseScore() {
	score += 10;
	document.querySelector("#score").textContent = score;
}

// this function is made to show the rendom number for the hit 
function HitNum() {
	 hitNum =Math.floor(Math.random()*10);
	 document.querySelector("#hitNum").textContent=hitNum;
}

// this function is made to make the bubble
function Newbubbles() {
 	var bubble ="";
	for (let i = 1; i<=189; i++) {
		let ran =Math.floor(Math.random()*10)
		bubble +=`<div id="bubble">${ran}</div>`;
	}
document.querySelector("#g-bottom").innerHTML=bubble;
 } 

// this function is made to show how much time is left for game over 
function TimerFun() {
let timeInt =setInterval(function () {
	if(timer>0){
		timer--;
		document.querySelector("#time").textContent=timer;
	}
	else{
		clearInterval(timeInt);
		document.querySelector("#g-bottom").innerHTML=`
			<div class="Result">
            <h2>Game Over</h2>
            <h3>Your Socre Is = ${score}</h3>
            <strong> To Restart the game 'Reload the page'</strong>
          </div>`;
	}
	},1000)
}


document.querySelector("#g-bottom").addEventListener("click",function (details) {
	var ClickedNum = Number(details.target.textContent);
	if (ClickedNum === hitNum) {
		IncreaseScore();
		Newbubbles();
		HitNum(); 
	}
})
Newbubbles();
HitNum();
TimerFun();