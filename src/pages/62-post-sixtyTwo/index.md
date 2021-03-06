---
path: '/post-sixtyTwo'
date: '2019-11-11'
time: '☕️ 4 min read'
title: 'React #4: Use useRef for flexible non-stale value checks'
summary: 'Use useRef to implement checking tags with Christopher T.'
---

This article was done using my notes from Christopher T., 2019, [8 Useful Tricks for React Apps You Should Know](https://jsmanifest.com/8-useful-tricks-in-react-you-should-know/).

## Use useRef for flexible non-stale value checks

If we want to ensure operations like fetching data happen after the component mounts on the DOM, we should use **useEffect** and **useRef**. **useEffect** is executed after components are finished rendering and **useRef** is used to assign the value of the mounted value.

```
import React, {useEffect, useRef, useState } from 'react'
import axios from 'axios'

export function MyComponent() {
  const [quotes, setQuotes] = useState([])
  const [error, setError] = useState(null)
  const mounted = useRef(false)

  async function fetchQuotes(uri) {
    try {
      const response = await axios.get(uri)
      console.log(response.data)
      if (mounted.current) {

        // This API responds with a single object
        setQuotes([response.data.quote])

      }
    } catch (error) {
      if (mounted.current) {
        setError(error)
      }
    }
  }

  useEffect(() => {
    mounted.current = true
    fetchQuotes('https://api.kanye.rest/')

    // Clean up, equivalent to ComponentWillUnmount()
    return function cleanup() {
      mounted.current = false
    }
  }, [])

  return (
    <div>
      <h4>Quote from Kanye:</h4>
      <ul>
        {quotes.map((quote) => (
          <li key={quote}>{quote}</li>
        ))}
      </ul>
    </div>
  )
}
```
