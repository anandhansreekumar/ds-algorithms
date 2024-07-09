class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  get(key) {
    // O(1)
    // or
    // O(n) - collisions
    const hashedAddress = this._hash(key);

    const currentBucket = this.data[hashedAddress];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        const [itemKey, itemValue] = currentBucket[i];
        if (itemKey === key) {
          return itemValue;
        }
      }
    }

    return undefined;
  }

  set(key, value) {
    // O(1)
    const hashedAddress = this._hash(key);

    if (!this.data[hashedAddress]) {
      this.data[hashedAddress] = [];
    }

    this.data[hashedAddress].push([key, value]);

    return this.data;
  }

  keys() {
    // O(n)
    // or
    // O(n^2) - collisions
    const tableKeys = [];

    for (let i = 0; i < this.data.length; i++) {
      const currentBucket = this.data[i];

      if (currentBucket) {
        for (let j = 0; j < currentBucket.length; j++) {
          const [itemKey] = currentBucket[j];
          tableKeys.push(itemKey);
        }
      }
    }

    return tableKeys;
  }
}

const hashTable = new HashTable(50);

hashTable.set("grapes", 100);
hashTable.set("apples", 30);
hashTable.set("oranges", 70);

console.log(hashTable.get("grapes"));

console.log(hashTable.keys());
