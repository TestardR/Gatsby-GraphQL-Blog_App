---
path: '/post-fortyFor'
date: '2019-08-31'
time: '☕️ 2 min read'
title: 'JS #12: Natives'
summary: 'We take a look at Natives.'
---

This article was done using my notes from Kyles Simpson, 2015, Types & Grammar. It is a part of a very well written serie on Javascript that every developer should take a look at.

## Natives

Here is a list of the most commonly used natives:

```
String()

Number()

Boolean()

Array()

Object()

Function()

RegExp()

Date()

Error()

Symbol()
```

These are object wrappers we can set around primitive values. They are known as natives. These object wrappers serve a very important purpose. Primitive values don't have properties or methods, so to access **.length** or **.toString()** you need an object wrapper around the value.

```
var a = new String("abc");

typeof a; // "object" ... not "String"

a instanceof String // true

Object.prototype.toString.call( a ); // "[object String]"

```

Values that are **typeof** "objet" are tagged with an internal [ [ Class ] ] property. This property can be revealed by using the default **Object.prototype.toString(..)** method called against the value.

For example:

```
Object.prototype.call( [1,2,3] ); // "[object Array]"

Object.prototype.call( /regex-literal/i ); // "[object RegExp]"
```

If you have a simple scalar primitive value like "abc" and you want to access its **length** property or some **String.prototype** method, JS automatically "boxes" the value (wraps it in its respective object wrapper) so that the property/method accesses can be fulfilled.
