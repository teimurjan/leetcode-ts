import { strict as assert } from "node:assert";

const integerToRoman = (num: number): string => {
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let result = "";
  let i = 0;

  while (num > 0) {
    if (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    } else {
      i++;
    }
  }

  return result;
};

export const test = () => {
  assert.deepEqual(integerToRoman(3), "III");
  assert.deepEqual(integerToRoman(58), "LVIII");
  assert.deepEqual(integerToRoman(1994), "MCMXCIV");
};

export default integerToRoman;
