// console.log("lkhkjshkjhdskj");

console.log("Run Script ===>");

const swap = (arr, i, j) => {
  // const arr = [...arr2];

  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  // return arr;
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      const target = arr[j];
      const element = arr[j + 1];
      
      if (target > element) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
};

const arr = [1, 34, 2, 13, 89, 2];

console.log("=== Result ===");

console.log(bubbleSort(arr));

console.log("===> End Script");
