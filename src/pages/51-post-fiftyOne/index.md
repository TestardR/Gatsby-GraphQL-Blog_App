---
path: '/post-fiftyOne'
date: '2019-10-21'
time: '☕️ 2 min read'
title: 'K8S #3: Declaring a simple app'
summary: 'Lets take a look at how to declare a simple application'
---

This article was done using my notes from Joseph Heck, 2018, Kubernetes for Developers, Packt.

## Declaring an application

Let's take a look at a simple deployment file, name node.yml .

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: node
  labels:
    app: node
spec:
  selector:
    matchLabels:
      app: node
  template:
    metadata:
      labels:
        app: node
    spec:
      containers:
      - name: node
        image: node:latest
        ports:
        - containerPort: 5000

```

It is advisable to practice using the **--validate** option to have **kubectl** check the files, ad you can use it with **--dry-run** to compare the file to anything existing in Kubernetes. Using the **--validate** option, **kubectl** will warn you of missing fields or other problems.

```
kubectl apply -f deploy/node.yml --dry-run --validate
```

If you happened to make a typo, you will see an error reported in the output. Once the data is validated and works as you expect, you can create the object with the following command:

```
kubectl apply -f deploy/node.yml
```

It is easy to make mistakes. You can use **kubectl get** command to inspect specific resources. You can also use the **kubectl describe** command to see not only the state of resources, but all related events from Kubernetes about it .