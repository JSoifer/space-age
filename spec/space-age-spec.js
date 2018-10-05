import { getAge, SpaceAge } from './../src/business.js';

describe( 'getAge', function() {

  it('should calculate a users age based on inputted birthday', function() {
    let inputtedBirthday = "10/05/1978";
    var age = getAge(inputtedBirthday);
    expect(age).toBe(40);
  });
});

describe( 'SpaceAge', function() {

  it('should calculate a users age in Mercury years', function() {
    const mercury = new SpaceAge(40,.24);
    expect(newAge).toBe(167)

  })
})
