/**
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
 *
 * For example:
 * Given the below binary tree and sum = 22,
 *               5
 *              / \
 *             4   8
 *            /   / \
 *           11  13  4
 *          /  \    / \
 *         7    2  5   1
 * return
 * [
 *    [5,4,11,2],
 *    [5,8,4,5]
 * ]
 *
 * The idea is to perform a preorder traversal from the root node, once we found a leaf node and that leaf
 * node's value is equal to the current sum value, then we found a solution, put it into the final result array.
 *
 * The tricky part is to backtrack, think of it this way, let's say the sum is 8, and we are at node 4, see the tree below:
 *
 *        1
 *       / \
 *      2   3
 *     / \
 *    4   5
 * the current solution array is [1, 2, 4], as 4 is the leaf node, we are done with this path, since it's preorder,
 * the next node we need to scan is 5, and the solution list should look like [1, 2, 5] which represents the correct path,
 * that's why we need to remove 4 from the solution array, otherwise, the solution array will be [1, 2, 4, 5].
 */