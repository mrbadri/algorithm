const swap = <T>(
  refrence: boolean,
  arr: T[],
  currentIndex: number,
  targetIndex: number
) => {
  const tempArr = refrence ? arr : [...arr];

  const tempElement = tempArr[currentIndex];
  tempArr[currentIndex] = tempArr[targetIndex];
  tempArr[targetIndex] = tempElement;

  return tempArr;
};

const bubbelSort = <T extends number>(arr: T[]) => {
  let result = [...arr];
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      const target = arr[j];
      const element = arr[j + 1];

      if (target > element) {
        swap(true, result, j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  console.log("result", result);

  return result;
};

const arr: number[] = [32, 112, 1, 4321, 21, 5];

const result = bubbelSort(arr);

// Step 1: Extend the Array interface
// interface TestB<T> {
//   sum(): T;
// }

// interface TestB<T> {
//     test2(): number;
//   }

// const a: TestB["test2"] = {

// }

// // Step 2: Add the method to the Array prototype
// Array.prototype.sum = function (): number {
//   return this.reduce((total, num) => total + num, 0);
// };
