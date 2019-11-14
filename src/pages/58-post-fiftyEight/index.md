---
path: '/post-fiftyEight'
date: '2019-11-07'
time: '☕️☕️ 8 min read'
title: 'React #1: Create react elements with Strings'
summary: '1st of 8 useful tricks for React Apps with jsmanigest'
---

This article was done using my notes from jsmanifest, 2019, 8 Useful Tricks for React Apps You Should Know.

## Create React Elements With Strings

We can create a regular react DOM element with simple strings that represent an HTML DOM element tag.

For example, you can create React components by assigning the string **div** to a variable.

```
import React from 'react'

const FirstComponent = 'div'

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <FirstComponent>
        <h3>I am inside a {'<div />'} element</h3>
      </FirstComponent>
    </div>
  )
}
```

you can declare a **component** prop for which the caller can decide the root node of the component to become the value of **props.component**.

```
function SecondComponent({ component: Component = 'div', name, age, email }) {

  return (
    <Component>
      <h1>Hi {name}</h1>
      <div>
        <h6>You are {age} years old</h6>
        <small>Your email is {email}</small>
      </div>
    </Component>
  )
}
```

This where you can pass your props:

```
function App() {
  return (
    <div>
      <MyComponent component="div" name="Romain" age={16} email="Romain@gmail.com">
    </div>
  )
}
```

Finally, you can also pass in your custom component where that will be used as the root node:

```
function Dashboard({ children }) {
  return (
    <div style={{ padding: '25px 12px' }}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <MyComponent component={Dashboard} name="Romain" age={16} email="Romain@gmail.com">
    </div>
  )
}
```
