class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    this.data.pop();
  }

  peek() {
    this.data[this.data.length - 1];
  }

  listItems() {
    return this.data;
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
