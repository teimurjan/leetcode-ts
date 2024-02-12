import { strict as assert } from "node:assert";

const removeDuplicatesFromSortedArray2 = (nums: number[]) => {
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
  const result = removeDuplicatesFromSortedArray2(nums);
  assert.deepEqual(result, 7);
  assert.deepEqual(nums, [0, 0, 1, 1, 2, 3, 3, 3, 3]);
};

export default removeDuplicatesFromSortedArray2;
