console.log("Up and running!");
console.log("user flipped " + "cardOne");
console.log("user flipped " + "cardTwo");
console.log("user flipped " + "cardThree");
console.log("user flipped " + "cardFour");

var cards = ["cardOne", "cardTwo", "cardThree", "cardFour"];
var cardsInPlay = ["cardOne", "cardTwo"];

console.log("User flipped queen");
console.log("user flipped king");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	result = alert("You found a match!");
} else {
	result = alert("Try again!");
}