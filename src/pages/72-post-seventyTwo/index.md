---
path: '/post-seventy'
date: '2019-11-24'
time: '☕️ 4 min read'
title: 'React #11: What is a Pure Component and a memo function'
summary: 'Control rendering with Sudheer Jonna'
---

This article was done using my notes from Sudheer Jonna, 2020, [React Interview Questions & Answers](https://github.com/sudheerj/reactjs-interview-questions#what-is-react).

## What is a Pure Component ?

React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.

## What is a React memo function ?

Class components can be restricted from rendering when their input props are the same using PureComponent or shouldComponentUpdate. Now you can do the same with function components by wrapping them in React.memo.

```
const MyComponent = React.memo(function MyComponent(props) {
 /* only rerenders if props change */
});
```
