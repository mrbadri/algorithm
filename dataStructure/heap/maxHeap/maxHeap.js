class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(element) {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  delete() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return root;
  }

  peek() {
    if (this.heap.length > 0) {
      return this.heap[0];
    }
    return null;
  }

  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    let largest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;

    if (
      leftChild < this.heap.length &&
      this.heap[leftChild] > this.heap[largest]
    ) {
      largest = leftChild;
    }
    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] > this.heap[largest]
    ) {
      largest = rightChild;
    }
    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.heapifyDown(largest);
    }
  }
}

// Example usage
const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(30);

console.log(heap.peek()); // Output: 30
console.log(heap.delete()); // Output: 30
console.log(heap.peek()); // Output: 20
