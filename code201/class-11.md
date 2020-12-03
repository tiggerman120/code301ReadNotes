# error handling and debugging

## order of execution

function greetUser() {
    return 'Hello ' + getName();
}
function getName() {
    var name = 'Molly';
    return name;
}
var greeting = greetUser();
alert(greeting);

1,2,3,2,1,4. This is the order of operations for that operation
1 the greeting variable gets its value from the greetUser() function.
2 greetUser creates the message by combining the string 'Hello ' with the result of getName().
3 getName() returns the name to greetUser().
2greetUser() now knows the name, and combines it with the string. It then returns the message to the statement that called it in step 1.
1 the value of the greeting is stored in memory.
4 this greeting variable is written to an alert box.

## execution contexts

every statement in a script lives in one of three execution contexts:
global context code that is in the script, but not in a function. there is only one global context in any page.

function context code that is being run within a function. each function has its own function context.

eval context (not shown) Text is executed like code in an internal function called eval() (not covered in the book).

variable scope the first two execution contexts correspond with the notion of scope
the global scope if a variable is declared outside of a function, it can be used anywhere because it has a global scope. if you do not use a var keyword when declaring a variable then it is given a gobal scope.

function-level scope when a variable is declared within a function, it can only be used within that function, This is because ir has function-level scope.

## the stack

the javascript interpreter processes one line of code at a time. when a statement needs data from another function, it stacks the new function on top of the current task.

## understanding errors (very important)

if a javascript statement generates an error, then it throws an exception. At that point, the interpreter stops and looks for exception-handling code.

error - generic error the other errors are based off of this error.
syntaxerror - syntax has not been followed
referenceerror- tried to reference a variable that is not declared/within scope
typeerror- an unexpected data type that cannot be coerced
rangeerror - numbers not in acceptable range
URIerror - encodeURI(), decodeURI(), and similar methods used incorrectly.
evalerror - eval() function used incorrectly.
READ PAGE 460 AND 461 FOR MORE DEETS

## dealing with errors

1 debug the script to fix errors(dev tools and console logs, baby)
2handle errors gracefully. sometimes errors happen outside of your control(requesting data from third parties) so you need to write error handling code

look at the error message to figure out what and where
console.log at where and use breakpoints(breakpoints are the blue errors in dev console on chrome) where things are going wrong

after breakpoints are set you can check data for correct values
break down your code to test it in pieces to find whats wrong.
rinse repeat until debugged(or just outsource your code writing at your 110k google job to someone in another country for 25% and not actually do work).

page 471 for a little bit of structure on creating console logs
you can make groups of console logs with console.group followed by the individual console logs and console.groupEnd after

you can set breakpoints in your code using the "debugger" keyword

if you suspect buddy use try catch finally.
specify the code you think might throw an error in try
if the try code throws an exception catch steps in with an alternative set of code
(this is where youd have the webpage display an error to the user on a live website)
and finally runs last no matter what and uses .done() .fail() and .always() in JQuery
