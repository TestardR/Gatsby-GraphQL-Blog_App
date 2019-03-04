---
path: '/post-eighteen'
date: '2019-02-28'
time: '☕️ 2 min read'
title: 'Vulns #12: Buffer Overflow'
summary: 'A Buffer Overflow is a situation where a program writing data to a buffer, or area of
memory, has more data to write than space that is actually allocated for that memory, leading to erractic program behaviour.'
---

This article was done using my notes from a book titled WEB Hacking 101 written by Peter Yaworksi in 2018.

<sub>Yaworksi P. (2018). Web Hacking 101, How To Make Money Hacking Ethically</sub>

## What is a Buffer Overflow ?

As said in the summary, a Buffer Overflow is a situation where a program writing data to a buffer, or area of
memory, has more data to write than space that is actually allocated for that memory. Buffer Overflows lead to erratic program behaviour at best and a serious security
vulnerability at worst.

The reason is, with a Buffer Overflow, a vulnerable program
begins to overwrite safe data with unexpected data, which may later be called upon.
If that happens, that overwritten code could be something completely different that the
program expects which causes an error. Or, a malicious hacker could use the overflow
to write and execute malicious code.

## Read data ouf of bounds

In addition to writing data beyond the allocated memory, another vulnerability lies in
reading data outside a memory boundary. This is a type of Buffer Overflow in that
memory is being read beyond what the buffer should allow.

A famous and recent example of a vulnerability reading data outside of a memory bound-
ary is the OpenSSL Heartbleed Bug, disclosed in April 2014. At the time of disclosure, ap-
proximately 17% (500k) of the internet’s secure web servers certified by trusted authori-
ties were believed to have been vulnerable to the attack (Dewey, 2014).

<sub>Dewey C. (2014). Why is it called the 'Hearthbleed Bug'?, Washington Post, url : https://www.washingtonpost.com/news/arts-and-entertainment/wp/2014/04/09/why-is-it-called-the-heartbleed-bug/?noredirect=on&utm_term=.8a83b3b490d4</sub>
