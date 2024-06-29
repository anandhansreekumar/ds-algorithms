class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop() {
    const lastElementIndex = this.length - 1;

    if (lastElementIndex < 0) {
      return undefined;
    }

    const lastElement = this.data[lastElementIndex];
    delete this.data[lastElementIndex];
    this.length--;

    return lastElement;
  }

  shiftItems(index) {
    if (this.length === 0) {
      return;
    }

    const lastElementIndex = this.length - 1;

    for (let i = index; i <= lastElementIndex; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[lastElementIndex];
    this.length--;
  }

  delete(index) {
    const isInvalidIndex = index < 0 || index >= this.length;

    if (isInvalidIndex) {
      return undefined;
    }

    const element = this.data[index];
    delete this.data[index];

    this.shiftItems(index);

    return element;
  }
}

const newArray = new MyArray();

newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.delete(0);
newArray.push("are");
newArray.push("nice");
newArray.delete(1);

console.log(newArray);
