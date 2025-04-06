class LinkedList {
  constructor() {
    this._head = new Node(null, null);
  }

  append(value) {
    const newNode = new Node(value, null);
    this.tail().nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.head().nextNode);
    this.head().nextNode = newNode;
  }

  size() {
    let counter = -1;
    this.iterateList((node) => {
      counter++;
    });
    return counter;
  }

  head() {
    return this._head;
  }

  tail() {
    if (!this.head()) return null;
    let temp = this.head();
    this.iterateList((node) => {
      temp = node;
    });
    return temp;
  }

  at(index) {
    let node = this.head();
    for (let i = -1; i < index; i++) {
      node = node.nextNode;
    }
    return node.data;
  }

  pop() {
    if (!this.head()) return null;
    let temp = this.head();
    this.iterateList((node, i, previousNode) => {
      temp = previousNode;
    });
    temp.nextNode = null;
  }

  contains(query) {
    let result = false;
    this.iterateList((node, i) => {
      if (node.data === query) result = true;
    });
    return result;
  }

  find(query) {
    let index = null;
    this.iterateList((node, i) => {
      if (node.data === query) index = i;
    });
    return index;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    this.iterateList((node, i, previousNode) => {
      if (index === i) {
        console.log(node, i);
        previousNode.nextNode = newNode;
        newNode.nextNode = node;
      }
      return;
    });
  }

  removeAt(index) {
    this.iterateList((node, i, previousNode) => {
      if (index === i) previousNode.nextNode = node.nextNode
      return;
    });
  }

  toString() {
    let product = "";

    this.iterateList((node, i) => {
      product = product + formatValue(node.data, i);
      node = node.nextNode;
    });
    return product + "null";

    function formatValue(value, index) {
      return `( [${index}] ${value} ) -> `;
    }
  }

  iterateList(callback) {
    let node = this.head().nextNode;
    let previousNode = null;
    let index = 0;
    while (node !== null) {
      callback(node, index, previousNode);
      previousNode = node;
      node = node.nextNode;
      index++;
    }
  }
}

class Node {
  constructor(data = null, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

export default LinkedList;