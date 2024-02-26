import { strict as assert } from "node:assert";

const longestConsecutiveSequence = (nums: number[]): number => {
  if (nums.length === 0) {
    return 0;
  }

  const numToIndex: Record<string, number> = {};
  for (let i = 0; i < nums.length; i++) {
    numToIndex[nums[i]] = i;
  }

  const origins = [];
  for (let num in numToIndex) {
    const index = numToIndex[num];
    const prev = numToIndex[nums[index] - 1];
    const next = numToIndex[nums[index] + 1];

    if (typeof prev === "undefined" && typeof next !== "undefined") {
      origins.push(index);
    }
  }

  if (origins.length === 0) {
    return 1;
  }

  let totalResult = 0;
  let localResult = 1;

  let originI = 0;
  let i = origins[originI];
  while (originI < origins.length) {
    const next = numToIndex[nums[i] + 1];

    if (typeof next !== "undefined") {
      i = next;
      localResult++;
    } else {
      i = origins[++originI];
      totalResult = Math.max(totalResult, localResult);
      localResult = 1;
    }
  }

  return totalResult;
};

export const test = () => {
  assert.deepEqual(longestConsecutiveSequence([1, 2, 3, 4]), 4);
  assert.deepEqual(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]), 4);
  assert.deepEqual(
    longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]),
    9
  );
  assert.deepEqual(
    longestConsecutiveSequence([
      4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3,
    ]),
    5
  );
};

export default longestConsecutiveSequence;
