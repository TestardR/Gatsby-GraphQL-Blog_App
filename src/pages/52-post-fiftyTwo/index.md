---
path: '/post-fiftyTwo'
date: '2019-11-01'
time: '☕️ 3 min read'
title: 'Git #1: Cancel a commit before / after "push"'
summary: 'Lets take a look at how to deal with unwanted commits'
---

This article was done using my notes from Mathieu Leplatre, 2011/2017, Git : annuler proprement un commit après un push.

## Logs and History

To be more at ease with git, first you need to make good use of your logs. It will allow you to list and move around among your commits.

For this, use the following command:

```
git log

```

Using it, you can access logs such as the followings. To come back your prompt, just press **q**.

```
commit 10dd143814e23732d8517b73ee76e48eb0192459 (HEAD -> master, origin/master, origin/HEAD)
Author: unknown
Date:   Mon Oct 21 19:13:22 2019 +0200

    I have added an article on K8S on easy setup

commit 7b0c0f07b71a972c29005fcca5bfe624f43d30eb
Author: unknown
Date:   Sun Oct 20 19:34:19 2019 +0200

    I have added an article on K8S debugging techniques

```

As you can see, each of commits is allocated an ID. These IDs altogether are known as your history. You want to take good care of your history. Making a mess of your history will create conflicts for others developers pulling from your repository.

## Cancel a commit before "push"

To cancel a commit, I would advise to use your logs. The **reset** command allows you to come back to the commit you wish to come back to. Adding to the command the **--hard** flag will erase your work done after the wished commit. Adding the **--soft** flag will save your work done after the wished commit. You would have then to recommit the canceled work.

```
git reset --hard 7b0c0f07b71a972c29005fcca5bfe624f43d30eb

or

git reset --soft 7b0c0f07b71a972c29005fcca5bfe624f43d30eb

```

Sometimes you may read commands as such:

```
git reset --hard HEAD~1

or

git reset --soft HEAD~1

```

In this case **HEAD~1** means cancel the second commit from the HEAD.

## Cancel a commit after "push"

In the case, you pushed a commit you want to cancel. You have to use the **revert** command. Same as before, you would want to revert to a specific commit. To do so, you can use the ID of a commit or decide how many commits from the HEAD you want to go back (**HEAD~12**).

```
git revert 7b0c0f07b71a972c29005fcca5bfe624f43d30eb..HEAD

```

It will revert the changes from this commit in master to the last commit included in master (HEAD). It will not create a commit with the reverted changes. The revert only modified the working tree and the index.

```
git revert HEAD~1..HEAD

```

It will revert the changes from the second commit in master to the last commit included in master (HEAD). It will not create a commit with the reverted changes.

In both cases, you still have to commit the changes you have done using revert to the working tree !
