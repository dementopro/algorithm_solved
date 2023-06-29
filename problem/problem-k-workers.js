/**
 * K Workers
 *
 * There are n workers, each worker can finish the work with certain quality, and each worker asks for different price.
 * Given these n workers, you are asked to select k (0 < k <= n) workers, and make sure the total price is minimal.
 *
 * However, there is a rule, whenever you add a new worker, if that worker's price/quality ratio is higher than workers that
 * have been selected, those selected workers won't be happy and they will ask you for higher price, and the way to calculate
 * the new price is: new price = original quality x new worker's price/quality ratio.
 *
 * For example, let's say you have selected worker A, A's price is $5, his quality is 20, now you added worker B, B's price is
 * $10, and his quality is 10, since B's price/quality ratio is higher than A's price/quality ratio, A is asking for new
 * price, and this time, A will ask for 20 x $10/10 = $20, now hiring both A and B will cost you $20 + $10 = $30.
 *
 * The input of the problem are: k, workers[[price, quality]], and the output of the problem should be the minimal total price.
 *
 * Example 1:
 * workers = [[10, 20], [20, 10], [5, 10], [4, 8]]
 * k = 2
 *
 * You should return 9
 * Explanation: the two workers you should select is [4, 8], [5, 10], their total price is 9
 *
 * Example 2:
 * workers = [[4, 16], [5, 10], [1, 1]]
 * k = 2
 * You should return 11
 * Explanation: the two workers you should select is [5, 10], [1, 1]
 *
 * Example 3:
 * workers = [[4, 16], [5, 10], [6, 6]]
 * k = 2
 * You should return 13
 * Explanation: the two workers you should select is [4, 16], [5, 10]
 */