class LinkedList {
  constructor(value) {
    const newNode = this.getNewNode(value);

    this.head = newNode;
    this.tail = this.head;

    this.length = 1;
  }

  getNewNode(value) {
    return {
      value,
      next: null,
    };
  }

  append(value) {
    const newNode = this.getNewNode(value);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  prepend(value) {
    const newNode = this.getNewNode(value);

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
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1000);

console.log(linkedList);

console.log(linkedList.printList());
