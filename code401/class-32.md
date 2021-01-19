# Custom Hooks

## Review Research Discussion

### What does a component’s lifecycle refer to?

the time starting when the component mounts for the first time until when it is removed(unmounted) from the DOM

### Why do you sometimes need to “wrap” functions in useCallback when called from within useEffect

If you are passing the function on to child component as props and the child component doesn't often need re-rendering except when a certain prop change then useCallback might prevent certain re-renders.
<!--https://stackoverflow.com/questions/57156582/should-i-wrap-all-functions-that-defined-in-component-in-usecallback-->

### Why are functional components preferred over class components?

Functional component are much easier to read and test because they are plain JavaScript functions without state or lifecycle-hooks. You end up with less code. They help you to use best practices.
<!--https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108#:~:text=But%20there%20are%20some%20benefits,you%20to%20use%20best%20practices.-->

### What is wrong with the following code?

it is not pushing any value into rendered item. it is only pushing a div with a key of I and the word item

## Definitions

### state hook

a hook for state to transfer it from one component to another

### effect hook

a hook for useEffect to transfer it around functional components

### reducer hook

reduces state down to what you need so that you aren't overutilizing space on rerender

## Preview

### Which 3 things had you heard about previously and now have better clarity on?

react hooks and functional components

### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?

putting functional react components into aws as lambda functions to create a serverless react front end

### What are you most excited about trying to implement or see how it works?

a serverless react front end with a responsive and fully tested backend
