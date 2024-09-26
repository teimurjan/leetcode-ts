import { strict as assert } from "node:assert";

function isAlienSorted(words: string[], order: string): boolean {
  const letterWeights = new Map<string, number>();
  for (let i = 0; i < order.length; i++) {
    letterWeights.set(order[i], i);
  }

  let maxWordLength = 0;
  for (let word of words) {
    maxWordLength = Math.max(maxWordLength, word.length);
  }

  for (let j = 1; j < words.length; j++) {
    const word1 = words[j - 1];
    const word2 = words[j];

    let i = 0;
    while (i < Math.max(word1.length, word2.length)) {
      const weight1 = letterWeights.get(word1[i]);
      if (typeof weight1 !== "number") {
        break;
      }

      const weight2 = letterWeights.get(word2[i]);
      if (typeof weight2 !== "number") {
        return false;
      }

      if (weight1 < weight2) {
        break;
      }

      if (weight1 === weight2) {
        i++;
        continue;
      }

      return false;
    }
  }

  return true;
}

export const test = () => {
  assert.deepEqual(
    isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"),
    true
  );
  assert.deepEqual(
    isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"),
    false
  );
  assert.deepEqual(
    isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"),
    false
  );
  assert.deepEqual(
    isAlienSorted(["app", "apple"], "abcdefghijklmnopqrstuvwxyz"),
    true
  );
  assert.deepEqual(
    isAlienSorted(["aa", "a"], "abqwertyuioplkjhgfdszxcvnm"),
    false
  );
};

export default isAlienSorted;
