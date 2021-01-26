# combined reducers

## review research and discussion

### Why choose Redux instead of the Context API for global state?

because it is more scalable and easier to use

### What is the purpose of a reducer?

to reduce state down to the parts of it that you want to access instead of having to access the entirety of state from your store each time

### What does an action contain?

it contains a type which is the case from the reducers switch and a payload which is the item being passed around

### Why do we need to copy the state in a reducer?

because you dont want to mutate your original state so that you always have a pure initial state to reference

## vocabulary

### immutable state

state that does not change. your initial state

### time travel in redux

using redux devtools you can record all actions on a webpage leading up to the bug then reset those actions to return back to where you were before the actions leading up to the bug

### action creator

a function that returns an action object

### reducer

function that reduces state down to and makes a copy of what portions you need access to based on input provided so that you have a pure initial state and a useful piece of state to manipulate

### dispatch

dispatch function are functions in the store used to manipulate state works along with the reducer

## preview questions

### Which 3 things had you heard about previously and now have better clarity on?

reducers and dispatch functions

### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?

combining reducers and conditional rendering using redux state

### What are you most excited about trying to implement or see how it works?

conditional rendering of a react-redux app