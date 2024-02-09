import { strict as assert } from "node:assert";

const rotateArray = (nums: number[], k: number): void => {
  const kMod = k % nums.length;

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  left = 0;
  right = kMod - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  left = kMod;
  right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};

export const test = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  rotateArray(nums, 3);
  assert.deepEqual(nums, [5, 6, 7, 1, 2, 3, 4]);
};

export default rotateArray;
