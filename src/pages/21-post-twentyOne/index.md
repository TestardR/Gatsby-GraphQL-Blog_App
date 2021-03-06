---
path: '/post-twentyOne'
date: '2019-03-04'
time: '☕️☕️ 8 min read'
title: 'Algo #3: maxChar(), anagrams()'
summary: 'In this serie on Javascript, we will find ways to get the most commonly used character in a string'
---

This article was done using my notes from Stephen Grider's amazing course on algorithms and data structures, available at : https://www.rallycoding.com/

## maxChar()

Given a string, we want a function that returns the character that is most commonly used in the string.

For example:<br>
maxChar("abcccccccd") === "c"<br>
maxChar("apple 1231111") === "1"

Similar questions:<br>
What is the most common character in the string ?<br>
Does string A have the same characters as string B (is it an anagram) ?<br>
Does the given string have any repeated characters in it ?

To store the number of appearance of each character, we will use an object.
For each character, we will count the number of times it appears and assign it a value to its key.<br>
As such, { a: 1, b: 2, z: 6}, finally we will return the key for the highest value (z).

```
function maxChar(str){
    let charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str) {
        // shorter than a if statement
        charMap[char] = charMap[char] + 1 || 1;

    };

    // to loop through an object use for ... in
    for(let char in charMap) {
        if(max > charMap[char]) {
            max = charMap[char];
            maxChar = char;
        }
    }

    // give a the most commonly used character
    return maxChar;
}
```

## anagrams()

Check to see if two provided strings are anagrams of eachother.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation. Consider capital letters to be the same as lower case

For example:<br>
anagrams('rail safety', 'fairy tales') --> True<br>
anagrams('RAIL! SAFETY!', 'fairy tales') --> True<br>
anagrams('Hi there', 'Bye there') --> False

```
Solution 1: // using Objects

// First, let's build a function helper
function buildCharMap(str) {

    const charMap = {};
    // remove any non word items in our str with empty strings
    const cleanString = str.replace(/[^\w]/g, '').toLowerCase();

    for(let char of cleanString) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

function anagrams(stringA, stringB) {

    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    // compare object length
    if(Object.keys(charMapA).length != Object.keys(charMapB).length) {
        return false;
    }

    // loop through the objects to compare values according to their common keys
    for(let char in charMapA) {
        if(charMapA[char] !== charMapB[char]) {
            return false;
        }

    }

    return true;

}


```

```
Solution 2: // using Arrays

function cleanString(str) {

    return str
            .replace(/[^\w]/g, '')
            .toLowerCase()
            .split('') // to sort we have to use arrays
            .sort()
            .join('');

}

function anagrams(stringA, stringB) {

    return cleanString(stringA) === cleanString(stringB);

}
```
