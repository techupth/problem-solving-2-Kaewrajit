//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let prevValue = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = romanNumber[s[i]];

    if (prevValue < currentValue) {
      result += currentValue - 2 * prevValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
};
// ตัวอย่างการใช้งาน
const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994
console.log(result1);
console.log(result2);
console.log(result3);
