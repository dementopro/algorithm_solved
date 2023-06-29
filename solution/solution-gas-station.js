

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
  let start = 0;
  let tank = 0;
  let total = 0;

  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];

    tank += diff;
    total += diff;

    // Cannot reach to the next station
    if (tank < 0) {
      // Reset the gas tank
      tank = 0;
      // Try from next position
      start = i + 1;
    }
  }

  return total >= 0 ? start : -1;
};

export { canCompleteCircuit };
