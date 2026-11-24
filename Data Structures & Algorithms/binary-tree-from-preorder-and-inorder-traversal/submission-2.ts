/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        const inorderMap = new Map<number, number>();
        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        const helper = (preStart: number, preEnd: number, inStart: number, inEnd: number): TreeNode | null => {
            if (preStart > preEnd) {
                return null;
            }

            const rootVal = preorder[preStart];
            const rootIdx = inorderMap.get(rootVal)!;
            const leftSubtreeSize = rootIdx - inStart;

            const left = helper(preStart + 1, preStart + leftSubtreeSize, inStart, rootIdx - 1);
            const right = helper(preStart + leftSubtreeSize + 1, preEnd, rootIdx + 1, inEnd);

            return new TreeNode(rootVal, left, right);
        };

        return helper(0, preorder.length - 1, 0, inorder.length - 1);
    }
}