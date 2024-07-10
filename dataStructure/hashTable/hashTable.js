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
    const bucket = this.table[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }
}

const hashTable = new HashTable(10);

hashTable.set("ab", 1234);
hashTable.set("ba", 1234);

console.log("get", hashTable.get("ab"));
hashTable.delete("ab");
console.log("get", hashTable.get("ab"));
