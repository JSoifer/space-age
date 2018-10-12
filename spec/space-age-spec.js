import SpaceAge from './../src/SpaceAge.js';

describe('SpaceAge', function() {

  it('Should instantiate a new SpaceAge object', function() {
    let mySpaceAge = new SpaceAge();
    expect(mySpaceAge instanceof SpaceAge).toBe(true);
  });

  it('should take an inputted planet and return the users age on that planet', function() {
    let mySpaceAge = new SpaceAge(40);
    mySpaceAge.mercury();
    expect(mySpaceAge.planetAge).toBe(95);
  });
});
