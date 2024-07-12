const leanerSearch = (arr, target) => {
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};
