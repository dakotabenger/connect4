import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";
import RowInspector from "./row-wim-inspector.js";
import DiagonalInspector from "./diagonal-win-inspector.js"

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
    this.winnerNumber = 0;
  }
  getName() {
    // if (this.winnerNumber === 1) {
    //   return `${this.playerOne} wins!`
    // }
    // if (this.winnerNumber === 2) {
    //   return `${this.playerTwo} wins!`
    // }
    if (this.winnerNumber === 3) {
      return `${this.playerOne} ties with ${this.playerTwo}`;
    } else if (this.winnerNumber === 1) {
      return `${this.playerOne} wins`;
    } else if (this.winnerNumber === 2) {
      return `${this.playerTwo} wins`;
    } else {
      return `${this.playerOne} VS. ${this.playerTwo}`;
    }
  }
  playInColumn(index) {
    console.log(index);
    console.log(this.columns);
    this.columns[index].add(this.playerTurn);
    this.playerTurn === "black"
      ? (this.playerTurn = "red")
      : (this.playerTurn = "black");
    this.checkForTie();
    this.checkForColumnWin();
    this.checkForRowWin();
    this.checkForDiagonalWin();
    console.log(this.winnerNumber);
  }
  getTokenAt(columnIndex, rowIndex) {
    return this.columns[columnIndex].getTokenAt(rowIndex);
  }
  isColumnFull(index) {
    if (this.winnerNumber !== 0) {
      return true;
    }
    if (index >= 0 && index <= 6) {
      console.log(this.columns[index].isFull());
      return this.columns[index].isFull();
    }
  }
  checkForTie() {
    for (let i = 0; i < 7; i++) {
      if (!this.isColumnFull(i)) {
        // console.log("not tied");
        return false;
      } else if (i === 6 && this.isColumnFull(i)) {
        this.winnerNumber = 3;
        return true;
      }
    }
  }
  checkForColumnWin() {
    for (let i = 0; i < 7; i++) {
      let winState = new ColumnWinInspector(this.columns[i]);
      if (winState.inspect() === 1) {
        this.winnerNumber = 1;
      } else if (winState.inspect() === 2) {
        this.winnerNumber = 2;
      }
    }
  }
  checkForRowWin() {
    if (this.winnerNumber !== 0) {
      return;
    }
    let firstInspector = new RowInspector(this.columns.slice(0, 4));
    // console.log(this.columns.slice(1,4))
    let secondInspector = new RowInspector(this.columns.slice(1, 5));
    let thirdInspector = new RowInspector(this.columns.slice(2, 6));
    let fourthInspector = new RowInspector(this.columns.slice(3, 7));
    this.winnerNumber = firstInspector.inspect();
    if (this.winnerNumber === 0) {

        this.winnerNumber = secondInspector.inspect();
    }
    if (this.winnerNumber === 0) {
    this.winnerNumber = thirdInspector.inspect();
    }
    if (this.winnerNumber === 0) {
    this.winnerNumber = fourthInspector.inspect();
    }
    if (this.winnerNumber === 0) {
    console.log(firstInspector.inspect())
    }
    if (this.winnerNumber !== 0) {
        return true
    }
  }

  checkForDiagonalWin() {
 if (this.winnerNumber !== 0) {
      return;
    }
    let firstInspector = new DiagonalInspector(this.columns.slice(0, 4));
    // console.log(this.columns.slice(1,4))
    let secondInspector = new DiagonalInspector(this.columns.slice(1, 5));
    let thirdInspector = new DiagonalInspector(this.columns.slice(2, 6));
    let fourthInspector = new DiagonalInspector(this.columns.slice(3, 7));
    this.winnerNumber = firstInspector.inspect();
    if (this.winnerNumber === 0) {

        this.winnerNumber = secondInspector.inspect();
    }
    if (this.winnerNumber === 0) {
    this.winnerNumber = thirdInspector.inspect();
    }
    if (this.winnerNumber === 0) {
    this.winnerNumber = fourthInspector.inspect();
    }
    if (this.winnerNumber === 0) {
    console.log(firstInspector.inspect())
    }
    if (this.winnerNumber !== 0) {
        return true
    }
  }
}
