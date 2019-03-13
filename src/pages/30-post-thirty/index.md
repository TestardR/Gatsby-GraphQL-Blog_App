---
path: '/post-thirty'
date: '2019-03-13'
time: '☕️☕️☕️☕️ 20 min read'
title: 'Algo #12: linkedlist'
summary: 'In this Javascript serie, we will take a look at a not built in data structure known as linkedlist, and play around with it'
---

This article was done using my notes from Stephen Grider's amazing course on algorithms and data structures, available at : https://www.rallycoding.com/

## linkedlist

### the nodes

Linkedlist are made of nodes. So, let's create a class instance to represent a node. The node should have two properties, 'data' and 'next'. Accept both of these as arguments to the 'Node' constructor, then assign them to the instance as properties 'data' and 'next'. If 'next' is not provided to the constructor, then default its value to be 'null'.

For example:<br>
const n = new Node('There');<br>
n.data // 'Hi'<br>
n.next // null<br>
const n2 = new Node('Hi', n);<br>
n.next // returns n

```
class Node {

    constructor(data, next = null) {

        this.data = data;

        this.next = next;

    }

}
```

### the linkedlist

Now let's talk about linkedlist, let's create a class to represent a linked list. When created, a linked list should have _no_ head node associated with it. The LinkedList instance will have one property, 'head', which is a reference to the first node of the linked list. By default 'head' should be 'null'.

For example:<br>
const list = new LinkedList();<br>
list.head // null<br>

```
class LinkedList {

  constructor() {

    this.head = null;

  }

}
```

### insertFirst()

Let's create a function that will implement a new Node from argument 'data' and assigns the resulting node to the 'head' property. Make sure to handle the case in which the linked list already has a node assigned to the 'head' property.

For example:<br>
const list = new LinkedList();<br>
list.insertFirst('Hi There'); // List has one node

```
class LinkedList {

  constructor() {

    this.head = null;

  }

  insertFirst(data) {

      this.head = new Node(data, this.head);

  }

}
```

### size()

Let's create a function that returns the number of nodes in the linked list.

For example:<br>
const list = new LinkedList();<br>
list.insertFirst('a');<br>
list.insertFirst('b');<br>
list.insertFirst('c');<br>
list.size(); // returns 3

```
class LinkedList {

  constructor() {

    this.head = null;

  }

   insertFirst(data) {

      this.head = new Node(data, this.head);

  }

  size() {

      let count = 0;

      let node = this.head;

      while(node) {

          counter++;

          node = node.next;

      }

      return counter;

  }

}
```

### getFirst()

Let's create a function that returns the first node of the linked list.

For example:<br>
const list = new LinkedList();<br>
list.insertFirst('a');<br>
list.insertFirst('b');<br>
list.getFirst(); // returns Node instance with data 'a'

```
class LinkedList {

  constructor() {

    this.head = null;

  }

   insertFirst(data) {

      this.head = new Node(data, this.head);

  }

    getFirst() {

        return this.head;

    }

}
```

### getLast()

Let's create a function that returns the last node of the linked list

For example:<br>
const list = new LinkedList();<br>
list.insertFirst('a');<br>
list.insertFirst('b');<br>
list.getLast(); // returns node with data 'a'

```
class LinkedList {

  constructor() {

    this.head = null;

  }

   insertFirst(data) {

      this.head = new Node(data, this.head);

  }

    getLast() {

        if(!this.head) {

            return null;

        }

        let node = this.head;

        while(node) {

            if(!node.next) {

                return node;

            }

            node = node.next;

        }

        return node;

    }

}
```

### clear()

Let's build a function that empties the linked list of any nodes.

For example:<br>
const list = new LinkedList();<br>
list.insertFirst('a');<br>
list.insertFirst('b');<br>
list.clear();<br>
list.size(); // returns 0

```
class LinkedList {

  constructor() {

    this.head = null;

  }

   insertFirst(data) {

    this.head = new Node(data, this.head);

  }

  size() {

    let counter = 0;

    let node = this.head;

    while (node) {

      counter++;

      node = node.next;

    }

    return counter;

  }

    clear() {

    this.head = null;

    }

}
```

### removeFirst()

Let's build a function that removes the first node of the linked list. The list's head should now be the second element.

For example:<br>
const list = new LinkedList();<br>
list.insertFirst('a');<br>
list.insertFirst('b');<br>
list.removeFirst();<br>
list.getFirst(); // returns node with data 'a'

```
  removeFirst() {

    if (!this.head) {

      return;

    }

    this.head = this.head.next;

  }

```

### removeLast()

let's build a function that removes the last node of the chain.

For example:<br>
const list = new LinkedList();<br>
list.insertFirst('a');<br>
list.insertFirst('b');<br>
list.removeLast();<br>
list.size(); // returns 1<br>
list.getLast(); // returns node with data of 'b'

```
removeLast() {

  if (!this.head) {

    return;

  }

  if (!this.head.next) {

    this.head = null;

    return;

  }

  let previous = this.head;
  let node = this.head.next;

  while(node.next) {

    previous = node;

    node = node.next;

  }

  previous.next = null;

}

```
