import { strict as assert } from "node:assert";

function assertApproximatelyEqual(
  actual: number,
  expected: number,
  tolerance: number
) {
  if (Math.abs(actual - expected) > tolerance) {
    throw new assert.AssertionError({
      message: `Expected ${actual} to be close to ${expected}`,
      actual: actual,
      expected: expected,
    });
  }
}

export default assertApproximatelyEqual;
