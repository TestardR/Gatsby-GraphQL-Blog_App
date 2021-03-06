---
path: '/post-sixtySeven'
date: '2019-11-16'
time: '☕️☕️ 8 min read'
title: 'Algo #19: Longest Word'
summary: 'Find the longest word in a sentence using reduce or sort with Philip Oboso'
---

This article was done using my notes from Philip Obosi, 2019, [The Ultimate Guide to JavaScript Algorithms Courses](https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms).

## The Challenge

Given a sentence, write a function that returns the longest word.

```
longestWord('Algorithms solving is good for your soul');
//should return 'Development'
```

## Use a for ... of loop

```
function longestWord(txt) {
  let wordArray = txt.split(" ");
  let maxLength = 0;
  let result = "";

  for (word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}
```

We could easily have used a classic for-loop.

## Make use of reduce

**maxLengthWord** corresponds to the classical **accumulator**. Its initial value is set at the end of the reduce function to **''**.
**currentWord** corresponds to the classical **currentValue**, it loops through all the values of **txt.split(' ')**.

```
function longestWord(txt) {
  var result = txt.split(" ").reduce((maxLengthWord, currentWord) => {
    if (currentWord.length > maxLengthWord.length) {
      return currentWord;
    } else {
      return maxLengthWord;
    }
  }, "");
  return result;
}
```

## Make use of sort

**sort()** is a very handy function to sort arrays. You still have to initialize giving it a function to decide how to sort the given array.

```
function longestWord(txt) {
  const sortedArray = txt
    .split(" ")
    .sort((wordA, wordB) => wordB.length - wordA.length);

  return sortedArray[0];
}
```
