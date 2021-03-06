---
path: '/post-forty-Five'
date: '2019-09-14'
time: '☕️☕️ 10 min read'
title: 'JS #14: ES6 Classes'
summary: 'We take a look at preES6 and ES6 Classes with Kyle Simpson'
---

This article was done using my notes from Kyles Simpson, 2016, ES6 & Beyond. It is a part of a very well written serie on Javascript that every developer should take a look at.

## Classes

### Class

At the heart of the new ES6 class mechanism is the class keyword, which identifies a block where the contents define the members of a function's prototype.

Consider:

```
class Foo {

    constructor(a, b) {
        this.x = a;
        this.y = b;
    }

    gimmeXY() {
        return this.x * this.y;
    }

}
```

Things to take into consideration:

1. class Foo implies creating a function of the name Foo.
2. constructor(..) identifies the signature of that Foo(..) function, as well as its body contents.

The class syntax definition is roughly thought of as the pre-ES6 equivalent:

```
class Foo {

    constructor(a, b) {
        this.x = a;
        this.y = b;
    }

    Foo.prototype.gimmeXY = function() {
        return this.x * this.y;
    }

}
```

In both cases, this "class" can now be instantiated:

```
var f = new Foo(5, 15);

f.x; // 5
f.y; // 15
f.gimmeXY(); // 75
```

Cautions to take into account:

1. A Foo(..) call of class Foo must be made with **new**.
2. While function Foo is "hoisted", class Foo is not; the **extends** clause specifies an express that cannot be "hoisted". So, you must declare a **class** before you can instantiate it.

### extends and super

ES6 classes also have syntactic sugar for establishing the **[ [ Prototype ] ]** delegation link between two function prototypes using the class-oriented familiar terminology **extends**:

```
class Bar extends Foo {

    constructor(a, b, c) {
        super(a, b);
        this.z = c;
    }

    gimmeXYZ() {
        return super.gimmeXY() * this.z;
    }

}

var b = new Bar(5, 15, 25);

b.x; // 5
b.y; // 15
b.z; // 25
b.gimmeXYZ(); // 1875
```

In the constructor, **super** automatically refers to the "parent constructor", which in the previous example is Foo(..). In a method, it refers to the "parent object", such that you can then make a property/method access off it, such as **super.gimmeXY()**.

**Bar extends** means to link to the **[ [ Prototype ] ]** of **Bar.prototype** to **Foo.prototype**. So, super in a method like **gimmeXYZ()** specially means **Foo.prototype**, whereas **super** means Foo when used in the **Bar** constructor.

### static

It is quite useful to declare **static** methods (not just properties) for a class, as these are added directly to that class's function object, not to fhe function object's prototype object.

Consider:

```
class Foo {
    static cool() {
        console.log("cool");
    }

    wow() {
        console.log("wow");
    }

}

class Bar extends Foo {
    static awesome() {
        super.cool();
        console.log("awesome");
    }

    neat() {
        super.wow();
        console.log("neat");
    }
}

Foo.cool(); // "cool"

Bar.cool(); // "cool"

Bar.awesome(); // "cool" "awesome"

bar b = new Bar();
b.neat(); // "wow" "neat"

b.awesome; // undefined
b.cool; // undefined
```
