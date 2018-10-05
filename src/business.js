export function getAge() {
  // let birthday = new Date(inputtedBirthday);
  let inputtedBirthday = new Date("10/05/1978");
  let today = new Date();
  const timeDiff = Math.abs(today.getTime() - inputtedBirthday.getTime());
  const diffDays = (Math.round(timeDiff / (1000 * 3600 * 24)));
  const earthAge = (Math.round(diffDays/365));
  return earthAge;

}

export class Planet {
  constuctor(name, year) {
    this.name = name;
    this.year = year;
  }
}
mercury = new Planet("Mercury", .24);
venus = new Planet("Venus", .62);

export class SpaceAge {
  constructor(earthAge, planetYear) {
    this.earthAge = earthAge;
    this.planetYear = planetYear;
  }
   planetAge() {
    return Math.round(this.earthAge/this.planetYear);
  }
}

// let mercury = new SpaceAge(40,.24);
// let venus = new SpaceAge(40,.62);


// export function planetYear(planet) {
//   if (planet =  "Mercury") {
//      this.year = .24;
//   } else if (planet = "Venus") {
//      this.year = .62;
//   } else if(planet = "Mars") {
//      this.year = 1.88;
//   } else if (planet = "Jupiter") {
//      this.year = 11.86;
//   } else {
//      this.year = 1;
//   }
// return this.year;
// }
