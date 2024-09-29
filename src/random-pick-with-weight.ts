import assertApproximatelyEqual from "./utils/assert-approximately-equal";

class Solution {
  private totalSum: number;
  private prefixSums: number[];

  constructor(w: number[]) {
    this.prefixSums = [];
    let prefixSum = 0;

    for (let weight of w) {
      prefixSum += weight;
      this.prefixSums.push(prefixSum);
    }

    this.totalSum = prefixSum;
  }

  pickIndex(): number {
    const target = this.totalSum * Math.random();

    let low = 0;
    let high = this.prefixSums.length;

    while (low < high) {
      const mid = low + Math.floor((high - low) / 2);

      if (target > this.prefixSums[mid]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  }
}

export const test = () => {
  const weights = [1, 3];
  const solution = new Solution(weights);

  const results: number[] = [];
  for (let i = 0; i < 10; i++) {
    results.push(solution.pickIndex());
  }

  const counter = [0, 0];
  const totalRuns = 10000;

  for (let i = 0; i < totalRuns; i++) {
    const index = solution.pickIndex();
    counter[index]++;
  }

  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);

  assertApproximatelyEqual(counter[0] / totalRuns, weights[0] / totalWeight, 0.1);
  assertApproximatelyEqual(counter[1] / totalRuns, weights[1] / totalWeight, 0.1);
};
