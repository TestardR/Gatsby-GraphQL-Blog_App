---
path: '/post-thirtyNine'
date: '2019-08-26'
time: '☕️☕️ 5 min read'
title: 'JS #7: Object'
summary: 'We take a look at Objects with Kyle Simpson'
---

This article was done using my notes from Kyles Simpson, 2014, This & Object prototypes. It is a part of a very well written serie on Javascript that every developer should take a look at.

## Object

Objects in JavaScript have both a literal form (such as **var a = { .. }**) and a constructed form (such as **var a = new Array(..)**). This literal form is almost always preferred, but the constructed form offers, in some cases, more creations options.

Objects are one of the six primitives types : **string, number, boolean, null, undefined, object**. Objects have subtypes, including **function**, and also can be behavior-specialized, like **[object Array]** as the internal label representing the array object subtype.

Objects are collections of **key/value** pairs. The value can be accessed, via the **object.propName** or **object["propName"]** syntax. Whenever a property is accessed, the engine actually invokes the internal default **[ [ Get ] ]** operation (and **[ [ Put ] ]** for setting values), which not only looks for the property directly on the object, but will traverse the **[ [ Prototype ] ]** chain if not found.

Consider:

```
var myObject: = {

  a: 2

}

myObject.a; // 2

myObject["a"]; // 2

```

### Properties

Properties have certain characteristics that can be controlled through property descriptors, such as writable and configurable. In addition, objects can have their mutability (and that of their properties) controlled to various levels of immutability using **Object.preventExtensions(..)**, **Object.seal(..)**, and **Object.freeze(..)**.

Consider:

```
var myObject = {

  a: 2

};

Object.getOwnPropertyDescriptor( myObject, "a" );

// {
//    value: 2,
//    writable: true,
//    enumerable: true,
//    configurable: true
// }

Object.defineProperty( myObject, "a", {
  value: 2,
  writable: false, // not writable!
  configurable: true,
  enumerable: true
})

myObject.a = 3;

myObject.a; // 2
```

Properties don't have to contain values. They can be be "accessor properties" as well, with getters/setters. They can also be either **enumerable** or not, which controls whether they show up in **for..in** loop iterations, for instance.

### ES6 for..of and @@iterator

You can also iterate over the values in data structures (arrays, objects, etc.) using the ES6 **for..of** syntax, which looks for either a built-in or custom **@@iterator** object consisting of a **next()** method advance through the data values one at a time.

Consider:

```
var my Array = [1, 2, 3];

for (var v of myArray) {

  console.log( v );

}

// 1
// 2
// 3
```

Also consider:

```
var my Array = [1, 2, 3];
var it = myArray[Symbol.iterator]();

it.next(); // { value:1, done:false }
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { done:true }
```
