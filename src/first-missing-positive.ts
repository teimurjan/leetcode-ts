import { strict as assert } from "node:assert";

function firstMissingPositive(nums: number[]): number {
  let hasOne = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      hasOne = true;
    }

    if (nums[i] <= 0 || nums[i] > nums.length) {
      nums[i] = 1;
    }
  }

  if (!hasOne) {
    return 1;
  }

  for (let i = 0; i < nums.length; i++) {
    const value = Math.abs(nums[i]);
    if (value === nums.length) {
      nums[0] = -Math.abs(nums[0]);
    } else {
      nums[value] = -Math.abs(nums[value]);
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i;
    }
  }

  if (nums[0] > 0) {
    return nums.length
  }

  return nums.length + 1;
}

export const test = () => {
  assert.equal(firstMissingPositive([1, 2, 0]), 3);
  assert.equal(firstMissingPositive([3, 4, -1, 1]), 2);
  assert.equal(firstMissingPositive([7, 8, 9, 11, 12]), 1);
  assert.equal(firstMissingPositive([100000, 3, 4000, 2, 15, 1, 99999]), 4);
  assert.equal(firstMissingPositive([100000, 3, 4000, 1, 15, 2, 99999]), 4);
  assert.equal(firstMissingPositive([0, 2, 2, 4, 0, 1, 0, 1, 3]), 5);
};
