# **Selection Sort**

Selection Sort is a simple sorting algorithm that repeatedly selects the minimum element from the unsorted portion of the list and swaps it with the first unsorted element. This process is repeated until the list is sorted.

## **Time Complexity**

- **Worst Case**: \( O(n^2) \)  
  This occurs when the array is in reverse order, requiring maximum comparisons and swaps for each element.

- **Best Case**: \( O(n^2) \)  
  Even when the array is already sorted, Selection Sort performs the same number of comparisons, making its time complexity \( O(n^2) \) in the best case.

- **Average Case**: \( O(n^2) \)  
  For randomly ordered arrays, Selection Sort requires quadratic time due to repeated comparisons.

## **Space Complexity**

- **Space Used**: \( O(1) \)  
  Selection Sort is an *in-place* sorting algorithm, meaning it does not require additional memory apart from the input array.

## **Algorithm Description**

1. Start with the first element of the array.
2. Find the minimum element in the unsorted portion of the array.
3. Swap the minimum element with the first element of the unsorted portion.
4. Move the boundary of the sorted portion one step to the right.
5. Repeat the above steps until the entire array is sorted.

## **Key Characteristics**

- **In-Place Sorting Algorithm**:  
  Selection Sort does not require extra memory beyond the input array, making it memory-efficient.

- **Not Stable**:  
  It is not a stable sorting algorithm, meaning it may change the relative order of equal elements in the array.

- **Inefficient for Large Datasets**:  
  Due to its \( O(n^2) \) time complexity, it is not suitable for large datasets compared to more efficient algorithms like Merge Sort or Quick Sort.
