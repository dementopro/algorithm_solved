

class DataNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
    this.frequentNode = null;
  }
}

class FrequentNode {
  constructor(frequent = -1) {
    this.frequent = frequent;
    this.dataList = new DataList();
  }
}

class DoublyLinkedList {
  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  insertHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  insertTail(node) {
    node.next = this.tail;
    node.prev = this.tail.prev;
    this.tail.prev.next = node;
    this.tail.prev = node;
  }

  insertBefore(node, newNode) {
    newNode.prev = node.prev;
    newNode.next = node;
    node.prev.next = newNode;
    node.prev = newNode;
  }

  isEmpty() {
    return this.head.next === this.tail;
  }

  getLast() {
    return this.tail.prev;
  }
}

class FrequentList extends DoublyLinkedList {
  constructor() {
    super();
    this.head = new FrequentNode();
    this.tail = new FrequentNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  promote(dataNode) {
    const frequentNode = dataNode.frequentNode;
    frequentNode.dataList.remove(dataNode);

    if (frequentNode.prev.frequent !== frequentNode.frequent + 1) {
      const newFrequentNode = new FrequentNode(frequentNode.frequent + 1);
      this.insertBefore(frequentNode, newFrequentNode);
    }

    frequentNode.prev.dataList.insertHead(dataNode);
    dataNode.frequentNode = frequentNode.prev;

    if (frequentNode.dataList.isEmpty()) {
      this.remove(frequentNode);
    }
  }

  removeDataNode(dataNode) {
    dataNode.frequentNode.dataList.remove(dataNode);
    if (dataNode.frequentNode.dataList.isEmpty()) {
      this.remove(dataNode.frequentNode);
    }
  }
}

class DataList extends DoublyLinkedList {
  constructor() {
    super();
    this.head = new DataNode();
    this.tail = new DataNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
}

/**
 * @param {number} capacity
 */
class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    // Hashmap
    this.map = new Map();
    // Frequent list
    this.frequentList = new FrequentList();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const dataNode = this.map.get(key);
    this.frequentList.promote(dataNode);
    return dataNode.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.capacity === 0) {
      return;
    }

    let dataNode;
    let frequentNode;

    if (this.map.has(key)) {
      dataNode = this.map.get(key);
      dataNode.value = value;
      this.frequentList.promote(dataNode);
      return;
    }

    if (this.map.size === this.capacity) {
      frequentNode = this.frequentList.getLast();
      dataNode = frequentNode.dataList.getLast();
      this.map.delete(dataNode.key);
      this.frequentList.removeDataNode(dataNode);
    }

    dataNode = new DataNode(key, value);
    this.map.set(key, dataNode);

    if (this.frequentList.getLast().frequent !== 0) {
      this.frequentList.insertTail(new FrequentNode(0));
    }

    this.frequentList.getLast().dataList.insertHead(dataNode);
    dataNode.frequentNode = this.frequentList.getLast();
  }
}

export { LFUCache };
