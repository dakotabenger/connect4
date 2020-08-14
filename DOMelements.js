export const playerOne = document.getElementById("player-1-name");
export const newGameButton = document.getElementById("new-game");
export const playerTwo = document.getElementById("player-2-name");
export const boardHolder = document.getElementById("board-holder");
export const gameName = document.getElementById("game-name");
export const clickTargets = document.getElementById("click-targets");

export function getSpotOnBoard(rowIndex,columnIndex) {
    return document.getElementById(`square-${rowIndex}-${columnIndex}`) 
}

export function getColumnOnBoard(index) {
    return document.getElementById(`column-${index}`);
}