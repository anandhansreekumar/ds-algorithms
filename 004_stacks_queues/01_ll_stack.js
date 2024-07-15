class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new ListNode(value);

    if (this.top) {
      newNode.next = this.top;
      this.top = newNode;
    } else {
      this.top = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.top) {
      return;
    }

    this.top = this.top.next;
    this.length--;

    return this;
  }

  isEmpty() {
    return !!this.top;
  }

  listItems() {
    const items = [];

    let currentNode = this.top;

    while (currentNode) {
      items.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return items;
  }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.listItems());
myStack.pop();
myStack.pop();
console.log(myStack.listItems());
