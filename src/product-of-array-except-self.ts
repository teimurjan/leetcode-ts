import { strict as assert } from "node:assert";

const productOfArrayExceptSelf = (nums: number[]) => {
  const leftToRight = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    leftToRight[i] = nums[i - 1] * leftToRight[i - 1];
  }

  let prevRight = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    let savedNum = nums[i];
    nums[i] = prevRight * leftToRight[i];
    prevRight *= savedNum;
  }

  return nums;
};

export const test = () => {
  const result = productOfArrayExceptSelf([1, 2, 3, 4]);
  assert.deepEqual(result, [24, 12, 8, 6]);
};

export default productOfArrayExceptSelf;
