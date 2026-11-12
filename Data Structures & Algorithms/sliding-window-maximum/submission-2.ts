type heapNode = {
    index: number;
    value: number;
}

class MaxHeap {
    private heap: heapNode[] = [];

    constructor() {}

    insert(el: heapNode): void {
        this.heap.push(el);
        let current = this.heap.length - 1;
        let parent = ((current - 1) / 2) | 0;

        while (parent >= 0 && this.heap[parent].value < this.heap[current].value) {
            [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]]

            current = parent;
            parent = ((current - 1) / 2) | 0;
        }
    }

    getMax(): heapNode {
        return this.heap[0];
    }

    removeMax(): void {
        const lastEl = this.heap.pop();
        if (!lastEl || this.heap.length === 0) {
            return;
        }

        this.heap.splice(0, 1, lastEl);

        let current = 0;
        let left = current * 2 + 1;
        let right = (current + 1) * 2;
        while (true) {
            const leftEl = this.heap[left]?.value ?? -Infinity;
            const rightEl = this.heap[right]?.value ?? -Infinity;
            const currentEl = this.heap[current].value;
            const maxEl =  Math.max(currentEl, leftEl, rightEl);

            if (currentEl === maxEl) {
                break;
            }

            if (leftEl === maxEl) {
                [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]];
                current = left;
            }
            if (rightEl === maxEl) {
                [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]];
                current = right;
            }
            
            left = current * 2 + 1;
            right = (current + 1) * 2;
        }
    }

    clear(): void {
        this.heap = [];
    }

    print(): void {
        console.log(this.heap.map((x) => `(${x.value}, ${x.index})`));
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const heap = new MaxHeap();
        let l = 0;
        let r = 0;
        const results: number[] = [];

        for (r = 0; r < nums.length; r++) {
            if (nums[r] >= heap.getMax()?.value) {
                heap.clear();
            } 
            heap.insert({
                index: r,
                value: nums[r],
            })

            if (r - l + 1 < k) {
                continue;
            }

            results.push(heap.getMax().value);
            if (l === heap.getMax().index) {
                heap.removeMax();
            }

            l++;
        }

        return results;
    }
}
