

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
  // cash: 手头的现金，即总的赚的金额，同时也是未持股时的现金额
  // hold: 手中有持股时的现金，即总金额减去手中股票的买入价
  let cash = 0;
  let hold = -prices[0];

  for (let price of prices) {
    // 如果卖出持股比未持股赚，则卖出
    cash = Math.max(cash, hold + price - fee);
    // hold 其实代表买入的最低价
    hold = Math.max(hold, cash - price);
  }

  return cash;
};
