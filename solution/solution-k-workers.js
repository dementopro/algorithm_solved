

import PriorityQueue from 'common/priority-queue';

/**
 * @param {number} k
 * @param {number[]} workers
 * @return {number}
 */
const kWorkers = (k, workers) => {
  if (k <= 0 || !workers || k > workers.length) {
    return 0;
  }

  // Step 1. sort workers by their price/quality ratio
  // Time complexity: nlogn
  sortWorkers(workers);

  // Step 2. start from the kth worker, calculate the current total cost and see if it's the minimal
  // in the meantime, if the kth worker's quality is less than the max quality among the k - 1 workers
  // replace the two workers and continue
  // Time complexity: (n - k) * (k + logk)
  let minPrice = Number.MAX_SAFE_INTEGER;

  // Initialize the max heap for helping us know the worker with max quality
  const queue = new PriorityQueue({ comparator: (a, b) => b.worker[1] - a.worker[1] });
  for (let i = 0; i < k - 1; i++) {
    queue.offer({ index: i, worker: workers[i] });
  }

  for (let i = k - 1; i < workers.length; i++) {
    const kthWorker = workers[i];
    const kthRatio = kthWorker[0] / kthWorker[1]; // price/quality

    // Sum up the k - 1 workers' prices with the new ratio
    let currentPrice = 0;
    for (let j = 0; j < k - 1; j++) {
      currentPrice += workers[j][1] * kthRatio;
    }
    // Plus the k-th worker
    currentPrice += kthWorker[0];
    // Calculate the minimum price
    minPrice = Math.min(minPrice, currentPrice);

    // if k-th worker's quality is less, replace the two
    if (queue.size() === 0) {
      queue.offer({ index: i, worker: kthWorker });
    } else {
      // Get the worker with the max quality
      const { index, worker } = queue.peek();

      if (worker[1] > kthWorker[1]) {
        queue.poll();
        queue.offer({ index: i, worker: kthWorker });
        // Replace the workers in the array
        swap(workers, index, i);
      }
    }
  }

  return minPrice;
};

/**
 * Sort the workers by their price/quality ratio
 * @param {number[]} workers
 */
const sortWorkers = workers => {
  workers.sort((a, b) => {
    const aRatio = a[0] / a[1];
    const bRatio = b[0] / b[1];

    if (aRatio === bRatio) {
      return a[0] - b[0];
    }

    return aRatio - bRatio;
  });
};

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

export { kWorkers };
