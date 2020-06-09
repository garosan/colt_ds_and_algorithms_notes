# JavaScript Algorithms and Data Structures Masterclass
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/


## Syllabus

1. Introduction
2. Big O Notation
3. Analyzing Performance of Arrays and Objects
4. Problem Solving Approach
5. Problem Solving Patterns
6. 100% Optional Challenges
7. Recursion
8. Recursion Problem Set
9. Bonus CHALLENGING Recursion Problems
10. Searching Algorithms
11. Bubble Sort
12. Selection Sort
13. Insertion Sort
14. Comparing Bubble, Selection and Insertion Sort
15. Merge Sort
16. Quick Sort
17. Radix Sort
18. Data Structures Introduction
19. Singly Linked Lists
20. Doubly Linked Lists
21. Stacks + Queues
22. Binary Search Trees
23. Tree Traversal
24. Binary Heaps
25. Hash Tables
26. Graphs
27. Graph Traversal
28. Dijkstra's Algorithm
29. Dynamic Programming
30. The Wild West

## Introduction

- Curriculum walkthrough
- What order should you watch in?
- How I'm running my code

## Big O Notation

Objectives:
- Understand the need for Big O Notation
- Describe what Big O Notation is
- Simplify Big O Expressions
- Define 'time complexity' and 'space complexity'
- Evaluate time complexity and space complexity of different algorithms using Big O Notation
- Describe what a logarithm is

## Timing Our Code

```javascript
// Slower solution
const addUpToSlower = (n) => {
  let total = 0;
  for (i = 0; i <= n; i++) {
    total += i;
  }

  return total;
};

// Faster solution

const addUpToFaster = (n) => (n * (n + 1)) / 2;
```

Which one is better? And what does 'better' even mean?

- Faster?
- Less memory-intensive?
- More readable?

Using `performance.now()` to time our code.

The problem with Time

- Different machines will record different times
- The *same* machine will record different times
- Speed measurements may not be precise enough for fast algorithms

If not time, then what? Let's count the number of simple operations the computer has to perform.

In addUpSlower it is about 5n + 2 operations, but we say it's *n operations*.

### Big O 

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n <sup>2</sup>)
- f(n) could be constant (f(n) = 1)
- f(n) could be something different