class LNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new LNode(value);

    newNode.next = this.top;
    this.top = newNode;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }

    this.top = this.top.next;
  }

  listItems() {
    const items = [];

    let currentNode = this.top;

    while (currentNode) {
      items.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return items;
  }
}

const ll = new LinkedList();

ll.push(11);
ll.push(22);
ll.push(33);
ll.push(44);

ll.peek();

ll.pop();
ll.pop();

console.log(ll.listItems());
