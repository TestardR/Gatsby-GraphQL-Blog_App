---
path: '/post-sixtyFour'
date: '2019-11-13'
time: '☕️ 4 min read'
title: 'React #6: Use Higher-Order Components'
summary: 'Use HOC to create create powerful reusable functions '
---

This article was done using my notes from :

1. Christopher T., 2019, [8 Useful Tricks for React Apps You Should Know](https://jsmanifest.com/8-useful-tricks-in-react-you-should-know/).
2. Sooraj Chandran, 2018, [Introduction to higher order components (HOC) in React](https://medium.com/@soorajchandran/introduction-to-higher-order-components-hoc-in-react-383c9343a3aa)

## Functional programming and higher order functions

A higher order function is a function that accepts another function as an argument. The goal of this pattern is to decompose the logic into simpler and smaller functions that can be reused.

See the following example:

```
const multiply = (x) => (y) => x * y

multiply(5)(20)
```

## Higher order component in React

A higher-order component is a function that takes a component and returns a new component. HOC is not a feature in React or any other programming language, but a pattern evolved from the compositional ( made of components ) nature of react.

Just like how higher-order functions can be employed to abstract away logic and be shared amongst other functions in the app, higher-order components enable us to abstract away logic from components and share them amongst other components.

Here is an example of a higher-order component taken from Christopher T.. In this snippet, a higher-order component withBorder takes in a custom component and returns a hidden "middle layer" component. Then, when the parent decides to render this higher-order component that was returned, it is called as a component and receives the props that were passed in from the "middle layer component

Let's take a look at our HOC withBorder:

```
import React from "react";

// Higher order component
export default function withBorder(Component, customStyle) {
  class WithBorder extends React.Component {
    render() {
      const style = {
        border: this.props.customStyle
          ? this.props.customStyle.border
          : "3px solid teal"
      };
      return <Component style={style} {...this.props} />;
    }
  }

  return WithBorder;
}
```

Let's apply it to a regular component:

```
import React from "react";
import withBorder from "./../HOC/withBorder";

function MyComponent({ style, ...rest }) {
  return (
    <div style={style} {...rest}>
      <h2>This is my component and I am expecting some styles.</h2>
    </div>
  );
}

export default withBorder(MyComponent, {
  border: "4px solid teal"
});

```
