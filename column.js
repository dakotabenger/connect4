export default class Column {
  constructor() {
    this.ColumnArr = Array(6).fill("empty");
  }
  add(currentPlayer) {
    for (let i = 6; i >= 0; i--) {
      console.log(currentPlayer);
      if (this.ColumnArr[i] === "empty") {
        this.ColumnArr[i] = currentPlayer;
        break;
      }
    }
  }

  getTokenAt(index) {
    if (index > 5 || index < 0) {
      return;
    } else if (this.ColumnArr[index] === "empty") {
      return null;
    } else {
      return this.ColumnArr[index];
    }
  }
  isFull() {
    let isTrue = false;
    this.ColumnArr[0] === "empty" ? (isTrue = false) : (isTrue = true);
    console.log(isTrue)
    return isTrue;
  }
}
