// Queue using stack
class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(x) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }

    this.s1.push(x);

    while (this.s2.length) {
      this.s1.push(this.s2.pop());
    }
  }

  deQueue() {
    return this.s1.pop();
  }
}

let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

console.log(q.s1);
