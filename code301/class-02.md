# Javascript and JQuery

**What is JQuery?**
JQuery is a javascript file that you include in your web pages. It lets you find elements using css-style selectors and then do something with the elements using JQuery methods.
*creates jquery object*
*"li.hot" is the selector"*

```JQuery

$('li.hot');

```

JQuery has many methods(*methods are functions with a smaller scope like.push*) that you can use to work with the elements you select
*JQuery call in html doc*
```html

<script src="js/jquery-1.11.0.js"></script>

```

Once you make the call you ned to make a javascript file to house your JQuery code

### Why use JQuery?

JQuery doesn't do anything you can't do with javascript but it does do DOM manipulation much more efficiently **with less code written**
It also benefits from cross-browser compatibility so you don't need to write as much fallback code.

### aside

**page 302-305 in Duckett JS and Jquery book has useful information do reference it.**

### JQuery functionality

If the selector returns one element it only references that element but if it returns multiple elements(like 'li') then it will return all of the elements and assign each of them an index value. You can use the traverse or filter methods to further target individual elements from the return or use a more specific selector
**JQuery objects store references to elements**
When you create a JQuery selection it stores a reference to that element in the DOM tree it does not create copies of them. (why would it that makes no sense?)

JQuery uses resources(find matching node in dom tree, create the jquery object, store node references in the object) so if you need to use the same JQuery call more than once then store it in a variable with a $ like "$listitems" so that you can recall it without having to rerun the JQuery

put your jquery call on the bottom of your page to call it
use the .load method if your code relies on assets to have loaded(image manipulation)
it is good practice to wait until the page is loaded to run JQuery so that the DOM tree is loaded. You can do this by using the jquery method .ready **definitely use this method**
the shorthand for the .ready method is

```JS

$(function() {

});

```

Even if proper jquery call placement still use the .ready method so that it works even if someone moves your call

### JQuery looping

in javascript if you wanted to do the same thing to multiple objects yo need to write code(for loop) to loop through all of the elements
with JQuery if the return has multiple values then the loop is implied and it will apply your method to all of the returned values/selected elements.

### JQuery chaining

If you want to use more than one JQuery method on the same selection of elements you can list several methods using dot notation
**pages 314-319 has useful information for getting, updating, changing, inserting, and adding content**
**pages 320- has useful information getting, setting, and working with attributes**
**pages 322-323 has useful information for manipulating css with JQuery**
using the .each method allows you to recreate the functionality of a loop on selected elements(for if multiple selected elements)
**.each use example**

```JS

$(function() {
  $('li').each(function() {
    let ids = this.id;
    $(this).append(' <span class="order">' + ids + '</span>');
  })
})

```

### Event methods

using the .on method allows you to handle all events
**.on example**

```JS
{
$('li').on('click, function() {
  $(this).addClass('complete');
});
}
```

Some commonly used events are 
UI[focus, blur, change]
Keyboard[input, keydown, keyup, keypress]
Mouse[click, dblclick, mouseup, mousedown, mouseover, mousemove, mouseout, hover]
Form[submit, select, change]
Document[ready, load, unload]
browser[error, resize, scroll]
**hover, ready, and unload don't run until page load
**every event handling function receives an event object. It has methods and properties related to the event that occured**
*if a parameter name is shown in square brackets then the parameter is optional

### Loading JQuery from a CDN

when you load jquery from a cdn the call usually looks similar to

```html

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

```

*this is often followed by a logic operator to ensure that it has loaded: exaple follows

```html

<script>
  window.JQuery || document.write('<script src="js/jquery-1.10.2.js"></script>')
</script>

  ```
  