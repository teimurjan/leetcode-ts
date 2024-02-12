import { strict as assert } from "node:assert";

const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  if (n === 0) {
    return true;
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && flowerbed[i] === 0 && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      n -= 1;

      if (n === 0) {
        return true;
      }
    }
  }

  return false;
};

export const test = () => {
  assert.deepEqual(canPlaceFlowers([1, 0, 0, 0, 1], 1), true);
  assert.deepEqual(canPlaceFlowers([1, 0, 0, 0, 1], 2), false);
  assert.deepEqual(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2), false);
  assert.deepEqual(canPlaceFlowers([0, 0, 1, 0, 0], 1), true);
};

export default canPlaceFlowers;
