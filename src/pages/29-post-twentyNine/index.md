---
path: '/post-twentyNine'
date: '2019-03-12'
time: '☕️☕️ 8 min read'
title: 'Algo #11: The Stack and making a Queue out of Stacks'
summary: 'In this Javascript serie, we will take a look at a not built in data structure known as Stack, and then play around with it'
---

This article was done using my notes from Stephen Grider's amazing course on algorithms and data structures, available at : https://www.rallycoding.com/

## The Stack

Create a stack data structure. Think of a stack as a pile of rings that you would add one on top of the other.
The stack should be a class with methods 'push', 'pop', and 'peek'. Adding an element to the stack should store it until it is removed.

For example:<br>

const s = new Stack();<br>
s.push(1);<br>
s.push(2);<br>
s.pop(); // returns 2<br>
s.pop(); // returns 1

```
class Stack {

    constructor() {

        this.data = [];

    }

    // here is the big difference with a Queue, a Stack will add at the end
    push(record) {

        this.data.push(record);

    }

    pop() {

        return this.data.pop();

    }

    peek() {

        return this.data[this.data.length - 1];

    }

}
```

## a Queue from Stacks

Implement a Queue datastructure using two stacks. _Do not_ create an array inside of the 'Queue' class.
Queue should implement the methods 'add', 'remove', and 'peek'. For a reminder on what each method does, look back
at the previous article on Queues.

For example:<br>
const q = new Queue();<br>
q.add(1);<br>
q.add(2);<br>
q.peek(); // returns 1<br>
q.remove(); // returns 1<br>
q.remove(); // returns 2<br>

On this one, I really advise you to draw what is going on. I will be easier to make sense of the flow of data.

```
class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {

        while(this.first.peek()) {

            this.second.push(this.first.pop());

        }

        const record = this.second.pop();

        while(this.second.peek()) {

            this.first.push(this.second.pop());

        }

        return record;

    }

    peek() {

        while(this.first.peek()) {

            this.second.push(this.first.pop());

        }

        const record = this.second.peek();


        while(this.second.peek()) {

            this.first.push(this.second.pop());

        }


    return record;

    }
}
```
