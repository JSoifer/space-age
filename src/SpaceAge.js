// import $ from 'jquery';
export default class SpaceAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.planetAge = 1;
    this.lifeExpectancy = 76;
  }

  mercury() {
    let planetFactor = .24;
    this.planetAge = Math.round(this.earthAge /planetFactor);
    this.yearsLeft = Math.round((this.lifeExpectancy - this.earthAge)/planetFactor)
  }
  venus() {
    this.planetAge = Math.round(this.earthAge /.62);
  }
  mars() {
    this.planetAge = Math.round(this.earthAge /1.88);
  }
  jupiter() {
    this.planetAge = Math.round(this.earthAge /11.86);
  }

  getYearsLeft(inputtedDemo) {
    if (inputtedDemo === "Female") {
      this.lifeExpectancy = 81;
    }
    this.yearsLeft = (this.lifeExpectancy - this.earthAge);
  }
}


// let today = new Date();
// const timeDiff = Math.abs(today.getTime() - inputtedBirthday.getTime());
// const diffDays = (Math.round(timeDiff / (1000 * 3600 * 24)));
// let remains = (Math.round(diffDays/365));












//    planetAge() {
//     return Math.round(this.earthAge/this.planetYear);
//   }
