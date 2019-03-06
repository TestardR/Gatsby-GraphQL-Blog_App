---
path: '/post-twenty'
date: '2019-03-06'
time: '☕️☕️ 10 min read'
title: 'Algo #2: Fibonnaci Series'
summary: 'In this serie on Javascript, we will take a look at how to solve the Fibonnacie series.'
---

This article was done using my notes from Stephen Grider's amazing course on algorithms and data structures, available at : https://www.rallycoding.com/

## The Fibonnacie series

Create a function that prints the n-th entry in the fibonacci series.
The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.

For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.<br>

For example:<br>
fib(4) === 3;

```
Solution 1:

function fib(n) {

    // let's set an array and hardcode the first two values
    // we can't compute them as they don't have n-2 and n-1 values.
    const result = [0, 1];

    // we want to start our loop from the third value in our array
    // as the two previous one are already computed
    for (let i = 2; i <=n ; i++) {

        const a = result[n - 1];
        const b = result[n - 2];

        // lets add to our array the next fibonnaci number
        result.push(a + b);
    }

    return result[n];
}
```

```
Solution 2:

function fib(n) {
    // as the first two values are 0 and 1
   if(n < 2) return n;

    // use recursion to obtain the fibonnaci number
   return fib(n -1) + fib(n - 2);

}

// This solution is not efficient. Its time complexity is exponential.
// The higher is n, the greater is the number of functions it has to run to come
// with the right answer.

```

As a mean to drastically decrease time/complexity, we can implement what is known as "memoization".

On Wikipedia, we can read that memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.<br>
Read: https://en.wikipedia.org/wiki/Memoization

```
Solution 2 bis:

function memoize(fn) {

    // Store calls to fast version and respective results
    const cache = {};

    // assign the arguments given to fib() to an array
    return function(...args) {

        // if a result has already been registered, return it
        if(cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args); // here it means fn(args);

        // at the key args, store the result we just created
        cache[args] = result;
        return result;

    }

}

fib = memoize(fib);



```

Run our badly optimized function through memoize to get way better performances.
