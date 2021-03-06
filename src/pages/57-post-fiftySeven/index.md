---
path: '/post-fiftySeven'
date: '2019-11-06'
time: '☕️☕️ 8 min read'
title: 'Algo #16: Sentence Capitalization'
summary: 'Lets take a deep dive into forEach() and map() with Philip Oboso'
---

This article was done using my notes from Philip Oboso, 2019, String Reversal.

## The Challenge

Given a string, write an algorithm that returns the same sentence with each work capitalized

```
capSentence('algorithms are good for your brain') // would return 'Algorithms Are Good For Your Brain'
```

## Using .forEach() Method

```
function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    let capsArray = []

    wordsArray.forEach(word => {
        capsArray.push(word[0].toUpperCase() + word.slice(1))
    });

    return capsArray.join(' ')
}
```

## Using .map() and .slice()

```
function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    let capsArray = wordsArray.map(word=>{
        return word[0].toUpperCase() + word.slice(1)
    })
    return capsArray.join(' ')
}
```

## Using .map() and .replace()

```
function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')

    let capsArray = wordsArray.map( word=>{
        return  word.replace(word[0], word[0].toUpperCase())
    })

    return capsArray.join(' ')
    }
```
