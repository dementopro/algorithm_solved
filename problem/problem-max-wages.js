/**
 * Max Wages
 *
 * You are a freelancer, there are n part-time jobs posted, you get paid by
 * completing the job, and you can choose many jobs to work on, the constraint
 * is you can not work on multiple jobs at the same time, you have to finish
 * a job then work on the next.
 *
 * Each job is represented as [start, end, wage].
 *
 * For example:
 * Input is [[0, 6, 8], [1, 4, 5], [3, 5, 1]]
 *
 * The jobs can be represented in the following graph:
 *
 * _____8_______
 *   ___5___
 *       __1__
 *
 * 0 1 2 3 4 5 6 7
 *
 * Your program should output 8. The maximum wages you can get should be $8,
 * that is only work on task 0.
 *
 * Now you are given n tasks, find out the max wages you can get.
 */