import SpaceAge from './../src/SpaceAge.js';

describe('SpaceAge', function() {
  let mySpaceAge = new SpaceAge(40);

  it('Should instantiate a new SpaceAge object', function() {
    expect(mySpaceAge instanceof SpaceAge).toBe(true);
  });

  it('should take an inputted planet and return the users age on that planet', function() {
    mySpaceAge.venus();
    expect(mySpaceAge.planetAge).toBe(65);
  });
  it('should calculate remaining life expectancy based on demographic and current age', function() {
    mySpaceAge.getYearsLeft();
    expect(mySpaceAge.yearsLeft).toBe(36);
  });
  it('should calculate remaining life expectancy on other planets', function() {
    mySpaceAge.mercury();
    expect(mySpaceAge.yearsLeft).toBe(150);
  });
});
