/**
 * Regular Expression Matching II
 *
 * Implement regular expression matching with support for '.', '+' and '*'.
 *
 * '.' Matches any single character.
 * '+' Matches one of the preceding element
 * '*' Matches zero or more of the preceding element.
 *
 * The matching should cover the entire input string (not partial).
 *
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Some examples:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 * isMatch("a", "a+") → true
 * isMatch("saaaa", "s+a*") → true
 * isMatch("saaaa", "s+b*") → false
 * isMatch("saaaab", "s+a*") → false
 * isMatch("saaaab", "s+a*b") → true
 */