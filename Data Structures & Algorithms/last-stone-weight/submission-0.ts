
class MaxHeap {
  private heap: number[];
  
  constructor() {
      this.heap = [];
  }

  insert(n: number) {
    this.heap.push(n);
    let i = this.heap.length - 1;
    let p = (i - 1) / 2 | 0;


    while (i > 0 && this.heap[p] < this.heap[i]) {
        [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
        i = p;
        p = (i - 1) / 2 | 0;
    }
  }

  get max() {
    return this.heap[0];
  }

  get size() {
    return this.heap.length;
  }

  extractMax() {
    // Swap last element and first element (max element)
    [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
    // Pop the max element
    const max = this.heap.pop();

    // Adjust the heap
    let i = 0;

    while (i < (this.heap.length - 1)) {
        let l = i * 2 + 1;
        let r = (i + 1) * 2;
        const max = Math.max(this.heap[i], (this.heap[l] ?? -Infinity), (this.heap[r] ?? -Infinity));

        if (this.heap[i] === max) {
            break;
        } else if (this.heap[l] === max) {
            [this.heap[i], this.heap[l]] = [this.heap[l], this.heap[i]];
            i = l;
        } else {
           [this.heap[i], this.heap[r]] = [this.heap[r], this.heap[i]];
            i = r; 
        }
    }

    return max;
  }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const heap = new MaxHeap();

        stones.forEach(s => heap.insert(s));

        while (heap.size > 1) {
            const a = heap.extractMax();
            const b = heap.extractMax();

            if (a === b) {
                continue;
            }

            heap.insert(Math.abs(a - b));
        }

        return heap.size ? heap.extractMax() : 0;

    }
}
