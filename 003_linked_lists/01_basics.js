class LinkedList {
  constructor(value) {
    const newNode = this._getNewNode(value);

    this.head = newNode;
    this.tail = this.head;

    this.length = 1;
  }

  _getNewNode(value) {
    return {
      value,
      next: null,
    };
  }

  append(value) {
    const newNode = this._getNewNode(value);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  prepend(value) {
    const newNode = this._getNewNode(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  print() {
    const list = [];

    let currentNode = this.head;

    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return list;
  }

  insert(index, value) {
    // Invalid index
    if (index >= this.length || index < 0) {
      return this.append(value);
    }

    // Head
    if (index === 0) {
      return this.prepend(value);
    }

    // Other nodes
    const newNode = this._getNewNode(value);
    const leader = this.find(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
  }

  find(index) {
    // Invalid index
    if (index >= this.length || index < 0) {
      return;
    }

    let i = 0;
    let currentNode = this.head;

    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }

  remove(index) {
    // Invalid index
    if (index >= this.length || index < 0) {
      return;
    }

    // Head
    if (index === 0) {
      this.head = this.head.next;
      this.length--;

      return;
    }

    // Tail
    if (index === this.length - 1) {
      const leader = this.find(this.length - 2);
      leader.next = null;
      this.tail = leader;
      this.length--;

      return;
    }

    // Other nodes
    const leader = this.find(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
  }
}

const linkedList = new LinkedList(10);

linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);

console.log(linkedList.print());

linkedList.insert(2, 99);

console.log(linkedList.print());
