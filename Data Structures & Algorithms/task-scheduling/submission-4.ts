class MaxHeap {
  private heap: [string, number][];
  
  constructor() {
      this.heap = [];
  }

  insert(n: [string, number]) {
    this.heap.push(n);
    let i = this.heap.length - 1;
    let p = (i - 1) / 2 | 0;

    while (i > 0 && this.heap[p][1] < this.heap[i][1]) {
        [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
        i = p;
        p = (i - 1) / 2 | 0;
    }
  }

  get max(): [string, number] {
    return this.heap[0];
  }

  get size() {
    return this.heap.length;
  }
  
  extractMax(): [string, number] {
    // Swap last element and first element (max element)
    [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
    // Pop the max element
    const max = this.heap.pop();

    // Adjust the heap
    let i = 0;

    while (i < (this.heap.length - 1)) {
        let l = i * 2 + 1;
        let r = (i + 1) * 2;
        const max = Math.max(this.heap[i][1], (this.heap[l]?.[1] ?? -Infinity), (this.heap[r]?.[1] ?? -Infinity));

        if (this.heap[i][1] === max) {
            break;
        } else if (this.heap[l][1] === max) {
            [this.heap[i], this.heap[l]] = [this.heap[l], this.heap[i]];
            i = l;
        } else {
           [this.heap[i], this.heap[r]] = [this.heap[r], this.heap[i]];
            i = r; 
        }
    }

    return max;
  }

  print() {
    console.log(this.heap);
  }
}

class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        const heap = new MaxHeap();
        const freq = new Map<string, number>();
        tasks.forEach((t) => {
            freq.set(t, (freq.get(t) ?? 0) + 1);
        });

        Array.from(freq.entries()).forEach((e) => heap.insert(e));

        let cycle = 0
        const waitingList: [[string, number], number][] = [];

        while (heap.size || waitingList.length) {       
            if (waitingList.length) {
                const [waiting, lastExecCycle] = waitingList[0];
                
                if (!heap.size) {
                    cycle += n - (cycle - lastExecCycle) + 1;
                }

                if (cycle - lastExecCycle > n) {
                    heap.insert(waiting);
                    waitingList.shift();
                }
            }
            const [task, freq] = heap.extractMax();

            if (freq > 1) {
                waitingList.push([[task, freq - 1], cycle]);
            }

            cycle ++;
        }

        return cycle;
    }
}
