class HashTable {
  constructor(size) {
    this.size = size;
    this.table = Array(size);
    for (let i = 0; i < size; i++) {
      this.table[i] = [];
    }
  }

  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }

    return {
      hash,
      index: hash % this.size,
    };
  }
}

const hasTable = new HashTable(10);

console.log(hasTable.hash("ab"));
console.log(hasTable.hash("ba"));
