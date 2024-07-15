class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
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
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this.listAllNodes();
  }

  appendNode(data) {
    const newNode = new ListNode(data);

    if (this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this.listAllNodes();
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
    const holdingPointer = leader.next;
    newNode.next = holdingPointer;
    leader.next = newNode;
    this.length++;

    return this.listAllNodes();
  }

  removeNodeAtIndex(index) {
    // Invalid
    if (index < 0 || index >= this.length) {
      return;
    }

    // 1 item
    if (this.length === 1) {
      return this.clear();
    }

    // Head
    if (index === 0) {
      this.head = this.head.next;
      this.length--;

      return this.listAllNodes();
    }

    // Tail
    if (index === this.length - 1) {
      const leader = this.findNodeByIndex(index - 1);
      leader.next = null;
      this.tail = leader;
      this.length--;

      return this.listAllNodes();
    }

    // Non-terminal indices
    const leader = this.findNodeByIndex(index - 1);
    leader.next = leader.next.next;
    this.length--;

    return this.listAllNodes();
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  reverse() {
    if (this.length === 1) {
      return this.listAllNodes();
    }

    let first = this.head;
    let second = first.next;

    while (second) {
      const holdingPointer = second.next;

      second.next = first;

      first = second;
      second = holdingPointer;
    }

    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    this.tail.next = null;

    return this.listAllNodes();
  }
}

const ll = new LinkedList();

ll.prependNode(1);
ll.prependNode(2);
ll.prependNode(3);

console.log(ll.listAllNodes());
ll.reverse();
console.log(ll.listAllNodes());
ll.prependNode(12345);
console.log(ll.listAllNodes());
ll.reverse();
console.log(ll.listAllNodes());
