# Object Oriented Programming

## Domain Modeling

A model desribes the various entities, their attributes and behaviors, as well as the constraints that govern the problem domain.
An entity that stores data in properties and encapsulates behaviors in methods is commonyly referred to as object-oriented programming

A domain model defines a vocabulary that can be used within and between both technical and business teams.

<!-- the following copied from https://github.com/codefellows/domain_modeling#domain-modeling 
Imagine you've been tasked to build a program that models the popularity of epic fail videos. After months of painstaking research, you've determined that the two essential metrics for gauging popularity are an epic rating and whether or not the video has animals.

Since you'll be modeling the popularity of many types of videos—parkour epic fails, corgi epic fails, etc.—you'll want to build self-contained objects with the same attributes and behaviors. That way, when you need to change the algorithm for determining popularity, the changes will be small and targeted. -->

## Define a constructor and initialize properties

```js
var epicFailVideo = function(epicRating, hasAnimals) {
    this.epicRating = epicRating;
    this.hasAnimals = hasAnimals;
}

var parkourFail = new epicFailVideo(7, false);
var corgiFail = new epicFailVideo(4, true);

console.log(parkourFail);
console.log(corgifail);
```

## Warm Up in class

- Write a function that takes 0 parameters and returns two strings

## Tables

<table> starts a table
<td> is tabledata
<tr> is a table row (horizontal flow)
<th> bolds and is tableheader and is used like a td use a td or th even on an empty cell
you can make table cells grow length with <colspan> and <rowspan> like rowspan=2 for two cell length
thead and tfoot can scroll ith the page so you don't have to annoyingly scroll up and down to reference your header while looking at a table(looking at you every govt website fucking ever incompetent shmucks I don't know what im doing and i could write a less shit website than you all)

## functions methods and objects

a function is perfectly logical piece of javascript code that makes perfect sense and is super easy to write and understand. Nobody has ever had problems with it ever.

invoking and calling a function are the same thing(because everything needs two seperate yet equally important definitions /s!)
you can call a function whenever itll run it reads it before it runs it(humans should do that with instruction manuals too!)
you need to pass the value of a local variable into a global variable if you need to access its data(my lab7 issue kind of)

## objects

Objects are what stage 4 colon cancer looks like in javascript format(a shitty excruciatingly painful mess)

Objects are a carcinogen per the state of California.

variables magically turn into properties inside of an object

an object is just a collection of functions and variables inside of one big function. BECAUSE WE NEED MORE NAMES FOR THE SAME SHIT ITS NOT CONFUSING AT ALL

a function inside of an object is called a method.(for whatever stupid reason)

when you name variables and functions inside of an object they are called keys(for fucking sakes why more names do you tech jargon vomitting codies not realize how confusing all this shit is? stop renaming the same thing it doesnt make you sound smart it makes you confusing and unapproachable call it a fucking function inside of a function inside of anotherfunction or whatever. functionception makes more sense.....)

THERE ARE SEVERAL WAYS TO CREATE OBJECTS(much like how they created multiple ways to torture you in medieval times)
use literal notation to create objects or use dot notation
there is also constructors which I did in lab

it says you can delete stuff inside objects with delete(but if you dont want it there you should just take the freaking code out? why write something you dont want only to write more stuff to delete the thing youn never wanted to begin with? that makes no sense just delete the freaking code like a normal person)

this doesnt tell me how to access specific data from multiple tables and dump that shit into a single variable. fucking awesome im still boned on lab!)

week 2 is too much. I cant afford to not understand this shit but i dont understand it at all.

your computer has built in objects. you cant reuse their names it wont let you
document is one of those objects
the shit on page 128 probably tells me how to access this string in lab. dunno which one though! or not maybe they are all global objects.

math stuff on page 134 read it everytime you need to use it math is stupid hard
