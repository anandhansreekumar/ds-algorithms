// 10 -> 5 -> 16
// let linkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class LinkedList {
  constructor(value) {
    this.head = this.createNode(value, null);
    this.tail = this.head;
    this.length = 1;
  }

  createNode(value, nextNode) {
    return {
      value,
      next: nextNode,
    };
  }

  append(value) {
    const newNode = this.createNode(value, null);
    this.tail = newNode;
    this.head.next = this.tail;
    this.length++;
  }

  prepend(value) {
    const newNode = this.createNode(value, this.head);
    this.head = newNode;
    this.length++;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1000);

console.log(linkedList);
