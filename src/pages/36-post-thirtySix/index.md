---
path: '/post-thirtySix'
date: '2019-08-23'
time: '☕️ 1 min read'
title: 'JS #4: Hoisting'
summary: 'We take a look at what is known as hoisting with Kyle Simpson'
---

This article was done using my notes from Kyles Simpson, 2014, Scope and Closures. It is a part of a very well written serie on Javascript that every developer should take a look at.

## Hoisting ?

As Kyle Simpsons exposes, we are tempted to look at **var a = 2;** as one statement, but the JavaScript engine does not see it that way. It sees **var a** and **a = 2** as two separate statements, the first one a compiler-phase task, and the seconde one an execution-phase task.

What this leads to is that all declarations in a scope, regardless of where they appear, are processed first before the code itself is executed. You can think of this as declarations (variables and functions) being "moved" to the top of their respective scopes, which is called **hoisting**.

Declarations themselves are hoisted, but assignments, even assigments of function expressions, are **not** hoisted.

For example:

```
var a;

console.log( a ); // undefined

a = 2;

```

or

```
foo(); // undefined

function foo() {

  console.log( a );

  var a = 2;

}

```

See, function expressions are not hoisted, only function declarations :

```
foo(); // TypeError

var foo = function bar() {

  // ...

}

```
