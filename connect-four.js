import {
  playerOne,
  playerTwo,
  newGameButton,
  clickTargets,
} from "./DOMelements.js";
import { enableButton, newGameClick } from "./handleNewGame.js";
import { game } from "./handleNewGame.js";
import { updateUI } from "./view.js";

updateUI();
playerOne.addEventListener("keyup", (event) => {
  enableButton();
});

playerTwo.addEventListener("keyup", (event) => {
  enableButton();
});

newGameButton.addEventListener("click", (event) => {
  newGameClick();
  // console.log(game);
});
clickTargets.addEventListener("click", (event) => {
  if (game.winnerNumber === 0) {
    let columnElement = event.target.id.slice(-1);
    let columnNumber = parseInt(columnElement);
    if (!game.isColumnFull(columnNumber)) {
      game.playInColumn(columnNumber);
      updateUI();
    }
  }
});

// parent class for player
// 2 classes, one for each player
// methods for changing class target:hover color, method for selecting the array
