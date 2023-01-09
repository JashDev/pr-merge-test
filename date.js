class Date {
  constructor() {
    this.date = new Date();
  }
  getDate() {
    console.log ('getDate');
    console.log ('getDate');
    return this.date;
  }

  setDate(date) {
    console.log('setDate');
    this.date = date
  }
}
