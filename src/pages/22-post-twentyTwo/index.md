---
path: '/post-twentyTwo'
date: '2019-03-05'
time: '☕️ 2 min read'
title: 'Algo #4: fizzBuzz()'
summary: 'In this serie on Javascript, we will take a look a the modulo operator'
---

This article was done using my notes from Stephen Grider's amazing course on algorithms and data structures, available at : https://www.rallycoding.com/

## fizzBuzz()

Write a program that console logs the numbers from 1 to n. But for multiples of three print “fizz” instead of the number and for the multiples
of five print “buzz”. For numbers which are multiples of both three and five print “fizzbuzz”.

```
function fizzBuzz(n) {
    for(let i = 0; i < n; i ++) {

        // Is the number a multiple of 3 and 5 ?
        if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');

        // Is the number a multiple of 3 ?
        } else if (i % 3 === 0) {
        console.log('fizz');

        // Is the number a multiple of 5 ?
        } else if (i % 5 === 0) {
        console.log('buzz');

        // Otherwise print values
        } else {
        console.log(i);
        }

    }
}

```
