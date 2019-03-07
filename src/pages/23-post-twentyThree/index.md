---
path: '/post-twentyThree'
date: '2019-03-06'
time: '☕️ 2 min read'
title: 'Algo #5: arrayChunk()'
summary: 'In this serie on Javascript, we will take a look a how to chunk arrays.'
---

This article was done using my notes from Stephen Grider's amazing course on algorithms and data structures, available at : https://www.rallycoding.com/

## chunk()

Given an array and chunk size, we want a function that divides the array into many subarrays where each subarray is of length size.

For example:<br>
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]<br>
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]<br>
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]<br>
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]<br>
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]<br>
