

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findFrequentTreeSum = root => {
  if (!root) {
    return [];
  }

  const mapSum = {};
  const mapCount = {};
  let max = 0;

  const helper = node => {
    if (!node) {
      return 0;
    }

    const left = helper(node.left);
    const right = helper(node.right);
    const sum = left + node.val + right;
    const count = ~~mapSum[sum] + 1;

    // Upate the max count
    max = Math.max(max, count);

    // Update the map that maps the sum: count
    mapSum[sum] = count;

    // Update the map that maps the count: a set of sum
    if (!mapCount[count]) {
      mapCount[count] = new Set();
    }
    mapCount[count].add(sum);

    return sum;
  };

  helper(root);

  // Finally return the the set of sum in the max count bucket
  return [...mapCount[max]];
};

export default findFrequentTreeSum;
