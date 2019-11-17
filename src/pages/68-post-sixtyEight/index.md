---
path: '/post-sixtyEight'
date: '2019-11-17'
time: '☕️ 4 min read'
title: 'Algo #20: Search and Replace'
summary: 'Find a given word in a sentence and replace it using Reg Exp with Philip Oboso'
---

This article was done using my notes from Philip Obosi, 2019, [The Ultimate Guide to JavaScript Algorithms Courses](https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms).

## The Challenge

Given a sentence, write a function that replaces a word by another.

```
searchReplace("Algorithms solving is good for your Soul", "soul", "Mind")
//should return "Algorithms solving is good for your Mind"
```

## Using .replace()

```
function searchReplace(txt, word, newWord) {
  if (word[0] === word[0].toUpperCase()) {
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  }
  return txt.replace(word, newWord);
}
```

## Using Regular Expressions

```
function searchReplace(txt, word, newWord) {
  let regex = new RegExp(word, "gi");
  if (/[A-Z]/.test(word[0])) {
    newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
  }
  return txt.replace(regex, newWord);
}
```
