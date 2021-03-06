---
path: '/post-twentySeven'
date: '2019-03-10'
time: '☕️☕️ 8 min read'
title: 'Algo #9: vowels()'
summary: 'In this Javascript serie, we will take a look at how to count the number of vowels in a string'
---

This article was done using my notes from Stephen Grider's amazing course on algorithms and data structures, available at : https://www.rallycoding.com/

## vowels()

Write a function that returns the number of vowels used in a string. Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.

For example:<br>
vowels('Hi There!') --> 3<br>
vowels('Why do you ask?') --> 4<br>
vowels('Why?') --> 0

```
Solution 1:

function vowels(str) {

    let count = 0;

    const vowel = [a, e, i, o, u] // in English 'y' does not seem to be a vowel.

    for(let char of str.toLowerCase()) {

        if(vowel.includes(char)) {

            count++;

        }
    }

    return count;

}

```

```
Solution 2:

function vowels(str) {

    // g makes sure we don't stop at the first match
    // i makes our match case insensitive
    // match will return an array of matches if any OR null if no match

    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;

}


```
