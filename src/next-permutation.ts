import { strict as assert } from "node:assert";

function nextPermutation(nums: number[]): void {
  let pivotIndex = NaN;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivotIndex = i;
      break;
    }
  }

  if (Number.isNaN(pivotIndex)) {
    nums.reverse();
    return;
  }

  for (let i = nums.length - 1; i > pivotIndex; i--) {
    if (nums[i] > nums[pivotIndex]) {
      const temp = nums[i];
      nums[i] = nums[pivotIndex];
      nums[pivotIndex] = temp;
      break;
    }
  }

  let i = pivotIndex + 1;
  let j = nums.length - 1;

  while (i < j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
}

export const test = () => {
  const nums1 = [1, 2, 3];
  nextPermutation(nums1);
  assert.deepEqual(nums1, [1, 3, 2]);

  const nums2 = [3, 2, 1];
  nextPermutation(nums2);
  assert.deepEqual(nums2, [1, 2, 3]);

  const nums3 = [1, 1, 5];
  nextPermutation(nums3);
  assert.deepEqual(nums3, [1, 5, 1]);

  const nums4 = [1, 3, 2];
  nextPermutation(nums4);
  assert.deepEqual(nums4, [2, 1, 3]);
};

export default nextPermutation;
