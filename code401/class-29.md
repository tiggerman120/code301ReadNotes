# Routing

## Review Research and Discussion

Do child components have direct access to props/state from the parent?
no they need to be passed props to have access to the parent
When a component “wraps” another component, how does the child component’s output get rendered?
It gets rendered after the parent as a dependant component of the parent
Can a component, such as Content, which is a child also be used as a standalone component elsewhere in the application?
yes 
What trick can a parent use to share all props with it’s children
you can pass props with a spread operator <childComponent {...props} />

## definitions

props.children
it is used to display whatever you include between the opening and closing tags when invoking a component.
<!--https://stackoverflow.com/questions/49706823/what-is-this-props-children-and-when-you-should-use-it-->
composition
a more “specific” component renders a more “generic” one and configures it with props
<!--https://reactjs.org/docs/composition-vs-inheritance.html-->

## preview questions

Which 3 things had you heard about previously and now have better clarity on?
components, classes, and props
Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
props state and using crud routes
What are you most excited about trying to implement or see how it works?
building a full-stack web application utilizing aws and react