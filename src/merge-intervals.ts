import { strict as assert } from "node:assert";

const mergeIntervals = (intervals: number[][]): number[][] => {
  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];

  let left = intervals[0][0];
  let right = intervals[0][1];

  let i = 1;
  while (i < intervals.length) {
    const current = intervals[i];

    if (current[0] <= right) {
      right = Math.max(right, current[1]);
    } else {
      result.push([left, right]);
      left = current[0];
      right = current[1];
    }

    i++;
  }

  result.push([left, right]);

  return result;
};

export const test = () => {
  assert.deepEqual(
    mergeIntervals([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]),
    [
      [1, 6],
      [8, 10],
      [15, 18],
    ]
  );
  assert.deepEqual(
    mergeIntervals([
      [1, 4],
      [2, 3],
    ]),
    [[1, 4]]
  );
};

export default mergeIntervals;
