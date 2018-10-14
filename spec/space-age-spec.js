import SpaceAge from './../src/SpaceAge.js';

describe('SpaceAge', function() {

  it('Should instantiate a new SpaceAge object', function() {
    let mySpaceAge = new SpaceAge();
    expect(mySpaceAge instanceof SpaceAge).toBe(true);
  });

  it('should take an inputted planet and return the users age on that planet', function() {
    let mySpaceAge = new SpaceAge(40);
    mySpaceAge.venus();
    expect(mySpaceAge.planetAge).toBe(65);
  });
  it('should calculate remaining life expectancy based on demographic and current age', function() {
    let mySpaceAge = new SpaceAge(40);
    mySpaceAge.getYearsLeft("Female");
    expect(mySpaceAge.yearsLeft).toBe(41);
  });
});
