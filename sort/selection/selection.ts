const selectionSort = (arr: number[]) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // Swap
    if (i !== minIndex) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }

  return arr;
};

// [2, 1, 4, 10];
// [1, 2, 4, 10]
// [1, 30, 4, 10]
// [1, 4, 30, 10]

// const selectionSort = (arr: number[]) => {
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = Infinity;
//     let index = 0;

//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] < lowest) {
//         lowest = arr[j];
//         index = j;
//       }
//     }

//     // swap(true, arr, i, index);

//     const temp = arr[index];
//     arr[index] = arr[i];
//     arr[i] = temp;
//   }

//   return arr;
// };

// const a = [1, 2, 3, 4];
// // console.log(a.splice(1, 1), a);

console.log(selectionSort([32, 12, 1, 321, 2]));
