---
path: '/post-fiftySix'
date: '2019-11-05'
time: '☕️ 6 min read'
title: 'Algo #15: Finding the most recurring character with charMap'
summary: 'Lets take a deep dive into charMaps with Philip Oboso'
---

This article was done using my notes from Philip Oboso, 2019, String Reversal.

## The Challenge

Given a string, write an algorithm that returns the most recurring character.

```
maxRecurringChar('algorithms what a pleasure') // should return 'a'
```

## Character mapping & For ... in iteration

```
function maxRecurringChar(str) {

  let charMap = {};
  let maxCharValue = 0;
  let maxChar = "";

  for (let char of str) {
    console.log(charMap.hasOwnProperty(char));
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      maxCharValue = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
```

## Forming Arrays from the Character Map

```
function maxRecurringChar(text) {

    let charMap = {}
    let charArray =[]
    let valuesArray = []
    let maxCharValue = 0

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    charArray = Object.keys(charMap)
    valuesArray = Object.values(charMap)
    maxCharValue = Math.max(...valuesArray)

    return charArray[valuesArray.indexOf(maxCharValue)]
}
```
