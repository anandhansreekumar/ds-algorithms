class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }

  getList() {
    let currentNode = this._head;

    const items = [];

    while (currentNode) {
      items.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return items;
  }

  append(value) {
    const newNode = new LinkedList(value);

    let currentNode = this._head;

    if (currentNode === null) {
      this._head = newNode;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this._size++;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);

    newNode.next = this._head;
    this._head = newNode;

    this._size++;
  }

  findNode(index) {
    if (index < 0 || index >= this._size) {
      throw new Error("Invalid index provided");
    }

    let currentNode = this._head;

    let i = 0;
    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }

  insertAt(index, value) {
    const newNode = new LinkedListNode(value);

    if (index < 0 || index >= this._size) {
      throw new Error("Invalid index provided");
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const prevNode = this.findNode(index - 1);

      const temp = prevNode.next;
      prevNode.next = newNode;
      newNode.next = temp;

      this._size++;
    }
  }

  reverse() {
    if (this._size === 0 || this._size === 1) {
      return;
    }

    let prevNode = this._head;
    let nextNode = prevNode.next;

    prevNode.next = null;

    while (nextNode) {
      const tempNode = nextNode.next;
      nextNode.next = prevNode;

      prevNode = nextNode;
      nextNode = tempNode;
    }

    this._head = prevNode;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  clear() {
    this._head = null;
    this._size = 0;
  }
}

const ll = new LinkedList();

ll.prepend(1);
ll.prepend(2);

console.log(ll.getList());

ll.reverse();

console.log(ll.getList());

ll.clear();

console.log(ll.getList());
