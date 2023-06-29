

/**
 * @param {String} s1
 * @param {String} s2
 * @return {String[]}
 */
const orderPrint = (s1, s2) => {
  if (!s1 && !s2) {
    return [];
  }

  if (!s1) {
    return [s2];
  }

  if (!s2) {
    return [s1];
  }

  const list1 = orderPrint(s1.substr(1), s2).map(s => s1[0] + s);
  const list2 = orderPrint(s1, s2.substr(1)).map(s => s2[0] + s);

  return [...list1, ...list2];
};

export { orderPrint };
