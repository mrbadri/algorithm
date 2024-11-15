interface Array<T> {
  bubbel: () => T[];
}

Array.prototype.bubbel = function <T>(this: T[]): T[] {
  if (this.length === 0) return this;

  const swap = (arr: T[], current: number, target: number) => {
    const temp = arr[current];
    arr[current] = arr[target];
    arr[target] = temp;

    return arr;
  };

  for (let i = 0; i < this.length; i++) {
    let swaped = false;
    
    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        swap(this, j, j + 1);
        swaped = true;
      }
    }

    if (!swaped) break;
  }

  return this;
};

console.log([101, -2, 30, 12, 1, 43].bubbel());
