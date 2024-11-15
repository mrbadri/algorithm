# **Bubble Sort**

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

## **Time Complexity**

- **Worst Case**: \( O(n^2) \)  
  This occurs when the array is sorted in reverse order, requiring maximum comparisons and swaps.

- **Best Case**: \( O(n) \)  
  This happens when the array is already sorted, as no swaps are needed. The algorithm can detect this early and terminate.

- **Average Case**: \( O(n^2) \)  
  In general, for a randomly ordered array, Bubble Sort requires quadratic time due to repeated comparisons and swaps.

## **Space Complexity**

- **Space Used**: \( O(1) \)  
  Bubble Sort is an *in-place* sorting algorithm, meaning it requires no additional memory apart from the input array.

## **Algorithm Description**

1. Start from the beginning of the array.
2. Compare each pair of adjacent elements.
   - If the current element is greater than the next, swap them.
3. Continue this process for each pair in the array.
4. Repeat the above steps for all elements, reducing the range of comparisons after each pass, as the largest elements are placed in their correct positions.

## **Key Characteristics**

- **Stable Sorting Algorithm**:  
  Bubble Sort maintains the relative order of equal elements, making it a stable sorting algorithm.

- **Inefficient for Large Datasets**:  
  Due to its \( O(n^2) \) complexity, it is not suitable for large arrays.


