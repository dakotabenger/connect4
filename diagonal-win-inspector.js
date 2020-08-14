export default class DiagonalInspector {
  constructor(columns) {
    this.columns = columns;
  }

  inspect() {
    let winStatus = 0;
    for (let i = 0; i <= 5git ; i++) {
      let column1 = this.columns[0].getTokenAt(i);
      let column2 = this.columns[1].getTokenAt(i + 1);
      let column3 = this.columns[2].getTokenAt(i + 2);
      let column4 = this.columns[3].getTokenAt(i + 3);
      if (
        column1 === column2 &&
        column2 === column3 &&
        column3 === column4 &&
        column1 !== "empty"
      ) {
        console.log(column1);
        if (column1 === "black") {
          winStatus = 1;
        } else {
          winStatus = 2;
        }
      }
    }
    for (let i = 5; i >= 0; i--) {
      let column1 = this.columns[0].getTokenAt(i);
      let column2 = this.columns[1].getTokenAt(i - 1);
      let column3 = this.columns[2].getTokenAt(i - 2);
      let column4 = this.columns[3].getTokenAt(i - 3);
      if (
        column1 === column2 &&
        column2 === column3 &&
        column3 === column4 &&
        column1 !== "empty"
      ) {
        console.log(column1);
        if (column1 === "black") {
          winStatus = 1;
        } else {
          winStatus = 2;
        }
      }

      return winStatus;
    }
  }
}
