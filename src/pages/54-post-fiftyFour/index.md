---
path: '/post-fiftyFour'
date: '2019-11-03'
time: '☕️☕️ 8 min read'
title: 'Algo #13: Advanced reverse String'
summary: 'Lets take a deep dive into reverse String with Philip Oboso'
---

This article was done using my notes from Philip Oboso, 2019, String Reversal.

## The Challenge

Given a string of text, write an algorithm that returns the text received in a reversed format.

```
reverseString('algorithms') // should return 'smhtirogla'
```

## Chaining built-in methods

```
reverseString('algorithms') // should return 'smhtirogla'

const str = 'algorithms';

function reverseString(str) {
   return str
     .split('')
     .reverse()
     .join('');
}
```

or even

```
reverseString('algorithms') // should return 'smhtirogla'

const str = 'algorithms';

function reverseString(str) {
   return [...str].reverse().join('');
}
```

## The For-Loop way

```
function reverseString(str) {
   let result = '';

   for (let i = str.length - 1; i >= 0; i--) {
     result += str[i];
   }

  return result;
}
```

or even

```
function reverseString(str) {
   let result = '';

   for (char of str) {
     result = char + result;
   }

   return result;
}
```

## The Recursive Way

```
function reverseString(str) {
   if (str === '') {
     return '';
   }
   else {
     return reverseString(str.substr(1)) + str[0];
   }
}
```

## Using .reduce()

```
function reverseString(str) {
   return str.split('').reduce((acc, char) => char + acc, '');
}
```

or even

```
function reverseString(str) {
  return [...str].reduce((acc, char) => char + acc, '');
}
```
