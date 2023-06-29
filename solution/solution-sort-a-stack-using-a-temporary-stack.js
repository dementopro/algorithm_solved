

import Stack from 'common/stack';

/**
 * @param {Stack} input
 * @return {Stack}
 */
const sortStack = input => {
  const tmpStack = new Stack();

  while (!input.isEmpty()) {
    // pop out the first element
    const tmp = input.pop();

    // while temporary stack is not empty and
    // top of stack is greater than temp
    while (!tmpStack.isEmpty() && tmpStack.peek() > tmp) {
      // pop from temporary stack and
      // push it to the input stack
      input.push(tmpStack.pop());
    }

    // push temp in tempory of stack
    tmpStack.push(tmp);
  }

  return tmpStack;
};

export { sortStack };
