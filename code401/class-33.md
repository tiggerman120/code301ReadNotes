# Context API

## review research discussion

### Describe use cases for useMemo() and useReducer()
useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

Returns a memoized value.
Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
so its usecase is optimization and avoiding costly rerenders

### Why do custom hooks need the use prefix?

because thats how react interprets them as handlers for state

### What do custom hooks usually do?

Custom hooks allow you to create functionality that can be reused across different components. You can of course just have functions to reuse functionality, but hooks come with the advantage of being able to 'hook' into things like component lifecycle and state.
<!--https://dev.to/wellpaidgeek/how-to-write-custom-hooks-in-react-1ana#:~:text=Custom%20hooks%20allow%20you%20to,like%20component%20lifecycle%20and%20state.-->

### Using any list of custom hooks, research and name one that you think will be useful in your applications

use reducer because we are going to be learning redux next week and it is used with that

### Describe how a hook that fetches API data might work
the hook fetches the api data, manipulates that data, and returns a value(s) that you specify so it can be used elsewhere

## vocabulary

### reducer

Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. 

## preview

### Which 3 things had you heard about previously and now have better clarity on?

custom hooks

### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?

custom hooks react components building a front end with react hosted through aws lambda

### What are you most excited about trying to implement or see how it works?

building a front end using react and aws
