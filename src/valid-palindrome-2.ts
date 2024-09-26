import { strict as assert } from "node:assert";

function validPalindromeHelper(
  s: string,
  left: number,
  right: number,
  attempts = 1
): boolean {
  if (left >= right) {
    return true;
  }

  if (s[left] === s[right]) {
    return validPalindromeHelper(s, left + 1, right - 1, attempts);
  }

  if (attempts === 0) {
    return false;
  }

  const leftResult = validPalindromeHelper(s, left + 1, right, attempts - 1);
  if (leftResult) {
    return true;
  }

  return validPalindromeHelper(s, left, right - 1, attempts - 1);
}

function validPalindrome(s: string): boolean {
  return validPalindromeHelper(s, 0, s.length - 1);
}

export const test = () => {
  assert.equal(validPalindrome("aba"), true);
  assert.equal(validPalindrome("abca"), true);
  assert.equal(validPalindrome("abc"), false);
  assert.equal(validPalindrome("bddb"), true);
  assert.equal(validPalindrome("eeccccbebaeeabebccceea"), false);
};

export default validPalindrome;
