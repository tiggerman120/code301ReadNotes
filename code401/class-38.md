# redux async actions

## review research and discussion

### How granular should your reducers be?
it depends on what you want to accomplish with your code
the seperation of actions can be beneficial or just extra boilerplate code such as updating email and phonenumber where the logic is the same

### Pro or Con – multiple reducers can “fire” when a commonly named action is dispatched

both. I can imagine there being problems if both reducers are altering the same slice of state but it could be a pro if the reducers arent overwriting each other

### Name a strategy for preventing the above

don't have commonly named actions

## definitions

### store

the place where your initial state is stored

### combined reducers

the redux method that binds your individual reducers into key value pairs for easy access throughout the application

## preview questions

### Which 3 things had you heard about previously and now have better clarity on?

reducers

### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?

implementing react and redux to create a responsive component based frontend

### What are you most excited about trying to implement or see how it works?

im excited to create a full stack app on project week