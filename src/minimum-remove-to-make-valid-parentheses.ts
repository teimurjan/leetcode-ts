import { strict as assert } from "node:assert";

function minRemoveToMakeValid(s: string): string {
  let openings = 0;
  let pairs = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openings++;
    }

    if (s[i] === ")") {
      if (openings <= pairs) {
        continue;
      }

      pairs++;
    }
  }

  let result = "";
  openings = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (openings === pairs) {
        continue;
      }
      result += s[i];
      openings++;
    } else if (s[i] === ")") {
      if (openings === 0 || pairs === 0) {
        continue;
      }
      result += s[i];
      pairs--;
      openings--;
      continue;
    } else {
      result += s[i];
    }
  }

  return result;
}

export const test = () => {
  assert.deepEqual(minRemoveToMakeValid("lee(t(c)o)de)"), "lee(t(c)o)de");
  assert.deepEqual(minRemoveToMakeValid("a)b(c)d"), "ab(c)d");
  assert.deepEqual(minRemoveToMakeValid("))(("), "");
  assert.deepEqual(minRemoveToMakeValid("(a(b(c)d)"), "a(b(c)d)");
};

export default minRemoveToMakeValid;
