/**
 * Quick Sort II
 *
 * Hoare's partition scheme
 * Hoare's Partition Scheme works by initializing two indexes that start at two ends,
 * the two indexes move toward each other until an inversion is (A smaller value on
 * left side and greater value on right side) found. When an inversion is found, two
 * values are swapped and process is repeated.
 *
 * Hoare's scheme is more efficient than Lomuto’s partition scheme because it does
 * three times fewer swaps on average, and it creates efficient partitions even when
 * all values are equal.
 */