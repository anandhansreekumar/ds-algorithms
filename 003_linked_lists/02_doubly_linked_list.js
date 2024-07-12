class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;

    this.length = 0;
  }

  listAllNodes() {
    const items = [];

    let currentNode = this.head;

    while (currentNode) {
      items.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return items;
  }

  prependNode(data) {
    const newNode = new ListNode(data);

    if (this.length) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  appendNode(data) {
    const newNode = new ListNode(data);

    if (this.length) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  findNodeByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let i = 0;
    let currentNode = this.head;

    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }

  addNodeAtIndex(index, value) {
    // Invalid
    if (index < 0 || index >= this.length) {
      return;
    }

    // Head
    if (index === 0) {
      return this.prependNode(value);
    }

    // Tail
    if (index === this.length - 1) {
      return this.appendNode(value);
    }

    const newNode = new ListNode(value);

    const leader = this.findNodeByIndex(index - 1);
    newNode.prev = leader;
    const follower = leader.next;
    newNode.next = follower;
    follower.prev = newNode;
    leader.next = newNode;

    this.length++;

    return this;
  }

  removeNodeAtIndex(index) {
    // Invalid
    if (index < 0 || index >= this.length) {
      return;
    }

    // Single item
    if (this.length === 1) {
      return this.clear();
    }

    // Head
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;

      this.length--;

      return this;
    }

    // Tail
    if (index === this.length - 1) {
      const leader = this.findNodeByIndex(index - 1);
      leader.next = null;
      this.tail = leader;

      this.length--;

      return this;
    }

    // Non-terminal indices
    const leader = this.findNodeByIndex(index - 1);
    const follower = leader.next;
    leader.next = follower.next;
    follower.next.prev = leader;

    this.length--;

    return this;
  }

  clear() {
    this.head = null;
    this.tail = null;

    this.length = 0;
  }
}

const ll = new DoublyLinkedList();

ll.prependNode(1);
ll.prependNode(2);
ll.prependNode(3);
