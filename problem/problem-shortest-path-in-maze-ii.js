/**
 * Shortest Path in Maze II
 * 
 * Given a matrix represents a maze, X is the starting point, Y is the destination,
 * # is wall, you can walk in four directions: up, down, left, right.
 
 * Now you are allowed to break at most k walls, what is the minimum steps to get
 * to Y from X?
 * 
 * For example, we have the following maze, and you can break at most 3 walls.
 * 
 *     . X . # . .
 *     . # . . # .
 *     . # . . . .
 *     . # # . . .
 *     . Y . . . .
 *     . . . . . #
 * 
 * the minimum steps to reach Y from X is 4.
 * 
 * Normally we run BFS in a flat level, the idea is to run the BFS in a k-level matrix.
 * Each level is connected thru the wall, there are k levels, each time when we break a wall,
 * we go to the next level, and we can continue to perform BFS from that point. One challenging
 * part is that we need to use a 3-dimensional array to help us check whether a point is visited.
 * 
 * Time complexity: O(mnk)
 * note, if k is constant, then time complexity is O(mn)
 */