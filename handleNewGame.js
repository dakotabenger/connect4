import { playerOne, playerTwo, newGameButton } from "./DOMelements.js";
import Game from "./game.js";
import { updateUI } from "./view.js";

let game = undefined;

export function enableButton() {
  if (playerOne.value.length === 0 || playerTwo.value.length === 0) {
    newGameButton.disabled = true;
  } else {
    newGameButton.disabled = false;
  }
}

export function newGameClick() {
  console.log(game);
  game = new Game(playerOne.value, playerTwo.value);
  playerOne.value = "";
  playerTwo.value = "";
  newGameButton.disabled = true;
  updateUI();
}

export function removeRed() {
  
}


export { game };
