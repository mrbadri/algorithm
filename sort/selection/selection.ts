console.log("Hi");

const selectionSort = (arr: number[]) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let lowest = Infinity;
    let index = 0;

    console.log("Arr=> ", arr, lowest);

    for (let j = 0; j < arr.length; j++) {
      console.log(arr[j] < lowest, arr[j], lowest);

      if (arr[j] < lowest) {
        lowest = arr[j];
        index = j;
      }
    }

    arr.splice(index, 1, Infinity);

    result.push(lowest);

    console.log(lowest, arr);
  }
  return result;
};

const a = [1, 2, 3, 4];
// console.log(a.splice(1, 1), a);

console.log(selectionSort([32, 12, 1, 321, 2]));
