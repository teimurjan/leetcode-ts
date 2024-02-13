import { strict as assert } from "node:assert";

const containerWithMostWater = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;

  let globalArea = 0;

  while (left < right) {
    const area = Math.min(height[right], height[left]) * (right - left);
    if (area > globalArea) {
      globalArea = area;
    }

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return globalArea;
};

export const test = () => {
  assert.deepEqual(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
  assert.deepEqual(containerWithMostWater([1, 1]), 1);
};

export default containerWithMostWater;
