class MyMap {
  constructor() {
    this._keys = [];
    this._values = [];
  }

  // Set a key-value pair
  set(key, value) {
    const index = this._keys.indexOf(key);
    if (index !== -1) {
      this._values[index] = value;
    } else {
      this._keys.push(key);
      this._values.push(value);
    }
  }

  // Get a value by key
  get(key) {
    const index = this._keys.indexOf(key);
    if (index !== -1) {
      return this._values[index];
    }
    return undefined;
  }

  // Check if a key exists
  has(key) {
    return this._keys.indexOf(key) !== -1;
  }

  // Delete a key-value pair
  delete(key) {
    const index = this._keys.indexOf(key);
    if (index !== -1) {
      this._keys.splice(index, 1);
      this._values.splice(index, 1);
      return true; // Return true if delete was successful
    }
    return false; // Return false if the key was not found
  }

  // Clear all key-value pairs
  clear() {
    this._keys = [];
    this._values = [];
  }

  // Get the number of key-value pairs
  get size() {
    return this._keys.length;
  }

  // Iterate through keys
  *keys() {
    for (const key of this._keys) {
      yield key;
    }
  }

  // Iterate through values
  *values() {
    for (const value of this._values) {
      yield value;
    }
  }

  // Iterate through entries
  *entries() {
    for (let i = 0; i < this._keys.length; i++) {
      yield [this._keys[i], this._values[i]];
    }
  }

  // Default iterator
  [Symbol.iterator]() {
    return this.entries();
  }
}

// Example usage
const map = new MyMap();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a")); // 1
console.log(map.has("b")); // true
console.log(map.size); // 3

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

map.delete("b");
console.log(map.size); // 2

map.clear();
console.log(map.size); // 0
