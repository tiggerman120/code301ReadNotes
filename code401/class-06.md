# day 6 notes

## singleton pattern

The singleton pattern is a software design pattern that restricts the instantiation of a class to a single instance

The singleton design pattern solves problems like:

How can it be ensured that a class has only one instance?
How can the sole instance of a class be accessed easily?
How can a class control its instantiation?
How can the number of instances of a class be restricted?
<!-- https://en.wikipedia.org/wiki/Singleton_pattern assisted with this question-->


## definitions

router middleware: middleware that executes during the request/response lifecycle of a route call

dynamic module loading: Dynamic import() introduces a new function-like form of import that caters to those use cases. import(moduleSpecifier) returns a promise for the module namespace object of the requested module, which is created after fetching, instantiating, and evaluating all of the module's dependencies, as well as the module itself
<!--https://v8.dev/features/dynamic-import assisted with this answer-->

singleton pattern: The singleton design pattern is one of the twenty-three well-known "Gang of Four" design patterns that describe how to solve recurring design problems to design flexible and reusable object-oriented software, that is, objects that are easier to implement, change, test, and reuse.
<!--https://en.wikipedia.org/wiki/Singleton_pattern assisted with this answer-->

crud rest method matches:
Create read update delete
put    get   post  delete

mock testing: mocking a server so you can test without flooding the server with traffic

