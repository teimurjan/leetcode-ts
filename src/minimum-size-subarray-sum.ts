import { strict as assert } from "node:assert";

const minimumSizeSubarraySum = (target: number, nums: number[]): number => {
  let left = 0;
  let right = 0;

  let sum = nums[0];
  let result = 0;

  while (left <= right && left < nums.length && right < nums.length) {
    if (sum < target) {
      right++;
      sum += nums[right];
    } else {
      const nextResult = right - left + 1;
      if (result === 0 || result > nextResult) {
        result = nextResult;
      }

      sum -= nums[left];
      left++;
    }
  }

  return result;
};

export const test = () => {
  assert.deepEqual(minimumSizeSubarraySum(4, [1, 4, 4]), 1);
  assert.deepEqual(minimumSizeSubarraySum(7, [2, 3, 1, 2, 4, 3]), 2);
  assert.deepEqual(minimumSizeSubarraySum(11, [1, 2, 3, 4, 5]), 3);
};

export default minimumSizeSubarraySum;
