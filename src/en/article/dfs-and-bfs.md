---
article: true
isOriginal: true
sticky: 802
star: 802
category: article
tag:
  - DFS
  - BFS
date: 2023-07-06
---

# DFS and BFS

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

## Continue Writing...
