---
article: true
isOriginal: true
sticky: 801
star: 801
category: article
tag:
  - Sort
date: 2023-07-03
---

# Sort Algorithm

## Preface

In this chapter, I want to summarize the sort algorithm. As we all know, there are 10 common sort algorithms. And I don't want to do too much foreshadowing. Let's see a picture straight.

| **Sort Algorithm** | **Time Complexity** | **Space Complexity** | **Stability** | **Sorting Method** | **Best Case** | **Worst Case** |
|--------------------|---------------------|----------------------|---------------|--------------------|---------------|----------------|
| **Insertion Sort** | O(n^2)              | O(1)                 | Stable        | In-place           | O(n)          | O(n^2)         |
| **Bubble Sort**    | O(n^2)              | O(1)                 | Stable        | In-place           | O(n)          | O(n^2)         |
| **Selection Sort** | O(n^2)              | O(1)                 | Unstable      | In-place           | O(n^2)        | O(n^2)         |
| ****               |                     |                      |               |                    |               |                |
| **Counting Sort**  | O(n+k)              | O(k)                 | Stable        | Out-place          | O(n+k)        | O(n+k)         |
| **Radix Sort**     | O(w*(n+k))          | O(n+k)               | Stable        | Out-place          | O(w*(n+k))    | O(w*(n+k))     |
| **Bucket Sort**    | O(n+k)              | O(n+k)               | Stable        | Out-place          | O(n+k)        | O(n^2)         |
| ****               |                     |                      |               |                    |               |                |
| **Quick Sort**     | O(n*logn)           | O(n*logn)            | Unstable      | In-place           | O(n*logn)     | O(n^2)         |
| **Merge Sort**     | O(n*logn)           | O(n)                 | Unstable      | Out-place          | O(n*logn)     | O(n*logn)      |
| **Shell Sort**     | O(n*logn)           | O(1)                 | Unstable      | In-place           | O(n*logn)     | O(n*logn)      |
| ****               |                     |                      |               |                    |               |                |
| **Heap Sort**      | O(n*logn)           | O(1)                 | Unstable      | In-place           | O(n*logn)     | O(n*logn)      |

In the next sections, I will talk about them respectively.

## 10 Common Sort Algorithms

### Insertion Sort

This is an intuitive algorithm.

Given a collection of integers, you can sort the list by proceeding from the start of the list.

In every round, you will encounter an element that is out of order, and you can continuously swap places with previous elements until it is inserted in its correct relative location based on what you’ve processed thus far.

Here is the dynamic proceeding:

![Insertion Sort](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/sort-algorithm/insertion-sort.gif?raw=true)

Here is the code:

``` ts
function insertSort(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] >= current) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = current;
  }
}

// test
const array = [5, 3, 1, 2, 4];
insertSort(array);
console.log(array);
```

It is a stable algorithm because the sequence of other elements doesn't change during the period of each sorting round.

Obviously, the time complexity is O(n^2). And it's an in-place algorithm, so the space complexity is O(1).

### Bubble Sort

Bubble Sort, a really interesting name, is another common sort algorithm. And it is easy to remember because of its name.

Given a collection of integers.

In every round, each adjacent element, from beginning to end sequentially, will compare their value and swap if they are out of order.

The core idea of bubble sort is it will repeat this process until no more swaps are made in a single pass, which means the list is sorted.

Here is the dynamic proceeding:

![Bubble Sort](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/sort-algorithm/bubble-sort.gif?raw=true)

Here is the code:

```ts
function bubbleSort(nums: number[]): void {
  // i represent the number of round
  for (let i = nums.length - 1; i >= 0; i--) {
    // in each round, we can put a max number at the end
    // so the next round, this last index don't need to participate in sort
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
}

// test
const array = [10, 1, 3, 2, 9, 1, 5, 6];
bubbleSort(array);
console.log(array);
```

It is a stable algorithm because the sequence of other elements doesn't change during the period of each sorting round.

Obviously, the time complexity is O(n^2). And it's an in-place algorithm, so the space complexity is O(1).

### Selection Sort

It is another intuitive algorithm and it is easy to realize.

Given a collection of integers.

In every round, find the minimum element in that list and move it to the front of the list through a swap. That's it!

Here is the dynamic proceeding:

![Selection Sort](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/sort-algorithm/selection-sort.gif?raw=true)

Here is the code:

``` ts
function selectionSort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[min] > nums[j]) {
        min = j;
      }
    }
    const temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }
}

// test
const array = [10, 1, 3, 2, 9, 1, 5, 6];
selectionSort(array);
console.log(array);
```

It is not a stable algorithm because the sequence of other elements is broken during the period of each sorting round.

Obviously, the time complexity is O(n^2). And it's an in-place algorithm, so the space complexity is O(1).

### Counting Sort

These 3 sorting methods above are simple and intuitive. And now we start to learn some advanced sort algorithms.

Counting Sort is clever.

Consider we have a collection of integers. We can record the number of each integer. And then, we get a count array so that we can calculate the sorted index of this collection of integers. It's awesome!

Here is the dynamic proceeding:

![Counting Sort](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/sort-algorithm/counting-sort.gif?raw=true)

::: tip Hint
However, a key assumption of counting sort is that the minimum possible value in the array is 0 (no negative numbers) and the maximum value is some positive integer K.

So if your array includes some negative numbers, please remember to do a map to keep all numbers positive.

For example, an array with values between -5 and 10 can be mapped to values between 0 and 15, perform counting sort, and then remap to the original -5 to 10 range.

This is important!
:::

Here is the code:

``` ts
function countingSort(nums: number[]): number[] {
  // find out the min value, and do a map to keep all numbers are positive
  const min = Math.min(...nums);
  let mapper = min < 0 ? Math.abs(0 - min) : 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + mapper;
  }

  // counting sort beginning
  const max = Math.max(...nums);
  const countArray = new Array(max + 1).fill(0);

  // counting
  for (const item of nums) {
    countArray[item]++;
  }

  // calculate the deviate of sorted array's index
  let sum = 0;
  let temp = 0;
  for (let i = 0; i < countArray.length; i++) {
    sum = sum + temp;
    temp = countArray[i];
    countArray[i] = sum;
  }

  // get sorted array
  const sortArray = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    const index = countArray[nums[i]];
    const value = nums[i];
    sortArray[index] = value;
    countArray[nums[i]]++;
  }

  // remapping;
  for (let i = 0; i < sortArray.length; i++) {
    sortArray[i] = sortArray[i] - mapper;
  }

  return sortArray;
}

// test
const array = [2, 0, 2, 1, 1, 0, -3, -4];
const res = countingSort(array);
console.log(res);
```

It is a stable sorting algorithm. Because we make a new space and do not break the original array.

Time Complexity: O(N + K), where N is the size of the input array and K is the maximum value in the array.

Space Complexity: O(N + K), since we have to initialize a new array of size N and a counts array of size K+1.

O(N+K) is a linear time complexity, we may think it is perfect. But notice one thing: if the maximum number in the array is too big, we need to create a space as big as this number. And it is a waste of space. Like array [0, 1, 100001, 2].

So the Counting Sort is not as perfect as we thought.

Plus, Counting Sort also can’t easily handle strings where the alphabet size could be unconstrained.

### Radix Sort

We just discuss the limitation of Counting Sort above. Now We introduce an optimizing sort algorithm based on Counting Sort.

Radix Sort Algorithm has these basic steps:

1. Give a collection of integers, and find out the maximum number in the collection. Let it be W.
2. For each integer, loop through digits from 1 to W in right-to-left order(the least significant to the most significant digit). And in each group of digits, we use Count Sort to sort integers.

Also, remember that if your array includes some negative numbers, do a map to keep all numbers positive.

For example, an array with values between -5 and 10 can be mapped to values between 0 and 15, perform counting sort, and then remap to the original -5 to 10 range.

Here is the dynamic proceeding:

![Radix Sort](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/sort-algorithm/radix-sort.gif?raw=true)

Here is the code:

``` ts
function customizedCountingSort(nums: number[], digit: number, count_volume = 10): void {
  // we just need 0-9 space in counter volume
  const countArray = new Array(count_volume).fill(0);

  for (const item of nums) {
    const current_digit = Math.floor(item / digit) % 10;
    countArray[current_digit]++;
  }

  // calculate the deviation of index in sorted array
  let sum = 0;
  let temp = 0;
  for (let i = 0; i < countArray.length; i++) {
    sum = sum + temp;
    temp = countArray[i];
    countArray[i] = sum;
  }

  const sortedArray = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    // here is important and notice the mapping relationship between current_digit and nums[i]
    const current_digit = Math.floor(nums[i] / digit) % 10;
    const index = countArray[current_digit];
    const value = nums[i];
    sortedArray[index] = value;
    countArray[current_digit]++;
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = sortedArray[i];
  }
}

function radixSort(nums: number[]) {
  // mapping
  const min = Math.min(...nums);
  const mapper = min < 0 ? Math.abs(0 - min) : 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + mapper;
  }

  let digit = 1;
  const max = Math.max(...nums);
  // represents use Counting Sort in every digital number round
  while (digit <= max) {
    customizedCountingSort(nums, digit, 10);
    digit = digit * 10;
  }

  // remapping
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] - mapper;
  }
}

// test
const array = [831, 443, 256, 336, 736, 907, 3, 21323, 54];
radixSort(array);
console.log(array);
```

Let's analyze the complexity of Radix Sort.

Let W be the maximum digit length within the list of integers.
Let N be the size of the original array.
And because we use Counting Sort every round, let K be the size of the counting array(it is usually 10).

So the Time Complexity is O(W * (N + K));

Space Complexity is O(N + K)

It is a stable sorting algorithm because we create new extra space to sort instead of in-place sorting.

### Bucket Sort

Bucket Sort is another non-comparison-based sorting algorithm.

The steps of bucket sort can be broken down into four distinct parts.

Given an array A:

1. Create an initial array of K empty buckets
2. Distribute each element of the array into its respective bucket. A common way to map values to buckets is via the following function: floor(K * A[i] / max(A)).
3. Sort each bucket by using insertion sort or some other sorting algorithm.
4. Concatenate the sorted buckets in order to create the sorted list.

Also, remember that if your array includes some negative numbers, do a map to keep all numbers positive.

For example, an array with values between -5 and 10 can be mapped to values between 0 and 15, perform counting sort, and then remap to the original -5 to 10 range.

Here is the dynamic proceeding:

![Bucket Sort](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/sort-algorithm/bucket-sort.gif?raw=true)

Here is the code:

``` ts
function bucketSort(nums: number[], bucket_number: number): void {
  // mapping
  const min = Math.min(...nums);
  const mapper = min < 0 ? Math.abs(0 - min) : 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + mapper;
  }

  // create bucket
  const max = Math.max(...nums);
  const buckets: number[][] = new Array(bucket_number).fill(null).map(() => []);
  const bucketSize = Math.floor((max - min) / bucket_number);

  // put elements into buckets
  for (const item of nums) {
    const index = Math.floor((item - min) / bucketSize);

    if (index >= bucket_number) {
      // handle boundary condition
      buckets[bucket_number - 1].push(item);
    } else {
      buckets[index].push(item);
    }
  }

  // sort for elements in every bucket
  // and you can use any of the sorting methods
  for (const bucket of buckets) {
    bucket.sort((a, b) => a - b);
  }

  // Concatenate the sorted buckets in order to create the sorted list.
  const sortedArray = buckets.flat();

  // remapping
  for (let i = 0; i < nums.length; i++) {
    nums[i] = sortedArray[i] - mapper;
  }
}

// test
const array = [831, 443, 256, 336, 736, 907, 3, 21323, 54];
bucketSort(array, 5);
console.log(array);
```

Let's discuss the complexity of Bucket Sort.

Obviously, the complexity is based on the sort algorithm used in each bucket.

Let W be the number of buckets.

If we choose Insertion Sort, Time Complexity will be O(W * (n^2)), Space Complexity will be O(W);

If we choose Counting Sort, Time Complexity will be O(W *(N + K)), Space Complexity will be O(W* O (N + K));

It is a stable sorting algorithm because we create new extra space to sort instead of in-place sorting.

### Quick Sort

Quick Sort is a category of swap sort.

Quick sort uses the recursive method.

It selects an element in the array as the "pivot" element. And put the elements smaller than the pivot into one array and the elements larger than the pivot into the other array. Then, recursively sort the two arrays and combine them with the pivot to get the final sorted array.

Here is the dynamic proceeding:

![Quick Sort](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/sort-algorithm/quick-sort.gif?raw=true)

Here is the code:

``` ts
function quickSort(nums: number[]): number[] {
  // handle boundary
  if (nums.length <= 1) {
    return nums;
  }

  const pivot: number = Math.floor(nums.length / 2);
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === pivot) {
      continue;
    } else if (nums[i] < nums[pivot]) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), nums[pivot], ...quickSort(right)];
}

// test
const array = [2, 0, 2, 1, 1, 0, -3, -4];
const res = quickSort(array);
console.log(res);
```

And Quick Sort is easy to write via using recursion.

Its time complexity is O(n * log n), and its space complexity is O(log n).

It is not a stable sorting algorithm because we break the original order in every round.

### Merge Sort

Merge Sort is another sorting method that can use recursion to solve.

Merge sort is an efficient sorting algorithm based on the merge operation.

This algorithm is a typical application of Divide and Conquer. Combine the ordered subsequences to obtain a completely ordered sequence; that is, first make each subsequence in order, and then make the subsequence segments in order.

And given a collection of integers:

1. Divide a sequence of length n array into two subsequences of length n/2
2. Use merge sort for the two subsequences respectively
3. Merges two sorted subsequences into a final sorted sequence.

Here is the dynamic proceeding:

![Merge Sort](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/sort-algorithm/merge-sort.gif?raw=true)

Here is the code:

``` ts
function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  // merge ordered left array and right array together
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }
  return result.concat(left, right);
}

function mergeSort(nums: number[]): number[] {
  // handle boundary condition
  if (nums.length <= 1) {
    return nums;
  }

  // divide array into two parts
  const middle: number = Math.floor(nums.length / 2);
  const left: number[] = nums.slice(0, middle);
  const right: number[] = nums.slice(middle);

  // recursive
  return merge(mergeSort(left), mergeSort(right));
}

// test
const res = mergeSort([10, 1, 3, 2, 9, 1, 5, 6]);
console.log(res);
```

For Merge Sort, the time complexity is O(n * log n) and the space complexity is O(n).

It is a stable sorting algorithm.

### Shell Sort

Shell Sort is a category of Insertion Sort.

Firstly, we divide the entire record sequence to be sorted into several subsequences for direct insertion sorting respectively.

The specific algorithm description:

1. Choose an incremental sequence t1, t2, ..., tk, where ti>tj, tk=1;
2. According to the incremental sequence number k, sort the sequence k times;
3. For each sorting, according to the corresponding increment ti, the column to be sorted is divided into several subsequences of length m, and direct insertion sorting is performed on each sub-list respectively.
4. Only when the increment factor is 1, the entire sequence is treated as a table, and the length of the table is the length of the entire sequence.

Here is the dynamic proceeding:

![Shell Sort](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/sort-algorithm/shell-sort.gif?raw=true)

Here is the code:

``` ts
function shellSort(nums: number[]): number[] {
  let gap = Math.floor(nums.length / 2);

  while (gap > 0) {
    for (let i = gap; i < nums.length; i++) {
      const temp = nums[i];
      let j = i;
      while (j >= gap && nums[j - gap] > temp) {
        nums[j] = nums[j - gap];
        j -= gap;
      }
      nums[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return nums;
}

// test
const res = shellSort([10, 1, 3, 2, 9, 1, 5, 6]);
console.log(res);
```

For Shell Sort, the time complexity is O(n * log n) and the Space Complexity is O(1).

It is a not stable sorting algorithm.

### Heap Sort

The core concept of the Heap Sort involves constructing a heap from our input and repeatedly removing the minimum/maximum element to sort the array.

A naive approach to Heap Sort would start with creating a new array and adding elements one by one into the new array. But this sorting algorithm can also be performed in place, so no extra memory is used in terms of space complexity.

The key idea for in-place Heap Sort involves a balance of two central ideas:

1. Building a heap from an unsorted array through a “bottom-up heapification” process
2. Using the heap to sort the input array.

Heap Sort traditionally uses a max-heap to sort the array, although a min-heap also works, its implementation is a little less elegant.

Algorithm for “bottom-up heapification” of input into max-heap.

Given an input array, we can represent it as a binary tree.

If the parent node is stored at index i, the left child will be stored at index 2i + 1 and the right child at index 2i + 2 (assuming the indexing starts at 0).

To convert it to a max-heap, we proceed with the following steps:

1. Start from the end of the array (bottom of the binary tree).
2. There are two cases for a node
    * It is greater than its left child and right child (if any).
        * In this case, proceed to the next node (one index before the current array index)
    * There exists a child node that is greater than the current node
        * In this case, swap the current node with the child node. This fixes a violation of the max-heap property
        * Repeat the process with the node until the max-heap property is no longer violated
3. Repeat step 2 on every node in the binary tree from bottom-up.

A key property of this method is that by processing the nodes from the bottom-up, once we are at a specific node in our heap, it is guaranteed that all child nodes are also heaps.

Once we have “heapified” the input, we can begin using the max-heap to sort the list. To do so, we will:

1. Take the maximum element at index 0 (we know this is the maximum element because of the max-heap property) and swap it with the last element in the array (this element's proper place).
2. We now have sorted an element (the last element). We can now ignore this element and decrease heap size by 1, thereby omitting the max element from the heap while keeping it in the array.
3. Treat the remaining elements as a new heap. There are two cases:
    * The root element violates the max-heap property
        * Sink this node into the heap until it no longer violates the max-heap property. Here the concept of "sinking" a node refers to swapping the node with one its children until the heap property is no longer violated.
    * The root element does not violate the max-heap property
        * Proceed to step (4)
4. Repeat step 1 on the remaining unsorted elements. Continue until all elements are sorted.

Here is the dynamic proceeding:

![Heap Sort](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/sort-algorithm/heap-sort.gif?raw=true)

Here is the code:

``` ts
function heapify(nums: number[], length: number, current_index: number) {
  // represents the largest index of node value in this round
  let largest_index = current_index;
  // the index of left child value
  const left = 2 * current_index + 1;
  // the index of right child value
  const right = 2 * current_index + 2;

  // find the largest index of node value in this round
  if (left < length && nums[left] > nums[largest_index]) {
    largest_index = left;
  }
  if (right < length && nums[right] > nums[largest_index]) {
    largest_index = right;
  }

  // if the maximum index is not the root node, swap the root node and maximum node, and recursively call the heap function
  if (largest_index !== current_index) {
    const temp = nums[current_index];
    nums[current_index] = nums[largest_index];
    nums[largest_index] = temp;
    heapify(nums, length, largest_index);
  }
}

function heapSort(nums: number[]) {
  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    heapify(nums, nums.length, i);
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    const temp = nums[i];
    nums[i] = nums[0];
    nums[0] = temp;
    heapify(nums, i, 0);
  }
}

// test
const array = [2, 0, 2, 1, 1, 0, -3, -4];
heapSort(array);
console.log(array);
```

The key aspect that makes Heap Sort better than selection sort is the running time of the algorithm is now O(NlogN).

This is a result of the fact that removing the max element from the heap, which is the central operation in the sort is an O(log N) operation, which has to be performed in the worst case N−1 times.

Note that in-place heapification is an O(N) operation, so it has no impact on the worst-case time complexity of Heap Sort.

In terms of space complexity, since we are treating the input array as a heap and creating no extra space (all operations are in-place), Heap Sort is  O(1).

And it is not a stable sort.

## Summary

Now, we have introduced the 10 common sort methods. Let's make a summary.

First, these 10 common sort methods can be divided into two categories: Comparable Sort and Non-comparable Sort.

1. Comparable Sort
    * Insertion Sort
        * Direct Insertion Sort
        * Shell Sort
    * Swap Sort
        * Bubble Sort
        * Quick Sort
    * Selection Sort
        * Direct Selection Sort
        * Heap Sort
    * Merge Sort

2. Non-comparable Sort
    * Counting Sort
    * Radix Sort
    * Bucket Sort

Among them, Heap Sort and Merge Sort have the best average efficiency. And Non-comparable Sort performs well in the case of relatively small open spaces though it has linear time complexity. And Direct Insertion Sort, Direct Selection Sort, Bubble Sort are more intuitive in human thought.
