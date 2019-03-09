---
path: '/post-twentyEight'
date: '2019-03-11'
time: '☕️☕️ 8 min read'
title: 'Algo #10: The Queue'
summary: 'In this Javascript serie, we will take a look at a not build in data structure known as Queue'
---

This article was done using my notes from Stephen Grider's amazing course on algorithms and data structures, available at : https://www.rallycoding.com/

## The Queue

Create a queue data structure. The queue should be a class with methods 'add' and 'remove'.
Adding to the queue should store an element until it is removed.

For example:<br>
const q = new Queue();<br>
q.add(1);<br>
q.remove(); // returns 1;

```
class Queue {

    constructor() {

        this.data = [];

    }

    // unshift() adds a the beginning of the array
    add(record) {

        this.data.unshift(record);

    }

    // pop() removes the last element of an array
    remove(record) {

        return this.data.pop(); // return to work with the removed data

    }

}

```
