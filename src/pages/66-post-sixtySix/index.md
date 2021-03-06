---
path: '/post-sixtySix'
date: '2019-11-15'
time: '☕️ 2 min read'
title: 'Algo #18: Hamming Distance'
summary: 'Calculate the edit distance between to strings of equal length Philip Oboso'
---

This article was done using my notes from Philip Obosi, 2019, [The Ultimate Guide to JavaScript Algorithms Courses](https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms).

## The Challenge

Given two strings, write an algorithm that returns the number of character to change to have matching strings.

```
hammingDistance('rover', 'river') // should return 1
```

## Use a for-loop

We will make use of a classic for-loop to loop through every character of **stringA** while comparing to each character in their corresponding position of **stringB**.

```
function hammingDistance(stringA, stringB) {
  let result = 0;

  if (stringA.length === stringB.length) {
    for (let i = 0; i < stringA.length; i++) {
      if (stringA[i] !== stringB[i]) {
        result++;
      }
    }
    return result;
  } else {
    console.log("Strings do not have equal length");
  }
}
```
