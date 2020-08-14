import {
  boardHolder,
  gameName,
  clickTargets,
  getSpotOnBoard,
  getColumnOnBoard
} from "./DOMelements.js";
import { game } from "./handleNewGame.js";

export function updateUI() {
  if (game === undefined) {
    boardHolder.setAttribute("class", "is-invisible");
  } else {
    boardHolder.removeAttribute("class");
    gameName.innerHTML = `<h1>${game.getName()}</h1>`;
    game.playerTurn === "black"
      ? clickTargets.setAttribute("class", "black")
      : clickTargets.setAttribute("class", "red");
    for (let i = 0; i <= 6; i++) {
        let columnOnBoard = getColumnOnBoard(i);
        if (game.isColumnFull(i)) {
            columnOnBoard.classList.add("full");
        } else {
            columnOnBoard.classList.remove("full");
        }
      for (let j = 0; j <= 5; j++) {
          //row 
        let spotOnBoard = getSpotOnBoard(j, i);
        // console.log(spotOnBoard)
        spotOnBoard.innerHTML = "";
        if (game.getTokenAt(i, j) === "black") {
          let div = document.createElement("div");
          div.setAttribute("class", "token black");
          spotOnBoard.appendChild(div);
        } else if (game.getTokenAt(i, j) === "red") {
          let div = document.createElement("div");
          div.setAttribute("class", "token red");
          spotOnBoard.appendChild(div);
        }
      }
    }
  }
}
