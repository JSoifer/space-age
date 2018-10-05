export function getAge() {
  // let birthday = new Date(inputtedBirthday);
  let inputtedBirthday = new Date("10/05/1978");
  let today = new Date();
  const timeDiff = Math.abs(today.getTime() - inputtedBirthday.getTime());
  const diffDays = Math.ciel(timeDiff / (1000 * 3600 * 24));
  const age = ((diffDays/365).round);
  return age;

}
