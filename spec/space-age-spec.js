import { getAge } from './../src/business.js';

describe( 'getAge', function() {

  it('should calculate a users age based on inputted birthday', function() {
    let inputtedBirthday = "1978-10-05";
    var result = getAge(inputtedBirthday);
    expect(result).toEqual(40);
  });
});
