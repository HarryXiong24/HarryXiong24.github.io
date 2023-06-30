---
article: true
isOriginal: true
sticky: 801
star: 801
category: article
tag:
  - Sort
date: 2023-06-30
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

![Insertion Sort](https://cdn.staticaly.com/gh/xustudyxu/image-hosting1@master/20221119/insertionSort.lre9a3i98xs.gif)

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

![Bubble Sort](https://cdn.staticaly.com/gh/xustudyxu/image-hosting1@master/20221129/bubbleSort.60l6mgy53080.gif)

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

![Selection Sort](https://img-blog.csdnimg.cn/2020070819571632.gif)

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

![Counting Sort](https://pic4.zhimg.com/v2-3c7ddb59df2d21b287e42a7b908409cb_b.webp)

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

![Radix Sort](https://pic3.zhimg.com/v2-3a6f1e5059386523ed941f0d6c3a136e_b.webp)

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

![Bucket Sort](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f41ad1d7225c4900aa71fea2a0bd8d18~tplv-k3u1fbpfcp-zoom-1.image)

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

If we choose Counting Sort, Time Complexity will be O(W * (N + K)), Space Complexity will be O(W * O (N + K));

It is a stable sorting algorithm because we create new extra space to sort instead of in-place sorting.

## Continue writing...
