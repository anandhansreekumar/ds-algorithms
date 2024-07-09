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
    const hashedIndex = this._hash(key);

    return this.data[hashedIndex];
  }

  set(key, value) {
    const hashedIndex = this._hash(key);

    if (!this.data[hashedIndex]) {
      this.data[hashedIndex] = [];
      this.data[hashedIndex].push([key, value]);
    }
  }
}

const hashTable = new HashTable(50);

hashTable.set("grapes", 1000);

console.log(hashTable.get("grapes"));
