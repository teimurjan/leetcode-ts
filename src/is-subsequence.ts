import { strict as assert } from "node:assert";

const isSubsequence = (s: string, t: string): boolean => {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }

    j++;
  }


  return i === s.length;
};

export const test = () => {
  assert.deepEqual(isSubsequence("abc", "ahbgdc"), true);
  assert.deepEqual(isSubsequence("axc", "ahbgdc"), false);
  assert.deepEqual(isSubsequence("acb", "ahbgdc"), false);
};

export default isSubsequence;
