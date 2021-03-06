---
path: '/post-fiftyThree'
date: '2019-11-02'
time: '☕️ 2 min read'
title: 'Git #2: Back to a commit without losing work with "stash"
'
summary: 'Lets take a look at how to use git stash'
---

This article was done using my notes from Srebalaji Thirumalai, 2018, Git : Useful tricks you might not know about Git stash .

## When to use git stash ?

Let's assume you commited work and start working on your next patch. While doing so, you discovered you have been missing something on your previous patch.
You want to temporarily save your current work. That's where git stash comes in.

## Git stash

To save your current work, use git stash in the following manner:

```
git stash save

```

You can check all the work stashed with the following command:

```
git stash list

```

The most recent stash made will be in the top of the list.

## Add what your forgot, cancel your previous commit, and commit the new work

To add your new changes and add them to your commit, use this command:

```
git add -u
git commit --amend
```

## Back to work

To add back your stashed work is pretty easy. You can check your stashed work using git stash list.

To apply the last work stashed, use the following command:

```
git stash apply stash@{1}

or

git stash pop
```

To apply a precise piece of work your stashed, find it with git stash list, then apply it:

```
git stash apply stash@{1}
```
