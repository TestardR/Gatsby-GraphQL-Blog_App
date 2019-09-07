---
path: '/post-fortyTwo'
date: '2019-08-29'
time: '☕️ 5 min read'
title: 'JS #10: Behavior Delegation & OLOO'
summary: 'We take a look at Behavior Delegation and the Objects Linked to Other Objets programing'
---

This article was done using my notes from Kyles Simpson, 2014, This & Object prototypes. It is a part of a very well written serie on Javascript that every developer should take a look at.

## Behavior Delegation

According to Kyle Simpson, classes and inheritance are a design pattern a developer can choose in a software architecture. Most developers take for granted that classes are the only (proper) way to organize code. But, there are other ways, among them the quite powerful: _Behavior Delegation_.

Behavior delegation suggests objects as peers of each other, which delegate among themselves, rather than parent and child class relationships, JavaScript's [ [ Prototype ] ] mechanism is, by its very designed nature, a behavior delegation mechanism. When you design your code with objects only, not only does it simplify the syntax you use, but it can actually lead to simpler code architecture design.

### Behavior Delegation

OLOO (objects linked to other objects) is a code style that creates and relates objects directly without the abstraction of classes. OLOO quite naturally implements [ [ Prototype ] ]-based behavior delegation.

Consider the following typical class design pattern:

```
// Parent class
function Controller() {

  this.errors = [];

}

Controller.prototype.showDialog = function(title, msg) {

  // display title & message to user in dialog

};

Controller.prototype.success = function(msg) {

  this.showDialog("Success", msg);

};

Controller.prototype.failure = function(err) {

  this.errors.push( err );

  this.showDialog("Error", err);

}

// Child class

function LoginController() {

  Controller.call( this );

}

// Link child to parent
LoginController.prototype = Object.create( Controller.prototype );

LoginController.prototype.getUser = () {

  return document.getElementById( "login_username" ).value;

};

LoginController.prototype.getPassword = () {

  return document.getElementById( "login_password" ).value;

};

// Override to extend base 'failure()'
LoginController.prototype.failure = function(err) {

  // "super" call

  Controller.prototype.failure.call(

    this,

    "Login invalid: " + err

  )

}

var login = new LoginController();

login.getUser();

```

Consider the following OLOO design pattern:

```
var LoginController = {

  errors: [],
  getUser: function() {

    return document.getElementById( "login_username" ).value;

  },

  getPassword: function() {

    return document.getElementById( "login_password" ).value;

  },

  showDialog: function(title, msg) {

    // display success message to user in dialog

  }

  failure: function(err){

    this.errors.push(err);

    this.showDialog("Error", "Login invalid: " + err);

  }

};

// To delegate to another controller, for instance "AuthController", we just need to:

var AuthController = Object.create( LoginController );

AuthController.getUser();

```
