import { strict as assert } from "node:assert";

const reverseVowels = (s: string): string => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const arr = [...s];
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const isLeftVowel = vowels.has(arr[left].toLowerCase());
    const isRightVowel = vowels.has(arr[right].toLowerCase());
    if (isLeftVowel && isRightVowel) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
    }

    if (!isLeftVowel) {
      left++;
    }

    if (!isRightVowel) {
      right--;
    }
  }

  return arr.join("");
};

export const test = () => {
  assert.deepEqual(reverseVowels("hello"), "holle");
  assert.deepEqual(reverseVowels("leetcode"), "leotcede");
  assert.deepEqual(reverseVowels("aA"), "Aa");
};

export default reverseVowels;
