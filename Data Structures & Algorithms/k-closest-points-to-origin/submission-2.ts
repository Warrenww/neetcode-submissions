class MaxHeap {
  private heap: [number, number][];
  private size: number;

  static dist(point: [number, number]) {
    if (!point) {
        return null;
    }
    return (point[0]**2 + point[1]**2);
  }
  
  constructor(size: number) {
      this.heap = [];
      this.size = size;
  }

  insert(n: [number, number]) {
      if (this.heap.length < this.size) {
          // Normal insert
          this.heap.push(n);
          let i = this.heap.length - 1;
          let p = (i - 1) / 2 | 0;

          while (i > 0 && MaxHeap.dist(this.heap[p]) < MaxHeap.dist(this.heap[i])) {
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
            let max = Math.max(MaxHeap.dist(this.heap[i]), MaxHeap.dist(this.heap[l]) ?? -Infinity, MaxHeap.dist(this.heap[r]) ?? -Infinity);
            if (MaxHeap.dist(this.heap[i]) === max) {
              break;
            }
            if (MaxHeap.dist(this.heap[l]) === max) {
              [this.heap[i], this.heap[l]] = [this.heap[l], this.heap[i]];
              i = l;
            }
            if (MaxHeap.dist(this.heap[r]) === max) {
              [this.heap[i], this.heap[r]] = [this.heap[r], this.heap[i]];
              i = r
            }
            l = i * 2 + 1;
            r = (i + 1) * 2;
          }
      }
  }

  get max(): [number, number] {
    return this.heap[0];
  }

  get isFull() {
    return this.heap.length >= this.size;
  }

  get values() {
    return this.heap
  }

//   print() {
//     console.log(this.heap);
//   }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const heap = new MaxHeap(k);

        points.forEach((p) => {
            console.log(p, heap.isFull, heap.max)
            if (!heap.isFull || MaxHeap.dist([p[0], p[1]]) < MaxHeap.dist(heap.max)) {
                heap.insert([p[0], p[1]]);
            }
        });

        return heap.values;
    }
}
