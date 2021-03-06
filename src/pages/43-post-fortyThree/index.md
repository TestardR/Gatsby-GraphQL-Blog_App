---
path: '/post-fortyThree'
date: '2019-08-30'
time: '☕️☕️ 8 min read'
title: 'JS #11: Types and Values'
summary: 'We take a look at Types & Values with Kyle Simpson'
---

This article was done using my notes from Kyles Simpson, 2015, Types & Grammar. It is a part of a very well written serie on Javascript that every developer should take a look at.

## Types

JavaScript has seven built-in _types_: **null, undefined boolean, number, string, object, and symbol**. They can be identified by the **typeof** operator. Variables do not have types, but the values in them do. These types define the intrinsic behavior of the values.

According to Kyle Simpson, many developers will assume "undefined" and "undeclared" are roughly the same thing, but in JavaScript, they are quite different **undefined** is a value that a declared variable can hold. "Undeclared" means a variable has never been declared.

Consider the following piece of code:

```
var a;

a; // undefined
b; // ReferenceError: b is not defined
```

JavaScript unfortunately enforces ambiguity, not only in its error message ("ReferenceError: a is not defined") but also in the return values of **typeof**, which is **undefined** in both cases. However, it exists safety guard preventing an error on **typeof** when used against an undeclared variable. It can be helpful to consider in certain cases.

## Values

In JavaScript, **arrays** are simply numerically indexed collections of any value type. **strings** are somewhat "array-like", but they have distinct behaviors and care must be taken if you want to treat them as **arrays**. A workaround is to convert the **string** into an **array**, perform the desired operation, then convert it back to a **string**. **Numbers** in JavaScript include both "integers" and floating-point values.

Consider the quick to do it:

```
var a = 'oof'

var c = a
        // split 'a' into an array of characters
         .split('')
        // reverse the array of characters
         .reverse()
        // join the array of characters back to a string
         .join('');

c; // "foo"

```

Consider the more traditional way of doing it. We mix string and array methods:

```
var a = 'oof'

var c = a.split('');

var d = Array.prototype.reverse.call(c);

var e = Array.prototype.join.call(d, '');

e; // "foo"

```

Several special values are defined within the primitive types (**null, undefined, void, NaN, Infinities, -0**).

The **null** type has just one value, **null**, and likewise the **undefined** type has just the **undefined** value, **undefined** is basically the default value in any variable or property if no other value is present. The **void** operator lets you create the **undefined** value from any other value.

**numbers** include several special values, like **NaN** (supposedly "Not a Number"", but really more appropriately "invalid number"); **+Infinity**, and **-Infinity**; and **-0**.

Simple scalar primitives (**strings, numbers, etc.**) are assigned/passed by value-copy, but compound values (**objects, etc.**) are assigned/passed by reference-copy. References at not like references/pointers in other languages. THey are never pointer at other variables/references, only at the the underlying values.

Let's illustrate:

```
var a = 2;
var b = a; // b is always a copy of the value in a
b++;

a; // 2
b; // 3


var c = [1, 2, 3];
var d = c; // d is a reference to the shared [1, 2, 3] value
d.push(4);

c; // [1, 2, 3, 4];
d; // [1, 2, 3, 4];

```
