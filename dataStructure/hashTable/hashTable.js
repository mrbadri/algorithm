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

    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const point = this.table[index];
    console.log("point", point);
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }
}

const hashTable = new HashTable(10);

// console.log(hashTable.hash("ab"));
// console.log({ hashTable });
hashTable.set("ab", 1234);
hashTable.set("ba", 1234);
console.log(hashTable[hashTable.hash("ab")]);
hashTable.set("bac", 2111);
hashTable.set("bac", 2111);

console.log("get", hashTable.get("ab"));
// console.log({ hashTable });
