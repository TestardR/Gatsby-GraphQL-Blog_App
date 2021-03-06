---
path: '/post-twentyFour'
date: '2019-03-07'
time: '☕️ 3 min read'
title: 'Algo #6: capitalize()'
summary: 'In this serie on Javascript, we will take a look a how to capitalize the first letter of each word in a sentence'
---

This article was done using my notes from Stephen Grider's amazing course on algorithms and data structures, available at : https://www.rallycoding.com/

## capitalize()

Write a function that accepts a string. The function should capitalize the first letter of each word in the string then
return the capitalized string.

```
Solution 1:

function capitalize(str){

    const words = [];

    for(let word of str.split(' ')){

        // push in words each word
        // capitalize its first letter and concatinate it with the rest of the word
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' '); // rebuild the string from the array

}
```

```
Solution 2:

function capitalize(str) {

    let result = str[0].toUpperCase();

    // iterate through the rest of the str
    for(let i = 1; i < str.length; i ++) {

        // if the preceding value is a space, then capitalize the following letter
        if(str[i - 1 === ' ']) {

            result += str[i].toUpperCase();

        } else {

            result += str[i];

        }
    }

    return result;
}
```
