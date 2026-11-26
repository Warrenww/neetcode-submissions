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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        if (!root) {
            return "";
        }

        let result = '(';
        result += root.val.toString();

        if (root.left) {
            result += `L${this.serialize(root.left)}`;
        }
        if (root.right) {
            result += `R${this.serialize(root.right)}`;
        }

        return result + ')';        
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        if (!data) {
            return null;
        }    

        let i = 0;
        let temp = '';
        let flag: 'L' | 'R' | null = null;
        const stack: TreeNode[] = [];
        let result: TreeNode | null = null

        while (i < data.length) {
            const char = data[i];

            switch (char) {
                case '(':
                    // create new tree and append to its parent in stack top
                    const tree = new TreeNode(0);
                    if (stack.at(-1) && flag) {
                        if (flag === 'L') {
                            stack.at(-1)!.left = tree;
                        } else {
                            stack.at(-1).right = tree;
                        }
                    }
                    stack.push(tree);
                    break;
                case ')':
                    // commit temp 
                    if (temp) {
                        stack.at(-1).val = parseInt(temp);
                        temp = '';
                    }
                    // set the result
                    if (stack.length === 1) {
                        result = stack[0];
                    }
                    //commit the tree and reset flag
                    stack.pop();
                    flag = null;
                    break;
                case 'L':
                    // commit the temp
                    if (temp) {
                        stack.at(-1).val = parseInt(temp);
                        temp = '';
                    }
                    // set the flag
                    flag = 'L';
                    break;
                case 'R':
                    // commit the temp
                    if (temp) {
                        stack.at(-1).val = parseInt(temp);
                        temp = '';
                    }
                    // set the flag
                    flag = 'R';
                    break;
                default:
                    temp += char;
            }

            i ++;
        }

        return result;
    }
}
