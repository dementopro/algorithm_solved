

/**
 * Recursion
 *
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
  return count(coins, coins.length, amount);
};

const count = (coins, n, amount) => {
  // if amount is 0 then there is 1 solution: do not include any coin
  if (amount == 0) {
    return 1;
  }

  // if amount is less than 0 then no solution exists
  if (amount < 0) {
    return 0;
  }

  // if there are no coins and amount is greater than 0, then no solution exist
  if (n <= 0 && amount > 0) {
    return 0;
  }

  // count is sum of solutions (i) including coins[n-1] (ii) excluding coins[n-1]
  return count(coins, n - 1, amount) + count(coins, n, amount - coins[n - 1]);
};

/**
 * Dynamic Programming
 *
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change_DP = (amount, coins) => {
  const dp = Array(amount + 1).fill(0);

  // if amount is 0 then there is 1 solution: do not include any coin
  dp[0] = 1;

  // pick all coins one by one and update the dp[]
  // values after the index greater than or equal to the value of the picked coin
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[amount];
};

export { change, change_DP };
