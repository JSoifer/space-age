// import $ from 'jquery';
export default class SpaceAge {
  constructor(earthAge, inputtedDemo) {
    this.earthAge = earthAge;
    this.planetAge = earthAge;
    this.lifeExpectancy = 76;
    if (inputtedDemo === "Female") {
      this.lifeExpectancy = 81;
    }
    this.yearsLeft = (this.lifeExpectancy - this.earthAge);
  }

  mercury() {
    let planetFactor = .24;
    this.planetAge = Math.round(this.earthAge /planetFactor);
    this.yearsLeft = Math.round((this.lifeExpectancy - this.earthAge)/planetFactor);
  }

  venus() {
    let planetFactor = .62
    this.planetAge = Math.round(this.earthAge /planetFactor);
    this.yearsLeft = Math.round((this.lifeExpectancy - this.earthAge)/planetFactor);
  }
  mars() {
    this.planetAge = Math.round(this.earthAge /1.88);
  }
  jupiter() {
    this.planetAge = Math.round(this.earthAge /11.86);
  }

  // getYearsLeft() {
  //   this.yearsLeft = (this.lifeExpectancy - this.earthAge);
  //   // if (this.yearsLeft <= 0) {
  //   //   alert( `You have lived ${this.yearsLeft} past your lifeExpectancy. You will probably die soon.`
  //   //   )}
  // }
}


// let today = new Date();
// const timeDiff = Math.abs(today.getTime() - inputtedBirthday.getTime());
// const diffDays = (Math.round(timeDiff / (1000 * 3600 * 24)));
// let remains = (Math.round(diffDays/365));












//    planetAge() {
//     return Math.round(this.earthAge/this.planetYear);
//   }
