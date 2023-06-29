

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  let ones = 0,
    twos = 0,
    threes = 0;

  for (let i = 0; i < nums.length; i++) {
    // twos holds the num that appears twice
    twos |= ones & nums[i];

    // ones holds the num that appears once
    ones ^= nums[i];

    // threes holds the num that appears three times
    threes = ones & twos;

    // if num[i] appears three times
    // doing this will clear ones and twos
    ones &= ~threes;
    twos &= ~threes;
  }

  return ones;
};

export { singleNumber };
