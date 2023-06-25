---
article: true
sticky: 900
star: 900
category: article
tag:
  - Recursion
date: 2023-06-26
---

# Recursion and Binary Tree

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

