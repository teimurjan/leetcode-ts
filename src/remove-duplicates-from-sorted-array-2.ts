import { strict as assert } from "node:assert";

const removeDuplicates = (nums: number[]) => {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    let count = 1;
    while (right + 1 < nums.length && nums[right] === nums[right + 1]) {
      right++;
      count++;
    }

    let swaps = Math.min(2, count);
    while (swaps > 0) {
      nums[left] = nums[right];
      left++;
      swaps--;
    }

    right++;
  }

  return left;
};

export const test = () => {
  const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
  const result = removeDuplicates(nums);
  assert.deepEqual(result, 5);
  assert.deepEqual(nums, [0, 0, 1, 1, 2, 3, 3]);
};

export default removeDuplicates;
