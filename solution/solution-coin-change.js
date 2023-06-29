

/**
 * Recursion
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  // base case
  if (amount == 0) {
    return 0;
  }

  // initialize result
  let res = Infinity;

  // try every coin that has smaller value than amount
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= amount) {
      const count = coinChange(coins, amount - coins[i]);
      if (count !== -1) {
        res = Math.min(res, count + 1);
      }
    }
  }

  return res === Infinity ? -1 : res;
};

/**
 * Dynamic Programming
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange_DP = (coins, amount) => {
  const dp = Array(amount + 1).fill(Infinity);

  // base case
  dp[0] = 0;

  // try every coin that has smaller value than amount
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        const count = dp[i - coins[j]];
        if (count !== Infinity) {
          dp[i] = Math.min(dp[i], count + 1);
        }
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

export { coinChange, coinChange_DP };
