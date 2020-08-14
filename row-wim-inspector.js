export default class RowInspector {
  constructor(columns) {
    this.columns = columns;
  }

  inspect() {
    for (let i = 0; i <= 5; i++) {
      let column1 = this.columns[0].getTokenAt(i);
      let column2 = this.columns[1].getTokenAt(i);
      let column3 = this.columns[2].getTokenAt(i);
      let column4 = this.columns[3].getTokenAt(i);
      if (
        column1 === column2 &&
        column2 === column3 &&
        column3 === column4 &&
        column1 !== "empty"
      ) {
          console.log(column1)
        if (column1 === "black") {
          return 1;
        } else {
          return 2;
        }
      }
    }
    return 0;
  }
}
