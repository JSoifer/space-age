import { getAge, SpaceAge, planetYear } from './../src/business.js';

describe( 'getAge', function() {

  it('should calculate a users age based on inputted birthday', function() {
    let inputtedBirthday = "10/05/1978";
    var earthAge = getAge(inputtedBirthday);
    expect(earthAge).toBe(40);
  });
});

describe( 'SpaceAge', function() {

  it('should calculate a users age in Mercury years', function() {
    let mercury = new SpaceAge(40,.24);
    expect(mercury.planetAge()).toBe(167);
  });
  it('should calculate a users age in venus years', function() {
    let venus = new SpaceAge(40,.62);
    expect(venus.planetAge()).toBe(65);
  });
});
