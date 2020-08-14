import Column from "./column.js";

export default class Game {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.playerTurn = "black";
    this.columns = Array(7)
      .fill()
      .map((el) => {
        el = new Column(this.playerTurn);
        return el;
      });
  }
  getName() {
    return `${this.playerOne} VS. ${this.playerTwo}`;
  }

  playInColumn(index) {
    console.log(index);
    console.log(this.columns);
    this.columns[index].add(this.playerTurn);
    this.playerTurn === "black"
      ? (this.playerTurn = "red")
      : (this.playerTurn = "black");
  }
  getTokenAt(columnIndex, rowIndex) {
    return this.columns[columnIndex].getTokenAt(rowIndex);
  }
  isColumnFull(index) {
    if (index >= 0 && index <= 6) {
      return this.columns[index].isFull();
    }
  }
}
