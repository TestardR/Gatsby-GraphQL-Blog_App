---
path: '/post-forty'
date: '2019-08-27'
time: '☕️☕️ 5 min read'
title: 'JS #8: "Class" Objects as a concept'
summary: 'We take a look at classes with Kyle Simpson'
---

This article was done using my notes from Kyles Simpson, 2014, This & Object prototypes. It is a part of a very well written serie on Javascript that every developer should take a look at.

## Classes

Classes are a design pattern. Many languages provide syntax that enables class-oriented programing or software design. JavaScript also has a similar syntax, but it behaves very differently from classes in many other languages.

In traditional languages,"classes" mean copies.

### Instantiation & Inheritance

According to Kyle Simpson, when traditional classes are instantiated, a copy of behavior from class to instance occurs. When classes are inherited, a copy of behavior from parent to child occurs.

Instances are constructed by a **constructor**.

Consider the following pseudocode on class instantiation:

```
class CoolGuy {
  specialTrick = null

  CoolGuy( trick ) {

    specialTrick = trick

  }

  showOff() {

    output( "Here's my trick: ", specialTrick )

  }

}

Joe = new CoolGuy( "jumping rope" ) // call the constructor using new

Joe.showOff() // Here's my trick: jumping rope
```

Consider the following pseudocode on class inheritance:

```
class Vehicle {

  engines = 1

  ignition() {

    output( "Turning on my engine." );

  }

  drive() {

    ignition();

    output( "Steering and moving forward!" )

  }

}

class Car extends Vehicle {

  wheels = 4

  drive() {

    inherited: drive()

    output( "Rolling on all", wheels, " wheels!" )

  }

}
```

### Polymorphism

Polymorphism (here relative polymorphism) is the idea that any method can reference another method (of the same or different name) at a higher level of the inheritance hierarchy. In many languages, we use the keyword **super**, instead of the previous **inherited**.

In JavaScript, it may imply a referential relative link from child to parent, but it is still just a result of copy behavior.

### Mixins

JavaScript does not automatically create copies (as classes would imply) between objects.

According to Kyle Simpson, JavaScript's object mechanism does not automatically perform copy behavior when you inherit or instantiate. In other words, there are no "classes" to instantiate, only objects. Objects don't get copied to other objects, they get linked together. JavaScript developers fake the missing copy behavior of classes in using **mixins**.

Both explicit and implicit mixin pattern is used to emulate class copy behavior. It unfortunately usually leads to "ugly and brittle syntax", which often results in code that is harder to understand and maintain.

Explicit mixins are not exactly the same as class-copy behavior, since objects only have shared references duplicated, not the objects themselves...

According to Kyle Simpson, in general, faking classes in JavaScript often sets more landmines for future coding than solving present problems.
