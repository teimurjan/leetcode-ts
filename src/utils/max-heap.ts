class MaxHeap<T> {
  private heap: T[];
  private comparator: (a: T, b: T) => 1 | 0 | -1;

  constructor(comparator: (a: T, b: T) => 1 | 0 | -1) {
    this.heap = [];
    this.comparator = comparator;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value: T): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  private bubbleUp(): void {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = this.getParentIndex(index);
      if (this.comparator(this.heap[parent], this.heap[index]) > -1) {
        break;
      }
      this.swap(parent, index);
      index = parent;
    }
  }

  pop(): T | null {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop()!;
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);

    return max;
  }

  private bubbleDown(index: number): void {
    const length = this.heap.length;
    let largest = index;

    const left = this.getLeftChildIndex(index);
    const right = this.getRightChildIndex(index);

    if (
      left < length &&
      this.comparator(this.heap[left], this.heap[largest]) === 1
    ) {
      largest = left;
    }

    if (
      right < length &&
      this.comparator(this.heap[right], this.heap[largest]) === 1
    ) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.bubbleDown(largest);
    }
  }

  peek(): T | null {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size(): number {
    return this.heap.length;
  }
}

export default MaxHeap;
