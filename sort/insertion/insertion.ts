// const a = [1, 2, 3, 5];
// a.splice(3, 0, 4);

// console.log(a);

[2, 3, 5, 11, 1];

// [1 , 4 , 12] => [1 , 2 ,4 , 12]

const insertionSort = (arr: number[]) => {
  const sorted: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const target = arr[i]; // 2

    console.log({ i, target, sorted });

    if (sorted.length === 0) {
      sorted.push(target);
    } else {
      for (let j = sorted.length ; j >= 0; j--) {
        if (sorted[j] < target || j === 0) {
          sorted.splice(j + 1, 0, target);
          break;
        }
      }
    }
  }

  return sorted;
};

console.log(insertionSort([1, 43, 2, 4, 2, 10, 9, 0 , 10]));