import { strict as assert } from "node:assert";

const jumpGame = (nums: number[]): boolean => {
  let left = 0;
  let right = 1;

  while (left != right && right < nums.length) {
    if (nums[left] >= right - left) {
      right++;
    } else {
      left++;
    }
  }
  return right === nums.length;
};

export const test = () => {
  assert.deepEqual(jumpGame([2, 3, 1, 1, 4]), true);
  assert.deepEqual(jumpGame([3, 2, 1, 0, 4]), false);
  assert.deepEqual(jumpGame([0]), true);
  assert.deepEqual(jumpGame([0, 1]), false);
};

export default jumpGame;
