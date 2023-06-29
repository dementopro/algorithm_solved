

/**
 * Solution I
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit_I = prices => {
  if (!prices) {
    return 0;
  }

  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    profit += Math.max(prices[i] - prices[i - 1], 0);
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
  if (!prices) {
    return 0;
  }

  let cash = 0;
  let hold = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i]);
    hold = Math.max(hold, cash - prices[i]);
  }

  return cash;
};

export { maxProfit_I, maxProfit_II };
