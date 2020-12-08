# class notes

```JS

app.get('/bad', (req, res, next) => {
  next('break');
})
app.use(errorHandler);
//whenever someone throws an error, use the function errorHandler
//when the user goes to the path /bad it will throw an error using errorhandler
```




```JS

function errorHandler(error, req, res, next){
  res.status(500).send({
    error: 500,
    route: req.path,
    message: `SERVER ERROR${error}`
  })
}
//next is a param built into the express library
//it tells "it" to move onto the next set of rules
```
