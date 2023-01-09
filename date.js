class Date {
  constructor() {
    this.date = new Date();
  }
  getDate() {
    return this.date;
  }

  setDate(date) {
    console.log('setDate');
    this.date = date
  }
}
