/**
 * Implement a trie with insert, search, and startsWith methods.
 *
 * Note:
 * You may assume that all inputs are consist of lowercase letters a-z.
 *
 * The following picture explains construction of trie using keys given in the example below,
 *
 *                        root
 *                     /   \    \
 *                     t   a     b
 *                     |   |     |
 *                     h   n     y
 *                     |   |  \  |
 *                     e   s  y  e
 *                  /  |   |
 *                  i  r   w
 *                  |  |   |
 *                  r  e   e
 *                         |
 *                         r
 *
 * Trie is an efficient information reTrieval data structure. Using Trie,
 * search complexities can be brought to optimal limit (key length).
 *
 * If we store keys in binary search tree, a well balanced BST will need time proportional to M * log N,
 * where M is maximum string length and N is number of keys in tree. Using Trie, we can search the key in O(M) time.
 *
 * However the penalty is on Trie storage requirements.
 */