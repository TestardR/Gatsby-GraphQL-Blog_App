---
path: '/post-sixty'
date: '2019-11-09'
time: '☕️ 5 min read'
title: 'React #2: Retain Previous Values with useRef'
summary: '2nd of 8 useful tricks for React Apps with jsmanigest'
---

This article was done using my notes from jsmanifest, 2019, 8 Useful Tricks for React Apps You Should Know.

## Retain Previous Values

While updating props or state, you can retain their previous values just by using **React.useRef**.

For example, to track the current and previous changes of an array of items, you can create a **React.useRef** which gets assigned the previous value and a **React.useState** for the current value:

```
function MyComponent() {
  const [names, setNames] = React.useState(['bob'])
  const prevNamesRef = React.useRef([])

  React.useEffect(() => {
    prevNamesRef.current = names
  })

  const prevNames = prevNamesRef.current

  return (
    <div>
      <h4>Current names:</h4>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <h4>Previous names:</h4>
      <ul>
        {prevNames.map((prevName) => (
          <li key={prevName}>{prevName}</li>
        ))}
      </ul>
    </div>
  )
}
```

When setNames is called, the component re-renders and prefNamesRef will hold the previous names because **React.useEffect** is the last code executed from the previous render.

And, since we re-assigned prevNamesRef.current in the **useEffect**, it becomes the previous names in the next render phase because it was last assigned the names from the previous render phase.
