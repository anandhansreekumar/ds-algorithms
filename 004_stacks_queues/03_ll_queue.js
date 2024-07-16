class QNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let newNode = new QNode(value);

    if (this.isEmpty()) {
      this.rear = newNode;
      this.front = this.rear;

      return;
    }

    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {
    if (this.isEmpty()) {
      return;
    }

    this.front = this.front.next;

    if (this.isEmpty()) {
      this.rear = null;
    }
  }

  isEmpty() {
    return this.front === null;
  }

  listItems() {
    const items = [];

    let currentNode = this.front;

    while (currentNode) {
      items.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return items;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.dequeue();
queue.dequeue();
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.dequeue();

console.log(queue.listItems());
