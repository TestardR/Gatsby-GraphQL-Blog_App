---
path: '/post-twentySix'
date: '2019-03-09'
time: '☕️☕️☕️ 12 min read'
title: 'Algo #8: pyramid()'
summary: 'In this Javascript serie, we will take a look at how to build two sided steps. A pyramid !'
---

This article was done using my notes from Stephen Grider's amazing course on algorithms and data structures, available at : https://www.rallycoding.com/

## pyramid()

Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the # character. Make sure the pyramid has spaces on both the left _and_ right hand sides

For example:<br>
pyramid(1)<br>
'#'<br>
pyramid(2)<br>
' # '<br>
'###'<br>
pyramid(3)<br>
' # ' // there are 5 characters per row<br>
' ### '<br>
'#####'

```
Solution 1:

function pyramid(n) {

    const midpoint = Math.floor((n * 2 - 1) / 2);

    for (let row = 0; row < n; row++) {

        let stair = '';

        for (let column = 0; column < (n * 2 - 1); column++) {

            if( midpoint - row <= column && midpoint + row >= column) {
                stair += '#'
            } else {
                stair += ' ';
            }

        }
        console.log(stair);
    }

}


```

```
Solution 2:

function pyramid(n, row = 0, stair = '') {

    const midpoint = Math.floor((n * 2 - 1) / 2);

    if(row === n) {
        return;
    }

    if(stair.length === n * 2 - 1) {
        console.log(stair);
        pyramid(n, row++);
        return;
    }

    let add = midpoint - row <= stair.length && midpoint + row >= stair.lenght ? '#' : ' ';
    stair += add;

    pyramid(n, row, stair + add);
}
```
