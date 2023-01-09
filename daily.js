class Daily {
  constructor() {
    console.log('constructor');
    this.daily = [];
  }

  addDaily(daily) {
    this.daily.push(daily);
  }

  getDaily() {
    console.log('this.dailye');
    return this.daily;
  }
}
