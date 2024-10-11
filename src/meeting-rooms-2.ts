import { strict as assert } from "node:assert";
import numberComparator from "./utils/number-comparator";

function minMeetingRooms(intervals: number[][]): number {
  if (intervals.length === 0) {
    return 0;
  }

  const starts = intervals
    .map((interval) => interval[0])
    .sort(numberComparator);
  const ends = intervals.map((interval) => interval[1]).sort(numberComparator);

  let rooms = 0;

  let left = 0;
  let right = 0;

  while (left < intervals.length) {
    if (starts[left] >= ends[right]) {
      rooms--;
      right++;
    }

    rooms++;
    left++;
  }
  return rooms;
}

export const test = () => {
  assert.equal(
    minMeetingRooms([
      [0, 30],
      [5, 10],
      [15, 20],
    ]),
    2
  );
  assert.equal(
    minMeetingRooms([
      [7, 10],
      [2, 4],
    ]),
    1
  );
  assert.equal(
    minMeetingRooms([
      [1, 5],
      [8, 9],
      [8, 9],
    ]),
    2
  );
  assert.equal(
    minMeetingRooms([
      [2, 15],
      [36, 45],
      [9, 29],
      [16, 23],
      [4, 9],
    ]),
    2
  );
};
