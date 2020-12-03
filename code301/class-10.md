# THE CALL STACK

## call stack

A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.

Temporarily store: When a function is invoked (called), the function, its parameters, and variables are pushed into the call stack to form a stack frame. This stack frame is a memory location in the stack.

Manage function invocation (call): The call stack maintains a record of the position of each stack frame. It knows the next function to be executed (and will remove it after execution). This is what makes code execution in JavaScript synchronous.

A stack overflow occurs when there is a recursive function (a function that calls itself) without an exit point. The browser (hosting environment) has a maximum stack call that it can accomodate before throwing a stack error.

The key takeaways from the call stack are:

1. It is single-threaded. Meaning it can only do one thing at a time.
2. Code execution is synchronous.
3. A function invocation creates a stack frame that occupies a temporary memory.
4. It works as a LIFO — Last In, First Out data structure.

Reference errors
This is as simple as when you try to use a variable that is not yet declared you get this type os errors.
This is also a common thing when using const and let, they are hoisted like var and function but there is a time between the hoisting and being declared so when you try to access them a reference error occurs, the fact that this happens to let and const is called Temporal Dead Zone (TDZ).

Syntax errors
I know it’s in the name of the errors, but like it says itself, this occurs when you have something that cannot be parsed in terms of syntax, like when you try to parse an invalid object using JSON.parse.

Range errors
Try to manipulate an object with some kind of length and give it an invalid length and this kind of errors will show up.

Type errors
Like the name indicates, this types of errors show up when the types (number, string and so on) you are trying to use or access are incompatible, like accessing a property in an undefined type of variable.

You can also add conditional breakpoints by right-clicking a previous set breakpoint, which will make your program stop at that point only if a condition is met

An alternative it’s to encapsulate our problematic function code with a try…catch which would make an error be thrown but this time, not “uncaught” so we can send it to a error logging to be checked later and send a fallback to the function so that our code continues without problems.

JS is not a compiled language like Java so your errors will happen at runtime, that means that you can only see whatever is wrong with your code after your run it.
Thankfully, to save us quite some time you can use tools like:
quokka to evaluate your code as you type
eslint to make sure your style guide is consistency and it will grab you an error or two along the way and
For those of you looking to make JS a more strong typed experience you can check out stuff like TypeScript (like I said in a previous article, when learning I rather avoid libraries that abstract the core language so I wouldn’t recommend this last one when starting).