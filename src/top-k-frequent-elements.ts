import { strict as assert } from "node:assert";

import MaxHeap from "./utils/max-heap";
import numberComparator from "./utils/number-comparator";

type HeapItem = {
  num: number;
  frequency: number;
};

// TODO: implement with quick selection
function topKFrequent(nums: number[], k: number): number[] {
  const heap = new MaxHeap<HeapItem>((a, b) =>
    numberComparator(a.frequency, b.frequency)
  );
  const frequency: Record<number, number> = {};

  for (const num of nums) {
    frequency[num] = frequency[num] + 1 || 1;
  }

  for (let num in frequency) {
    heap.insert({ num: Number(num), frequency: frequency[num] });
  }


  const result: number[] = [];

  while (heap.size() > 0 && result.length < k) {
    result.push(heap.pop().num);
  }

  return result;
}

export const test = () => {
  assert.deepEqual(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2), [2, -1]);
  assert.deepEqual(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
  assert.deepEqual(topKFrequent([1], 1), [1]);
};
