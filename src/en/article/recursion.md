---
article: true
sticky: 900
star: 900
category: article
tag:
  - Recursion
date: 2023-06-26
---

# Recursion

## Preface

In this article, I would like to summarize recursion from my own perspective. For a long time, I don't have a clear thinking to solve recursion problem. I think it is abstract and hard to find a template in some degree.

Now, due to practicing recursive problems over and over again, I think I have some good experience and can extract some methods to solve the recursion problem.

## The core of recursion

Here is the definition of recursion from Wikipedia:

Recursion is the process a procedure goes through when one of the steps of the procedure involves invoking the procedure itself. A procedure that goes through recursion is said to be 'recursive'.

Obviously, it is obscure. And it is not the point I want tell you.

Let see a example to understand recursion:

We assume f(x) is a function, and define f(x) = x * f(x-1), f(1) = 1.

And we need to obtain the f(6).

```
1. f(6)
2. => 6 * f(5)
3. => 6 * (5 * f(4))
4. => 6 * (5 * (4 * f(3)))
5. => 6 * (5 * (4 * (3 * f(2))))
6. => 6 * (5 * (4 * (3 * (2 * f(1))))) 
7. => 6 * (5 * (4 * (3 * (2 * 1)))) 
8. => 6 * (5 * (4 * (3 * 2))) 
9. => 6 * (5 * (4 * 6)) 
10 => 6 * (5 * 24)
11. => 6 * 120 => 720
```

As we see, we don't know the value of f(6), but we can transform it as 6 *f(5); We don't know the value of f(5), but we can transform it as 5* f(4)...

Until when we reach the terminal condition f(1) = 1, and then we start to go back.

**So for any recursion, we have two phases: go-in, come-out. Like this example, steps 1-6 represent going in, and steps 7- 11 represent coming out.**

This is the key of recursion. In fact, these are the essence of the computer handling recursive problem.

![Recursive](https://pic4.zhimg.com/v2-117b94f64bcff561bd230e03a49dbf37_b.webp)

## How to look at recursion from the perspective of the human brain?

Although we have figured out the every steps of recursion in the previous section, we can't always do this when we face recursive problem every time.

The reason is that we are not computer.

What we usually call understanding code is to simulate the result of computer execution to a certain step in the brain. For iterative algorithms, this is fine. But when comes to the recursive algorithm, if you understand it in this way, you will enter a misunderstanding and you will find it is hard to figure out the whole process like f(6).

This is why we need computer to resolve recursive problem. Computer only cares about input and execution, and they don't need to understand the context or describe the process.

Thus, it is almost impossible for our brains to think through the entire process of recursion and recursion step by step, so don't try to use the human brain to decompose each step of recursion.

To put it simply, first of all, we must learn to forget the recursive process, trust the computer, and don't try to simulate every step with the human brain to verify whether our solution is correct.

And the only thing we should care about is that what we should do in one of cases. Like in f(6) example, we just care about what we need to do when we in f(5) cases. And then believe your computer, believe it can solve other sub question successfully base on your f(5) solving logic.

::: tip Hint
This is important, please remember it!
:::

## The key elements to solve recursive problem

There are 3 key elements I summarized.

### Clear what you want to do in the recursive function

For recursion, one important thing is: what is the function of this function, and what kind of thing does it want to accomplish.

And this is up to us to define. We don't care what the code in the function is, but we must first understand what this function is used for.

::: tip Hint
This point, you may think it is nonsense. Don't jump to conclusions, the three elements of recursion are indispensable and  important respectively.
:::

### Find out the terminal conditions

Find out the terminal conditions. Terminal conditions refer to a condition where a function no longer calls itself, thereby avoiding an infinite loop.

### Find out the recursive logic

Find the recursive logic, that is, the equivalence relation of the function. And it is the hardest step in three elements. And I think it don't have a particular summary. Different examples reflect differently.

## Case Study

### Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

``` ts
// 509. Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

function fib(n: number): number {

}

// test
const res = fib(10);
console.log(res);
```

1. Now, first step is **Clear what you want to do in the recursive function**.

Well, my recursive function will get the current F(n) Fibonacci number.

```ts
function fib(n: number): number {
  const recursive = (current: number) => {

  }
}
```

2. Second, find out the terminal conditions.

It is easy, F(0) = 0, F(1) = 1.

```ts
function fib(n: number): number {
  const recursive = (current: number) => {
    if (current === 0) {
      return 0
    }
    if (current === 1) {
      return 1
    }
  }
}
```

3. Third, Find out the recursive logic.

So you should remind yourself: Don't try to simulate every step to verify whether our solution is correct. The only thing we should care about is that what we should do in one of cases! 

So assume that we need to obtain fib(5), so in this case, fib(5) = fib(4) + fib(3). And don't think about fib(4) or fib(3), because they belong to other sub cases, and we just need to know when execute here, fib(3) and fib(4) has accurate results.

So according to this case, we know fib(n) = fib(n-1) + fib(n-2), that's it!

```ts
function fib(n: number): number {
  const recursive = (current: number): number => {
    if (current === 0) {
      return 0;
    }
    if (current === 1) {
      return 1;
    }
    return recursive(current - 1) + recursive(current - 2);
  };
}
```

And the recursive function is completed! We just give the params into it, then it works!

```ts
function fib(n: number): number {
  const recursive = (current: number): number => {
    if (current === 0) {
      return 0;
    }
    if (current === 1) {
      return 1;
    }
    return recursive(current - 1) + recursive(current - 2);
  };

  return recursive(n);
}
```

### Series of reverse problem

This section I want to share a particular question set - reverse problem.

We can find examples at Leetcode such as:

- 24. Swap Nodes in Pairs
- 206. Reverse Linked List
- 344. Reverse String

Let's use Reverse Linked List as our example:

Given the head of a singly linked list, reverse the list, and return the reversed list.

``` ts
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

function reverseList(head: ListNode | null): ListNode | null {

}
```

1. Now, first step is **Clear what you want to do in the recursive function**.

Well, my recursive function will swap current node and it's next node.

```ts
function reverseList(head: ListNode | null): ListNode | null {
  const recursive = (node: ListNode | null): ListNode | null => {

  }
}
```

2. Second, find out the terminal conditions.

We can know that there is no node need to reverse when at the end, so at that time we need to return itself.

```ts
function reverseList(head: ListNode | null): ListNode | null {
  const recursive = (node: ListNode | null): ListNode | null => {
    if (!node || !node.next) {
      return node
    }
  }
}
```

3. Third, Find out the recursive logic.

So you should remind yourself: Don't try to simulate every step to verify whether our solution is correct. The only thing we should care about is that what we should do in one of cases! 

So suppose that the program is execute here:

```
          null
           ^
           |
 1 -> 2 -> 3
           ^
           |
           4
```

At this time, 1->2->3->4 turn to the picture above. And we need change to:

```
          null
           ^
           |
      1 -> 2
           ^
           |
           3
           ^
           |
           4
```

At this scene，it is easy to think out:

```ts
const temp = node.next;
temp.next = node;
node.next = null;
```

And then, put recursive in the code:

```ts
function reverseList(head: ListNode | null): ListNode | null {
  const recursive = (node: ListNode | null): ListNode | null => {
    if (!node || !node.next) {
      return node
    }
    const newLink = recursive(node.next);
    const temp = node.next;
    temp.next = node;
    node.next = null;
    return newLink;
  }
}
```

And the recursive function is completed! We just give the params into it, then it works!

```ts
function reverseList(head: ListNode | null): ListNode | null {
  const recursive = (node: ListNode | null): ListNode | null => {
    if (!node || !node.next) {
      return node
    }
    const newLink = recursive(node.next);
    const temp = node.next;
    temp.next = node;
    node.next = null;
    return newLink;
  }
  return recursive(head);
}
```

## Bottom Up and Top Down

In the previous section, we use a example:

```
1. f(6)
2. => 6 * f(5)
3. => 6 * (5 * f(4))
4. => 6 * (5 * (4 * f(3)))
5. => 6 * (5 * (4 * (3 * f(2))))
6. => 6 * (5 * (4 * (3 * (2 * f(1))))) 
7. => 6 * (5 * (4 * (3 * (2 * 1)))) 
8. => 6 * (5 * (4 * (3 * 2))) 
9. => 6 * (5 * (4 * 6)) 
10 => 6 * (5 * 24)
11. => 6 * 120 => 720
```

We have two phases: go-in, come-out. Like this example, steps 1-6 represent going in, and steps 7- 11 represent coming out.

This is important because we can use our recursion function in these two phases.

During the go-in phase, we can use Top-Down method to do something, and during the come-out phase we can use Bottom-up to do something.

Let's see a example:

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

``` ts
// 104. Maximum Depth of Binary Tree

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
```

Next, we will cope this problem based on these two methods.

### Bottom Up

"Bottom-up" is a recursive solution.

In each recursive call, we will firstly call the function recursively for all the children nodes and then come up with the answer according to the returned values and the value of the current node itself. 

This process can be regarded as a kind of postorder traversal. 

Typically, a "bottom-up" recursive function bottom_up(root) will be something like this:

```
1. return specific value for null node
2. left_ans = bottom_up(root.left)      // call function recursively for left child
3. right_ans = bottom_up(root.right)    // call function recursively for right child
4. return answers                       // answer <-- left_ans, right_ans, root.val
```

Then, let's see this Maximum Depth of Binary Tree.

1. Now, first step is **Clear what you want to do in the recursive function**.

```ts
function reverseList(head: ListNode | null): ListNode | null {
  const recursive = (node: ListNode | null): ListNode | null => {

  }
}
```

2. Second, find out the terminal conditions.

It is easy to know that if current node is null, the length will be 0 at this time.

```ts
function reverseList(head: ListNode | null): ListNode | null {
  const recursive = (node: ListNode | null): ListNode | null => {
    if (!node) {
      return 0;
    }
  }
}
```

3. Third, find out the recursive logic.

Suppose in one node, what should we do? Get left_len and right_len, and pick up the max one, and plus 1 length currently, and then return this value to next top node.

```ts
// Recursion Bottom-Up
function maxDepth_Recursion_Bottom_Up(root: TreeNode | null): number {
  const recursive = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }
    const left_len = recursive(node.left);
    const right_len = recursive(node.right);
    return Math.max(left_len, right_len) + 1;
  };

  return recursive(root);
}
```

#### Summary

So in this process, we don't handle something during the go-in phase, we just let the code enter go-in phase and finish it, then at come-out phase, we do Math.max(left_len, right_len) + 1.

That's Bottom-Up.

And in the previous sections(Fibonacci Number and Reverse Linked List), we can find that we all use Bottom-Up, which means that we often call recursive function firstly and do something in the come-out phase.

### Top-Down

Top-down means that in each recursive call, we will visit the node first to come up with some values, and pass these values to its children when calling the function recursively. 

So the "top-down" solution can be considered as a kind of preorder traversal. 

To be specific, the recursive function top_down(root, params) works like this:

```
1. return specific value for null node
2. update the answer if needed                      // answer <-- params
3. left_ans = top_down(root.left, left_params)      // left_params <-- root.val, params
4. right_ans = top_down(root.right, right_params)   // right_params <-- root.val, params
5. return the answer if needed                      // answer <-- left_ans, right_ans
```

Then, let's see this Maximum Depth of Binary Tree.

1. Now, first step is **Clear what you want to do in the recursive function**.

```ts
function reverseList(head: ListNode | null): ListNode | null {
  const recursive = (node: ListNode | null): ListNode | null => {

  }
}
```

2. Second, find out the terminal conditions.

It is easy to know that if current node is null, the length will be 0 at this time.

```ts
function reverseList(head: ListNode | null): ListNode | null {
  if (!root) {
    return 0;
  }
  let result = 1;
  const recursive = (node: TreeNode | null, depth: number): number => {
    if (!node.left && !node.right) {
      result = Math.max(result, depth);
      return;
    }

  };
}
```

3. Third, find out the recursive logic.

```ts
// Recursion Bottom-Up
function maxDepth_Recursion_Bottom_Up(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let result = 1;
  const recursive = (node: TreeNode | null, depth: number): number => {
    if (!node.left && !node.right) {
      result = Math.max(result, depth);
      return;
    }
    recursive(node.left, depth + 1);
    recursive(node.right, depth + 1);
  };

  return result;
}
```

#### Summary

As we see, we do nothing during the come-out phase, and the value of depth is determined when during the go-in.

That's Top-Up.

And Top-Up is often used to the scene that we can use a other flag to get the result instead of calling recursive function itself to get the result. Because in the go-in phase, recursive function cannot store status permanently, so we need to use other variable to remember it.
