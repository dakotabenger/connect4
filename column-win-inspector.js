export default class ColumnWinInspector {
  constructor(column) {
    this.column = column;
  }
  inspect() {
    for (let i = 0; i <= this.column.ColumnArr.length - 4; i++) {
      if (
        this.column.ColumnArr[i] !== "empty" &&
        (this.column.ColumnArr[i] === this.column.ColumnArr[i + 1] &&
        this.column.ColumnArr[i + 1] === this.column.ColumnArr[i + 2] &&
        this.column.ColumnArr[i + 2] === this.column.ColumnArr[i + 3])
      ) {
        if (this.column.ColumnArr[i] === "black") {
          return 1;
        } else {
          return 2;
        }
      }
    }
  }
}
