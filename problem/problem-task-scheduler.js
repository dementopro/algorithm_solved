/**
 * Task Scheduler
 *
 * Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters
 * represent different tasks.Tasks could be done without original order.
 * Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.
 *
 * However, there is a non-negative cooling interval n that means between two same tasks,
 * there must be at least n intervals that CPU are doing different tasks or just be idle.
 *
 * You need to return the least number of intervals the CPU will take to finish all the given tasks.
 *
 * Example 1:
 *
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 *
 * Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 *
 * Note:
 *
 * - The number of tasks is in the range [1, 10000].
 * - The integer n is in the range [0, 100].
 *
 * Solution:
 *
 * Example 1:
 *
 * AAAABBBEEFFGG 3
 *
 * step 1: A---A---A---A
 * step 2: AB--AB--AB--A
 * step 3: ABE-ABE-AB--A
 * step 4: ABEFABE-ABF-A
 * step 5: ABEFABEGABFGA
 *
 * Example 2:
 *
 * ACCCEEE 2
 *
 * step 1: CE-CE-CE
 * step 2: CEACE-CE
 */