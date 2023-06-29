/**
 * Binary Indexed Tree
 *
 * Example:
 *
 * nums = [3, 2, -1, 6, 5, 4, -3, 3, 7, 2, 3]
 *
 * The index tree looks like this:
 *
 *            0
 *      ______|_______
 *     /    /   \     \
 *    1    2     4     8
 *         |     | \   | \
 *         3     5  6  9  10
 *                  |      |
 *                  7      11
 *
 * When calculating the sum, traverse all its parent's sum (index -= index & -index)
 * When updating the sum, traverse all the index to that of parent (index += index & -index)
 */