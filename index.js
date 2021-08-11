var randomNumber1 = Math.floor(Math.random()* 6 + 1);
var randomNumber2 = Math.floor(Math.random()* 6 + 1);

var img1 = document.getElementsByClassName("img1");
var img2 = document.getElementsByClassName("img2");

var path1 = "images/dice"+randomNumber1+".png";
var path2 = "images/dice"+randomNumber2+".png";
img1[0].setAttribute("src",path1);
img2[0].setAttribute("src",path2);


var header = document.getElementById("title");
if(randomNumber1>randomNumber2){
  header.innerHTML = "Player 1 Wins!";
}else if(randomNumber1 === randomNumber2){
  header.innerHTML = "Draw";
}else{
  header.innerHTML = "Player 2 Wins!";
}
