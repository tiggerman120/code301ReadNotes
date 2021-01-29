# redux additional topics

## review research and discussion

### What’s the best practice for “pre-loading” data into the store (on application start) in a Redux application?
The most 'redux-like' way of handling the pre-loading of data would be to fire off the asynchronous action in the lifecycle method (probably componentWillMount) of a Higher Order Component that wraps your app. However, you will not use the results of the API call directly in that component - it needs to be handled with a reducer that puts it into your app store. This will require you to use some sort of a thunk middleware to handle the asynchronous action. Then you will use mapStateToProps to simply pass it down to the component that renders the data.
<!--https://stackoverflow.com/questions/39356517/correct-way-to-pre-load-component-data-in-reactredux-->
### When using a thunk/async action that dispatches the actual action, which do you export from your reducer?

thunk

## definitions

### middleware
functions that run in the during the lifecycle
### thunk
middleware that handles async actions using redux
## preview questions

Which 3 things had you heard about previously and now have better clarity on?
redux, reducers, click handlers and useeffects
Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
redux 
What are you most excited about trying to implement or see how it works?
sass styling