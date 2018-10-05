export function getAge() {
  // let birthday = new Date(inputtedBirthday);
  let inputtedBirthday = new Date("10/05/1978");
  let today = new Date();
  const timeDiff = Math.abs(today.getTime() - inputtedBirthday.getTime());
  const diffDays = (Math.round(timeDiff / (1000 * 3600 * 24)));
  const age = (Math.round(diffDays/365));
  return age;

}
export class SpaceAge {
  constructor(earthAge, planetYears) {
    this.earthAge = earthAge;
    this.planetYears = planetYears;
  }
   planetAge() {
    return this.earthAge/this.planetYears;
  }

  let mercury = new SpaceAge(40,.24);
  return Math.round(mercury.planetAge);
}
