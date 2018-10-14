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
    let planetFactor = .62;
    this.planetAge = Math.round(this.earthAge /planetFactor);
    this.yearsLeft = Math.round((this.lifeExpectancy - this.earthAge)/planetFactor);
  }
  mars() {
    let planetFactor = 1.88;
    this.planetAge = Math.round(this.earthAge /planetFactor);
    this.yearsLeft = Math.round((this.lifeExpectancy - this.earthAge)/planetFactor);
  }
  jupiter() {
    let planetFactor = 11.86;
    this.planetAge = Math.round(this.earthAge /planetFactor);
    this.yearsLeft = Math.round((this.lifeExpectancy - this.earthAge)/planetFactor);
  }
}












//    planetAge() {
//     return Math.round(this.earthAge/this.planetYear);
//   }
