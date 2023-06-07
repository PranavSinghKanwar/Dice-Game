var p1s = Math.floor(Math.random()*6);
if(p1s == 0) p1s = 1;
var p2s = Math.floor(Math.random()*6);
if(p2s == 0) p2s = 1;

console.log(p1s);
console.log(p2s);


var i1 = document.querySelector(".img1");
var i2 = document.querySelector(".img2");

if(p1s == 1) i1.setAttribute("src", "images/dice1.png");
if(p1s == 2) i1.setAttribute("src", "images/dice2.png");
if(p1s == 3) i1.setAttribute("src", "images/dice3.png");
if(p1s == 4) i1.setAttribute("src", "images/dice4.png");
if(p1s == 5) i1.setAttribute("src", "images/dice5.png");
if(p1s == 6) i1.setAttribute("src", "images/dice6.png");

if(p2s == 1) i2.setAttribute("src", "images/dice1.png");
if(p2s == 2) i2.setAttribute("src", "images/dice2.png");
if(p2s == 3) i2.setAttribute("src", "images/dice3.png");
if(p2s == 4) i2.setAttribute("src", "images/dice4.png");
if(p2s == 5) i2.setAttribute("src", "images/dice5.png");
if(p2s == 6) i2.setAttribute("src", "images/dice6.png");

var hea = document.querySelector("h1");
if(p1s == p2s) hea.innerText = "Draw";
else if(p1s > p2s) hea.innerText = "Player 1 Wins";
else hea.innerText = "Player 2 Wins"