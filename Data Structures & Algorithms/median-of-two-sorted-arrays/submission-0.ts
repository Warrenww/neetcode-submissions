class Solution {
    getKth(nums1: number [], nums2: number[], k: number): number {
        if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }

        if (nums1.length === 0) {
            return nums2[k - 1];
        }

        if (k === 1) {
            return Math.min(nums1[0], nums2[0]);
        }

        let i = Math.min(nums1.length, k / 2 | 0);
        let j = Math.min(nums2.length, k / 2 | 0);

        if (nums1[i - 1] <= nums2[j - 1]) {
            return this.getKth(nums1.slice(i), nums2, k - i);
        } else {
            return this.getKth(nums1, nums2.slice(j), k - j);
        }
    }
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const total = nums1.length + nums2.length;

        if (total % 2) {
            return this.getKth(nums1, nums2, (total + 1) / 2)
        } else {
            return (this.getKth(nums1, nums2, total / 2) + this.getKth(nums1, nums2, total / 2 + 1)) / 2;
        }


    }
}
