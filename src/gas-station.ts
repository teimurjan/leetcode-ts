import { strict as assert } from "node:assert";

const gasStation = (gas: number[], cost: number[]): number => {
  let start = 0;
  let total = 0;
  let tank = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    total += gas[i] - cost[i];

    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  if (total < 0) {
    return -1;
  }

  return start;
};

export const test = () => {
  assert.deepEqual(gasStation([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]), 3);
  assert.deepEqual(gasStation([2, 3, 4], [3, 4, 3]), -1);
};

export default gasStation;
