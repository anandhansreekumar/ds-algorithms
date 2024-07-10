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

  printList() {
    const list = [];

    let currentNode = this.head;

    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return list;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = this._getNewNode(value);
    const leader = this.find(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
  }

  find(index) {
    if (index >= this.length) {
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
}

const linkedList = new LinkedList(10);

linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);

console.log(linkedList.printList());

linkedList.insert(2, 99);

console.log(linkedList.printList());
