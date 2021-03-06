---
path: '/post-twentyFive'
date: '2019-03-08'
time: '☕️☕️ 8 min read'
title: 'Algo #7: steps()'
summary: 'In this Javascript serie, we will take a look at how to build steps'
---

This article was done using my notes from Stephen Grider's amazing course on algorithms and data structures, available at : https://www.rallycoding.com/

## setps()

Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character. Make sure the
step has spaces on the right hand side!

For example: <br>
steps(2)<br>
'# '<br>
'##'<br>
steps(3)<br>
'# '<br>
'## '<br>
'###'<br>
steps(4)<br>
'# '<br>
'## '<br>
'### '<br>
'####'<br>

For the first solution, we will imagine the result as a matrix. A matrix is made rows and columns.
As such, we will iterate through rows and columns. Whenever the column number is inferior or equal to the row number, we would want a '#' and otherwise a ' '.

```
Solution 1:

function steps(n) {

    for(let row = 0; row < n; row++) {

        let stair = '';

        for(let column = 0; column < n; column++) {

            if(column <= row) {
                stair += '#';
            } else {
                stair += '';
            }

        }
        console.log(stair)
    }

}


```

For the second solution, we will move towards a recursive solution. The idea is still the same, we will use stair.length instead of columns.

```
Solution 2:

function steps(n, row = 0, stair = '') {

    // we reached the end of our problem
    if(n === row) {
        return;
    }

    // we reached the end of our row
    if(n === stair.length) {
        console.log(stair);
        steps(n, row + 1);
        return;
    }

    // same as in the previous solution
    const add = stair.length <= row ? '#' : ' ';

    // call the process again
    steps(n, row, stair + add);
}
```
