# class 03

## questions
Name 3 real world use cases where you’d want to change the request with custom middleware
user sending bad data. user non validation(authentication?) if the user tries to enter a 504 path.

True or false: The route handler is middleware?: 
false

In what ways can a middleware function end the process and send data to the browser?
session timeout middleware would hit the timeout and end the process and send the timeout message to the user

At what point in the request lifecycle can you “inject” middleware?
 at any point during the request lifecycle

What can cause express to error with “Request headers sent twice, cannot start a second response”
 by attempting to send an error code twice

## definitions

Middleware:Middleware is software that provides common services and capabilities to applications outside of what’s offered by the operating system.
<!-- https://www.redhat.com/en/topics/middleware/what-is-middleware assisted with this answer -->

Request Object: the request object is the input provided by the user(req.query)
Response Object: the response object is the data provided to fulfill the request objects request
Application Middleware: middleware that effects the application
Routing Middleware: middleware that provides routing functionality
Test Driven Development: writing tests then writing code to pass the tests then refactoring code to meet levels of simplicity
Behavioral Testing: Behavior Driven Development (BDD) is a branch of Test Driven Development (TDD). BDD uses human-readable descriptions of software user requirements as the basis for software tests. Like Domain Driven Design (DDD), an early step in BDD is the definition of a shared vocabulary between stakeholders, domain experts, and engineers. This process involves the definition of entities, events, and outputs that the users care about, and giving them names that everybody can agree on.
<!-- https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2 assisted with this answer-->

## 3 things

I have more clarity on next(), middleware conceptually, and the goals behind unit testing
I am eager to learn about validation, mongoBD, and more about unit testing

I am most interested in learning mongoDB and templating because I struggle with databases and templating.