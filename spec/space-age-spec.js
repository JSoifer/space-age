import SpaceAge from './../src/SpaceAge.js';

describe('SpaceAge', function() {

  it('Should instantiate a new SpaceAge object', function() {
    let mySpaceAge = new SpaceAge();
    expect(mySpaceAge instanceof SpaceAge).toBe(true);
  });

});
