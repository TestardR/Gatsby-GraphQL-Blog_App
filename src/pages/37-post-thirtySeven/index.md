---
path: '/post-thirtySeven'
date: '2019-08-24'
time: '☕️ 2 min read'
title: 'JS #5: Scope Closure'
summary: 'We take a look at closures with Kyle Simpson'
---

This article was done using my notes from Kyles Simpson, 2014, Scope and Closures. It is a part of a very well written serie on Javascript that every developer should take a look at.

## Closures ?

Closure is a standard of how developers write code in a lexically scoped environment, where functions are values and can be passed around at will. According Kyle Simpsons, "Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope."

Consider:

```
function foo() {

  var a = 2;

  function bar() {

    console.log( a );

  }

  bar(); // 2

}

foo(); // 2

```

Function bar() has access to the variable **a** in the outer enclosing scope because of lexical scope look-up rules. From a purely academic perspective is that the function bar() has a **closure** over the scope of foo(). Put differently, it is said that bar() closes over the scope of foo(). Simply, because bar() appears nested inside foo().

Let's consider another code that brings closure into full light:

```
function foo() {

  var a = 2;

  function bar() {

    console.log( a );

  }

  bar(); // 2

}

var baz = foo();

baz; // 2

```

Closures are in fact very common pattern. We commonly see them at work in loops are in modules. They are powerful tools. Modules require two key characteristics: 1) an outer wrapping function being invoked, to create the enclosing scope, 2) the return value of the wrapping function must include reference to at least one inner function that then has closure oer the private inner scope of the wrapper.

Consider:

```
function CoolModule() {

  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {

    console.log( something );

  }

    return {

      doSomething: doSomething

    };

}

var foo = CoolModule();

foo.doSomething(); // coool

```

That is the pattern in JavaScript we call module.
