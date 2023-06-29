

import Stack from 'common/stack';

/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = heights => {
  const n = heights.length;
  const stack = new Stack();

  let max = 0;

  for (let i = 0; i <= n; i++) {
    // If we finished all the elements OR the current element is less than top
    while (!stack.isEmpty() && (i === n || heights[i] < heights[stack.peek()])) {
      const height = heights[stack.pop()];
      const width = stack.isEmpty() ? i : i - 1 - stack.peek();

      max = Math.max(max, width * height);
    }

    stack.push(i);
  }

  return max;
};

export { largestRectangleArea };
