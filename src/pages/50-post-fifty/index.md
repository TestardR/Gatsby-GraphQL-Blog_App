---
path: '/post-fifty'
date: '2019-10-20'
time: '☕️ 6 min read'
title: 'K8S #2: On debugging techniques'
summary: 'Lets take a look at techniques to work with code deployed into an existing cluster'
---

This article was done using my notes from Joseph Heck, 2018, Kubernetes for Developers, Packt.

## Streaming the logs

If you want to take a look at the logs of a single container in a Pod. If there is only one container, you don't need to specify it. You can run the following command:

```
kubectl logs
```

Likewise, if you need a specific container, you can specify it with the **-c** option. You should run

```
kubectl logs <pod-name> -c <container-name>
```

A common desire for developers is to see a continuously flowing set of logs from your container, updated as the container provides the information.
You can enable this with the **-f** option. For example, to see the updated logs from the Pod associated with a **node** deployment, you can run the following command:

```
kubectl logs deployment/node -f
```

## Timestamps

Timestamps are available for the log output, although not by default. You can get the log messages prefixed by a timestamp by adding the **--timestamps** option.

```
kubectl logs deployment/node --timpestamps
```

## Interactive deployment of an image

You can use **kubectl run** command to start an interactive session with a Pod. It can be useful to log in and see what is available in a container image.
For example, if you wanted to run a shell to look around inside a base Alpine container image used for a node.js example, you could run the following command :

```
kubectl run -i -t alpine-interactive --image=alpine -- sh
```

The **-i** makes the session interactive, and the **-t** option indicated that it should allocate a Terminal session for the interactive output. The trailing **-- sh** is an override to provide a specific command to be invoked with this session, this case **sh**, asking to execute the shell.

As an example, you can do this with a Python image. To bring it up as an interactive session that you can later delete, use the following command:

```
kubectl run -i -t python-interactive --image=<your-image> --command -- /bin/sh
```

Once you are done interacting with this deployment, you can exit the shell by pressing **Ctrl D** or by typing **exit**.

This is leaving, the deployment running, so you can reattach to it using, the preceding command, or you can delete the deployment and recreate it again when/if you want it. To delete it, you would use the following command:

```
kubectl delete deployment python-interactive
```

## Attaching to a running Pod

If your pod is up and running, and you want ro run some commands withing the context of that container image, you can attach an interactive session to it. You do this via the **kubectl attach** command. A Pod must be active for this command to work.

If you create a deployment using the following command:

```
kubectl run nodejs --image=<your-image> --port=3000
```

You could attach to this Pod using the following command:

```
kubectl attach deployment/express -i -t
```

Thereafter, when you interact with the service, you will see **stdout** streamed in the Terminal window.

This is the most effective if your application prints its logs to **stdout** and you want to watch those logs while you interact with your code, for example by using a web browser.To use a web browser to interact with your running Pod, remember to use either the **kubectl proxy** or **kubectl port-forward** commands, typical from another Terminal window to route access from your computer to your Pod within the cluster.

## Running a second process in a container

It might be more useful to run an additional command in a Pod rather than attempting to attach to the Pod. You can do this with the **kubectl exec** command. If you want to open an interactive shell in a Pod, you could run the following command:

```
kubectl exec <pod-name> -it -- /bin/sh
```
