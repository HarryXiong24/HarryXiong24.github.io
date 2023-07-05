---
article: true
isOriginal: true
sticky: 802
star: 802
category: article
tag:
  - Stack
  - Queue
  - DFS
  - BFS
date: 2023-07-06
---

# Stack and Queue & DFS and BFS

## Preface

In this chapter, we will discuss about DFS(Depth-first Search) and BFS(Breadth-first Search).

They are two important concepts in the algorithm and they are widely used.

When it comes to DFS(Depth-first Search) and BFS(Breadth-first Search), Stack and Queue will inevitably be mentioned.

Because these two data structures can be applied to realize DFS and BFS.

Maybe you have already really familiar with them, but I still want to introduce them simply.

Let's begin!

## Stack and Queue

### Stack

The Stack is a data structure that follows the last-in-first-out principle.

Like this dynamic picture:

![Stack](https://cdn.nlark.com/yuque/0/2020/gif/92791/1600683976688-66c3b99f-8a77-4313-866a-8adfa48c0a77.gif#align=left&display=inline&height=576&margin=%5Bobject%20Object%5D&name=stack-4.gif&originHeight=576&originWidth=1090&size=96969&status=done&style=none&width=1090)

It's easy to understand.

And we can use more than one method to build a stack such as an array and a linked list. Here we use an array to give an example:

``` ts
class Stack<T> {
  public items: T[];

  constructor() {
    this.items = [];
  }

  // push
  push(value: T): void {
    this.items.push(value);
  }

  // pop
  pop(): T {
    return this.items.pop()!;
  }

  // return the top element of the stack
  peek(): T | null {
    if (this.isEmpty() === true) {
      return null;
    } else {
      return this.items[this.items.length - 1];
    }
  }

  // determine whether the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // return the size of the stack
  size(): number {
    return this.items.length;
  }

  // clear this stack
  clear(): void {
    this.items = [];
    this.items.length = 0;
  }
}

// test
const stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.peek());
stack.push('1');
stack.push('5');
console.log(stack.peek());
console.log(stack.size());
```

### Queue

The Queue is a data structure that follows the first-in-first-out principle.

Like this dynamic picture:

![Queue](https://img-blog.csdnimg.cn/5f74dee9f61e437799d0add897e39ea3.gif)

It's easy to understand.

And we can use more than one method to build a stack such as an array and a linked list. Here we use an array to give an example:

```ts
class Queue<T> {
  public head: number;
  public tail: number;
  public items: Map<number, T>;

  constructor() {
    this.head = 0;
    this.tail = 0;
    this.items = new Map<number, T>();
  }

  // en queue
  in(value: T): void {
    this.items.set(this.tail, value);
    this.tail++;
  }

  // out queue
  out(): T | null {
    if (this.isEmpty() === false) {
      const value: T = this.items.get(this.head)!;
      this.items.delete(this.head);
      this.head++;
      return value;
    } else {
      return null;
    }
  }

  // check the head element of the queue
  peek(): T | null {
    if (this.isEmpty() === false) {
      return this.items.get(this.head)!;
    } else {
      return null;
    }
  }

  // determine whether the queue is empty
  isEmpty(): boolean {
    return this.items.size === 0;
    // or
    // return this.head === this.tail;
  }

  // return the size of the queue
  size(): number {
    return this.items.size;
  }

  // clear this queue
  clear(): void {
    this.head = 0;
    this.tail = 0;
    this.items = new Map<number, T>();
  }
}

// test
const queue = new Queue<number>();
console.log(queue.isEmpty());
queue.in(2);
console.log(queue.isEmpty());
queue.in(5);
queue.in(8);
console.log(queue.size());
console.log(queue.peek());
console.log(queue.out());
console.log(queue.peek());
console.log(queue.size());
```

### Circular Queue

In the previous section, we have provided a straightforward but inefficient implementation of Queue.

A more efficient way is to use a circular queue. Specifically, we may use a fixed-size array and two pointers to indicate the starting position and the ending position. And the goal is to reuse the wasted storage we mentioned previously.

![Circular Queue](https://img-blog.csdnimg.cn/20191216214045423.gif)

Here is the implementation:

``` ts
class MyCircularQueue {
  size: number;
  head: number = 0;
  tail: number = -1;
  queue = new Map<number, number>();

  constructor(k: number) {
    this.size = k;
    this.queue = new Map<number, number>();
    this.head = 0;
    this.tail = -1;
  }

  // Inserts an element into the circular queue. Return true if the operation is successful.
  enQueue(value: number): boolean {
    if ((this.tail + 1) % this.size === this.head && this.queue.has(this.head)) {
      return false;
    }
    this.tail = (this.tail + 1) % this.size;
    this.queue.set(this.tail, value);
    return true;
  }

  // Deletes an element from the circular queue. Return true if the operation is successful.
  deQueue(): boolean {
    if (!this.queue.has(this.head)) {
      return false;
    }
    this.queue.delete(this.head);
    this.head = (this.head + 1) % this.size;
    return true;
  }

  // Gets the front item from the queue. If the queue is empty, return -1.
  Front(): number {
    if (this.queue.has(this.head)) {
      return this.queue.get(this.head)!;
    } else {
      return -1;
    }
  }

  // Gets the last item from the queue. If the queue is empty, return -1.
  Rear(): number {
    if (this.queue.has(this.tail)) {
      return this.queue.get(this.tail)!;
    } else {
      return -1;
    }
  }

  // Checks whether the circular queue is empty or not.
  isEmpty(): boolean {
    if (!this.queue.has(this.head)) {
      return true;
    } else {
      return false;
    }
  }

  // Checks whether the circular queue is full or not.
  isFull(): boolean {
    if ((this.tail + 1) % this.size === this.head && this.queue.has(this.head)) {
      return true;
    } else {
      return false;
    }
  }
}

const obj = new MyCircularQueue(3);
const param_1 = obj.enQueue(1);
const param_2 = obj.enQueue(2);
const param_3 = obj.enQueue(3);
const param_4 = obj.enQueue(4);
console.log(param_4);
console.log(obj);
const param_5 = obj.Rear();
console.log(param_5);
const param_6 = obj.isFull();
console.log(param_6);
const param_7 = obj.deQueue();
console.log(obj);
const param_8 = obj.enQueue(4);
console.log(obj);
const param_9 = obj.Rear();
console.log(param_9);
```

### Interchangeability of Stack and Queue

We can use two stacks to realize the Queue:

``` ts
class MyQueue {
  inStack: number[] = [];
  outStack: number[] = [];

  constructor() {}

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    if (this.outStack.length > 0) {
      return this.outStack.pop()!;
    } else {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop()!);
      }
      return this.outStack.pop()!;
    }
  }

  // Returns the element at the front of the queue.
  peek(): number {
    if (this.outStack.length > 0) {
      return this.outStack[this.outStack.length - 1];
    } else {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop()!);
      }
      return this.outStack[this.outStack.length - 1];
    }
  }

  empty(): boolean {
    if (this.inStack.length === 0 && this.outStack.length === 0) {
      return true;
    }
    return false;
  }
}
```

Also, we can use two queues to realize the Stack:

``` ts
export class MyStack {
  queue: number[] = [];
  transit_queue: number[] = [];

  constructor() {
    this.queue = [];
    this.transit_queue = [];
  }

  push(x: number): void {
    this.transit_queue.push(x);
    while (this.queue.length) {
      const temp = this.queue.shift()!;
      this.transit_queue.push(temp);
    }
    this.queue = this.transit_queue;
    this.transit_queue = [];
  }

  pop(): number {
    return this.queue.shift()!;
  }

  top(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
```

## DFS and BFS

### BFS

Breadth-first search (BFS) is an algorithm to traverse or search in data structures like a tree or a graph.

As we mentioned, we can use BFS to do level-order traversal in a tree.

We can also use BFS to traverse a graph. For example, we can use BFS to find a path, especially the shortest path, from a start node to a target node.

We can use BFS, in even more abstract scenarios, to traverse all the possible statuses. 

Here is the proceeding of BFS:

![BFS](https://zinglix.xyz/img/in-post/DFS&BFS/BFS-Ex.gif)

In the first round, we process the root node. In the second round, we process the nodes next to the root node; in the third round, we process the nodes which are two steps from the root node; so on and so forth. Similar to the tree's level-order traversal, the nodes closer to the root node will be traversed earlier.

And we usually apply Queue to realize BFS:

``` ts
interface Node {
  value: any;
  neighbors: Node[];
}

function BFS(root: Node, target: Node): void {
  if (!root) {
    return;
  }
  // store all nodes which are waiting to be processed
  const queue: Node[] = [root];
  let layer = 0;
  // BFS
  while (queue.length) {
    // iterate the nodes which are already in the queue
    const size = queue.length;
    for (let i = 0; i < size; ++i) {
      const current = queue[0];
      console.log(current.value);
      for (const next of current.neighbors) {
        queue.push(next);
      }
      queue.shift();
    }
    layer = layer + 1;
  }
}
```

### DFS

Similar to BFS, depth-first search (DFS) is another important algorithm to traverse/search in a tree/graph. And also it can be used in more abstract scenarios.

As mentioned in tree traversal, we can use DFS to do pre-order, in-order and post-order traversal.

There is a common feature among these three traversal orders: we never trace back unless we reach the deepest node.

That is also the largest difference between DFS and BFS: BFS never goes deeper unless it has already visited all nodes at the current level.

Typically, we implement DFS using recursion. Stack plays an important role in recursion. We will explain the role of the stack when doing recursion in this chapter. We will also show you what's the drawback of recursion and provide another implementation of DFS without recursion.

Here is the proceeding of DFS:

![DFS](https://zinglix.xyz/img/in-post/DFS&BFS/DFS-Ex.gif)

And for BFS, we usually have two methods to realize it.

One is Recursion:

``` ts
interface Node {
  value: any;
  neighbors: Node[];
}

function DFS_Recursion(root: Node | null): void {
  if (!root) {
    return;
  }
  const recursive = (node: Node | null) => {
    if (!node) {
      return;
    }
    console.log(node.value);

    for (const next of node.neighbors) {
      recursive(next);
    }
  };
}
```

The other is applying Stack:

``` ts
interface Node {
  value: any;
  neighbors: Node[];
}

function DFS_Stack(root: Node | null): void {
  if (!root) {
    return;
  }
  const stack: Node[] = [root];
  while (stack.length) {
    const current = stack.pop()!;
    console.log(current.value);
    for (const next of current.neighbors) {
      stack.push(next);
    }
  }
}
```

### Summary

BFS is often used to find a single shortest route. Its characteristic is that it must be the optimal solution when it is found.

While DFS is used to find all solutions. It has high space efficiency, but what it finds is not necessarily the optimal solution, it must be recorded and completed the entire search.

## An Example of DFS and BFS

### Question

The example's original link is [Flood Fill](https://leetcode.com/problems/flood-fill)

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

Example 1:

![Example1](https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg)

``` text
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
```

Example 2:

``` text
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.
```

### Solution by BFS

``` ts
// BFS
// Time Complexity: O(N)
// Space Complexity: O(N)
function floodFill_BFS(image: number[][], sr: number, sc: number, color: number): number[][] {
  const start = image[sr][sc];
  const reconcile = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue: number[][] = [];
  queue.push([sr, sc]);

  if (start === color) {
    return image;
  }

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const current = queue.shift()!;
      image[current[0]][current[1]] = color;
      for (const round of reconcile) {
        let m = current[0] + round[0];
        let n = current[1] + round[1];
        if (m < 0 || m >= image.length || n < 0 || n >= image[0].length || image[m][n] !== start) {
          continue;
        }
        queue.push([m, n]);
      }
    }
  }

  return image;
}

// test
const res = floodFill_BFS(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);
console.log(res);
```

### Solution by DFS Recursion

```ts
// DFS Recursion
// Time Complexity: O(N)
// Space Complexity: O(N)
function floodFill_DFS(image: number[][], sr: number, sc: number, color: number): number[][] {
  const start = image[sr][sc];

  if (start === color) {
    return image;
  }

  const dfs = (x: number, y: number) => {
    if (x < 0 || x >= image.length || y < 0 || y >= image[0].length || image[x][y] !== start) {
      return;
    } else {
      image[x][y] = color;
      dfs(x + 1, y);
      dfs(x - 1, y);
      dfs(x, y + 1);
      dfs(x, y - 1);
    }
  };

  dfs(sr, sc);

  return image;
}

// test
const res = floodFill_DFS(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);
console.log(res)
```

### Solution by DFS Stack

``` ts
// DFS Stack
// Time Complexity: O(N)
// Space Complexity: O(N)
function floodFill_DFS_Stack(image: number[][], sr: number, sc: number, color: number): number[][] {
  const start = image[sr][sc];
  const reconcile = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const stack: number[][] = [];
  stack.push([sr, sc]);

  if (start === color) {
    return image;
  }

  while (stack.length) {
    const current = stack.pop()!;
    image[current[0]][current[1]] = color;
    for (const round of reconcile) {
      let m = current[0] + round[0];
      let n = current[1] + round[1];
      if (m < 0 || m >= image.length || n < 0 || n >= image[0].length || image[m][n] !== start) {
        continue;
      }
      stack.push([m, n]);
    }
  }

  return image;
}

// test
const res = floodFill_DFS_Stack(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);
console.log(res)
```
