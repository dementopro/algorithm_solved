

import PriorityQueue from 'common/priority-queue';

/**
 * Solution I - Priority Queue
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest_I = (nums, k) => {
  const pq = new PriorityQueue();

  for (let num of nums) {
    pq.offer(num);

    if (pq.size() > k) {
      pq.poll();
    }
  }

  return pq.peek();
};

/**
 * Solution II - Quick Select
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  return quickSelect(nums, 0, nums.length - 1, k);
};

const quickSelect = (nums, lo, hi, k) => {
  // speed up the quick sort
  // randomly pick a pivot point
  const p = Math.floor(Math.random() * (hi - lo + 1)) + lo;
  swap(nums, p, hi);

  // use quick sort's idea
  // put nums that are <= pivot to the left
  // put nums that are  > pivot to the right
  for (var i = lo, j = lo; j < hi; j++) {
    if (nums[j] <= nums[hi]) {
      swap(nums, i++, j);
    }
  }
  swap(nums, i, j);

  // count the nums that are >= pivot
  const m = hi - i + 1;
  // pivot is the one!
  if (m === k) return nums[i];
  // pivot is too small, so it must be on the right
  if (m > k) return quickSelect(nums, i + 1, hi, k);
  // pivot is too big, so it must be on the left
  return quickSelect(nums, lo, i - 1, k - m);
};

const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);
