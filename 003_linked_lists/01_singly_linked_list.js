class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  listAllNodes() {
    const items = [];

    let currentNode = this.head;

    while (currentNode) {
      items.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return items;
  }

  prependNode(data) {
    const newNode = new ListNode(data);

    if (this.length) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this.listAllNodes();
  }

  appendNode(data) {
    const newNode = new ListNode(data);

    if (this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this.listAllNodes();
  }

  findNodeByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let i = 0;
    let currentNode = this.head;

    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }

  addNodeAtIndex(index, value) {
    // Invalid
    if (index < 0 || index >= this.length) {
      return;
    }

    // Head
    if (index === 0) {
      return this.prependNode(value);
    }

    // Tail
    if (index === this.length - 1) {
      return this.appendNode(value);
    }

    const newNode = new ListNode(value);

    const leader = this.findNodeByIndex(index - 1);
    const holdingPointer = leader.next;
    newNode.next = holdingPointer;
    leader.next = newNode;
    this.length++;

    return this.listAllNodes();
  }

  removeNodeAtIndex(index) {
    // Invalid
    if (index < 0 || index >= this.length) {
      return;
    }

    // 1 item
    if (this.length === 1) {
      return this.clear();
    }

    // Head
    if (index === 0) {
      this.head = this.head.next;
      this.length--;

      return this.listAllNodes();
    }

    // Tail
    if (index === this.length - 1) {
      const leader = this.findNodeByIndex(index - 1);
      leader.next = null;
      this.tail = leader;
      this.length--;

      return this.listAllNodes();
    }

    // Non-terminal indices
    const leader = this.findNodeByIndex(index - 1);
    leader.next = leader.next.next;
    this.length--;

    return this.listAllNodes();
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  reverse() {
    if (this.length === 1) {
      return this.listAllNodes();
    }

    let first = this.head;
    let second = first.next;

    while (second) {
      const holdingPointer = second.next;

      second.next = first;

      first = second;
      second = holdingPointer;
    }

    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    this.tail.next = null;

    return this.listAllNodes();
  }
}

/**
 * Tests
 */

const assertEquals = (actual, expected, message) => {
  const actualString = JSON.stringify(actual);
  const expectedString = JSON.stringify(expected);

  if (actualString !== expectedString) {
    console.error(`Test failed: ${message}`);
    console.error(`Expected: ${expectedString}`);
    console.error(`Actual: ${actualString}`);
  } else {
    console.log(`Test passed: ${message}`);
  }
};

// Test LinkedList class
(function () {
  const ll = new LinkedList();

  // Test prependNode
  assertEquals(ll.prependNode(1), [1], "prependNode should add 1 to the list");
  assertEquals(
    ll.prependNode(2),
    [2, 1],
    "prependNode should add 2 to the beginning of the list"
  );
  assertEquals(
    ll.prependNode(3),
    [3, 2, 1],
    "prependNode should add 3 to the beginning of the list"
  );

  // Test listAllNodes
  assertEquals(
    ll.listAllNodes(),
    [3, 2, 1],
    "listAllNodes should return [3, 2, 1]"
  );

  // Test appendNode
  assertEquals(
    ll.appendNode(4),
    [3, 2, 1, 4],
    "appendNode should add 4 to the end of the list"
  );

  // Test findNodeByIndex
  assertEquals(
    ll.findNodeByIndex(0).data,
    3,
    "findNodeByIndex(0) should return node with data 3"
  );
  assertEquals(
    ll.findNodeByIndex(2).data,
    1,
    "findNodeByIndex(2) should return node with data 1"
  );
  assertEquals(
    ll.findNodeByIndex(4),
    null,
    "findNodeByIndex(4) should return null"
  );

  // Test addNodeAtIndex
  assertEquals(
    ll.addNodeAtIndex(2, 5),
    [3, 2, 5, 1, 4],
    "addNodeAtIndex should add 5 at index 2"
  );

  // Test removeNodeAtIndex
  assertEquals(
    ll.removeNodeAtIndex(2),
    [3, 2, 1, 4],
    "removeNodeAtIndex should remove node at index 2"
  );

  // Test reverse
  assertEquals(ll.reverse(), [4, 1, 2, 3], "reverse should reverse the list");

  // Test clear
  ll.clear();
  assertEquals(ll.listAllNodes(), [], "clear should empty the list");

  // Test edge cases
  ll.appendNode(1);
  assertEquals(
    ll.reverse(),
    [1],
    "reverse on a single-node list should return the same list"
  );

  ll.clear();
  assertEquals(
    ll.listAllNodes(),
    [],
    "listAllNodes should return [] for an empty list"
  );
  assertEquals(
    ll.removeNodeAtIndex(0),
    undefined,
    "removeNodeAtIndex on empty list should return undefined"
  );
  assertEquals(
    ll.addNodeAtIndex(0, 1),
    undefined,
    "addNodeAtIndex on empty list should return undefined"
  );
  assertEquals(
    ll.findNodeByIndex(0),
    null,
    "findNodeByIndex on empty list should return null"
  );

  console.log("--All tests completed --");
})();
