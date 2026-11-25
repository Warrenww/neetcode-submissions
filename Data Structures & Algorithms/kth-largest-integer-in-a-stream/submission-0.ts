
class MinHeap {
  private heap: number[];
  private size: number;
  
  constructor(size: number) {
      this.heap = [];
      this.size = size;
  }

  insert(n: number) {
      if (this.heap.length < this.size) {
          // Normal insert
          this.heap.push(n);
          let i = this.heap.length - 1;
          let p = (i - 1) / 2 | 0;


          while (i > 0 && this.heap[p] > this.heap[i]) {
              [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
              i = p;
              p = (i - 1) / 2 | 0;
          }
      } else {
          // Replace top
          this.heap[0] = n;
          let i = 0;
          let l = i * 2 + 1;
          let r = (i + 1) * 2;

          while (i < this.heap.length - 1) {
            let min = Math.min(this.heap[i], this.heap[l] ?? Infinity, this.heap[r] ?? Infinity);
            if (this.heap[i] === min) {
              break;
            }
            if (this.heap[l] === min) {
              [this.heap[i], this.heap[l]] = [this.heap[l], this.heap[i]];
              i = l;
            }
            if (this.heap[r] === min) {
              [this.heap[i], this.heap[r]] = [this.heap[r], this.heap[i]];
              i = r
            }
            l = i * 2 + 1;
            r = (i + 1) * 2;
          }
      }
  }

  get min(): number {
    return this.heap[0];
  }

  get isFull() {
    return this.heap.length >= this.size;
  }
}

class KthLargest {
    private heap: MinHeap;
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.heap = new MinHeap(k);
        nums.forEach((n) => this.add(n));
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        const kthL = this.heap.min;
        // If new number is smaller or equal to current k-th largest value
        // It won't able to be the new k-th largest value in the future
        // Discard it and return current k-th largest value
        if (this.heap.isFull && val <= kthL) {
            return kthL;
        }

        // Add the value to the min heap
        this.heap.insert(val);
        return this.heap.min;
    }
}
