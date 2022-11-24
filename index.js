var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceeImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceeImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎲 Player1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 wins! 🎲";

}
else {
    document.querySelector("h1").innerHTML = "🎲 DRAW 🎲";
}