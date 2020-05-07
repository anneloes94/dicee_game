const randomNumber1 = Math.ceil(Math.random() * 6);
const randomNumber2 = Math.ceil(Math.random() * 6);

const diceOne = document.querySelector("img.img1")
const diceTwo = document.querySelector("img.img2")

diceOne.setAttribute("src", `images/dice${randomNumber1}.png`)
diceTwo.setAttribute("src", `images/dice${randomNumber2}.png`)

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}