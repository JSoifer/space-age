export default class SpaceAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.planetAge = 1;
    this.lifeExpectancy = 0;
  }

  mercury() {
    this.planetAge = Math.round(this.earthAge /.24);
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

  yearsLeft() {
    let inputtedGender = "Female";
    if (inputtedGender === "Female") {
      this.lifeExpectancy = 81;
    } else if (inputtedGender === "Male") {
      this.lifeExpectancy = 76;
    }
    const yearsLeft = (this.lifeExpectancy - this.earthAge);
    return yearsLeft;


  }
}


// let today = new Date();
// const timeDiff = Math.abs(today.getTime() - inputtedBirthday.getTime());
// const diffDays = (Math.round(timeDiff / (1000 * 3600 * 24)));
// let remains = (Math.round(diffDays/365));












//    planetAge() {
//     return Math.round(this.earthAge/this.planetYear);
//   }
