// create first dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
var image1 = document.getElementsByClassName("img1")[0];
image1.setAttribute("src", randomImageSource);

// create second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.getElementsByClassName("img2")[0];
image2.setAttribute("src", randomImageSource2);

// change title
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}