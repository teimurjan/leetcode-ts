import { strict as assert } from "node:assert";

function validWordAbbreviation(word: string, abbr: string): boolean {
  let i = 0;
  let j = 0;

  while (j < word.length || i < abbr.length) {
    let skipCountStr = "";
    while (!Number.isNaN(Number(abbr[i]))) {
      skipCountStr += abbr[i];
      i++;
    }

    if (skipCountStr !== "") {
      if (skipCountStr[0] === "0") {
        return false;
      }

      const skipCount = Number(skipCountStr);
      j += skipCount;
    }

    if (j > word.length || abbr[i] !== word[j]) {
      return false;
    }

    i++;
    j++;
  }

  return true;
}

export const test = () => {
  assert.equal(validWordAbbreviation("internationalization", "i12iz4n"), true);
  assert.equal(validWordAbbreviation("internationalization", "i5a11o1"), true);
  assert.equal(validWordAbbreviation("apple", "a2e"), false);
  assert.equal(validWordAbbreviation("a", "2"), false);
  assert.equal(validWordAbbreviation("a", "01"), false);
  assert.equal(validWordAbbreviation("ab", "a"), false);
  assert.equal(validWordAbbreviation("word", "w0ord"), false);
  assert.equal(validWordAbbreviation("hi", "hi1"), false);
};

export default validWordAbbreviation;
