

/**
 * Solution I
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit_I = prices => {
  if (!prices || prices.length === 0) {
    return 0;
  }

  const n = prices.length;

  const left = Array(n).fill(0);
  const right = Array(n).fill(0);

  let profit = 0;

  for (let i = 1, min = prices[0]; i < n; i++) {
    left[i] = Math.max(left[i - 1], prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  for (let i = n - 2, max = prices[n - 1]; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], max - prices[i]);
    max = Math.max(max, prices[i]);

    profit = Math.max(profit, left[i] + right[i]);
  }

  return profit;
};

/**
 * Solution II
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit_II = prices => {
  if (!prices || prices.length === 0) {
    return 0;
  }

  let hold1 = Number.MIN_SAFE_INTEGER;
  let hold2 = Number.MIN_SAFE_INTEGER;
  let release1 = 0;
  let release2 = 0;

  // Assume we only have 0 money at first
  for (let i = 0; i < prices.length; i++) {
    // The maximum if we've just sold 2nd stock so far
    release2 = Math.max(release2, hold2 + prices[i]);
    // The maximum if we've just buy 2nd stock so far
    hold2 = Math.max(hold2, release1 - prices[i]);
    // The maximum if we've just sold 1nd stock so far
    release1 = Math.max(release1, hold1 + prices[i]);
    // The maximum if we've just buy 1st stock so far
    hold1 = Math.max(hold1, -prices[i]);
  }

  // Since release1 is initiated as 0, so release2 will always higher than release1
  return release2;
};

export { maxProfit_I, maxProfit_II };
