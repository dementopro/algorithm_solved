/**
 * Collatz Conjecture
 *
 * The Collatz Conjecture states that the sequence of positive integers generated by
 * repeated application of the Collatz function will always pass through 1.
 *
 * Collatz function f(n) :
 * 3n + 1 n odd
 * n/2 n even
 *
 * Examples:
 * 1
 * f(2) = 1
 * f(3) = 10 => f(10) = 5 => f(5) = 16 => f(16) = 8 => f(8) = 4 => f(4) = 2 => f( 2) = 1
 *
 * In these examples, the transformation was applied once and seven times, resp.
 *
 * Q1: Write a function that returns the number of transformations needed to first reach 1.
 *
 * Q2: Write a function that prints the input value and the number of transformations that
 * maximizes the latter in the range [1 ... N], were N is of the order of one million.
 *
 * findMax(3) -> "3 -> 7"
 */