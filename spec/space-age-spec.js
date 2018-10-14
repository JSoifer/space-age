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
    let mySpaceAge = new SpaceAge(40, "Female");
    expect(mySpaceAge.yearsLeft).toBe(41);
  });
  it('should calculate remaining life expectancy on other planets', function() {
    mySpaceAge.mercury();
    expect(mySpaceAge.yearsLeft).toBe(150);
  });
  it('should return the number of years lived past life expectancy if appicable', function() {
    let mySpaceAge = new SpaceAge(86, "Female");
    expect(mySpaceAge.yearsLeft).toBe(-5);
  })
  it('should calculate remaining life expectancy on other planets more efficiently', function() {
    mySpaceAge.venus();
    expect(mySpaceAge.yearsLeft).toBe(58);
  });

});
