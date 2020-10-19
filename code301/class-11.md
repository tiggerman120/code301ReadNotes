# EJS

## overview
Video one has a general walkthrough of the topics being covered in subsequent videos with a general rundown of EJS
## Getting started

getting ejs started

following code also requires a second file named index inside of a folder named ejs.
ejs is an npm package

```JS

var express = require('express');
var bodyParser = require('body-parser');
var cors = require(cors);
var path = require('path');
app.path = require('path');

app.use(bodyParser());
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {
    people: [
      { name: 'dave' },
      { name: 'jerry' }
    ]
  });
});

app.listen(8000, function() {
  console.log('heard on 8000');
});

```

require path takes two paths and joins them. combine the working directory and another file
## injecting values

were taking a root route to render index.ejs
response.render takes three paramaters(string of file name you want to view)(object of local variables)(callback - optional)
objects take key/value pairs
making foo variable usable inside our ejs file
ejs has symbols but i cant read them

```JS

ejsS foo
img src="ejsS foo"
a href="ejsS foo.id ejsS /destroy"

```

## for loops and arrays

```JS

app.get('/', function(req, res) {
  res.render('index', {
    people: [
      { name: 'dave' },
      { name: 'jerry' }
    ]
  });
});
put UL in index.ejs
ejsS for(var person of people) {
  ejsS li person.name
}
```

```html

put UL in index.ejs
ejsS for(var person of people) { ejsS
ejsS if(person.name === 'dave') {
  this is definitely ejsS person.name ejsS
} else {
 li this is definitely not ejsS person.name ejsS this is ejsS person.name ejsS
ejsS } ejsS
ejsS } ejsS
  li ejsS  person.name

```

## if/else statements

```html

put UL in index.ejs
ejsS for(var person of people) { ejsS
ejsS if(person.name === 'dave') {
  this is definitely ejsS person.name ejsS
} else {
 li this is definitely not ejsS person.name ejsS this is ejsS person.name ejsS
ejsS } ejsS
ejsS } ejsS
  li ejsS  person.name

```

this created two people objects named dave and jerry renders them to the ejs index and evaluates who is who
could probably expand on this by filling the people object with a constructor so that we can set a multitude of values to every person easily