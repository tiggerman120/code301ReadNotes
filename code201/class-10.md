# javascript

## events

when you browse the web your browser registers different types of events. It's the browsers way of saying this just happened so your script can respond.

interactions create events. events trigger code. code responds to users.

## events list

### UI events

load = webpage has finished loading
unload = webpage is unloading(new page load requested)
error = browser encounters a JS error or an asset doesnt exist
resize browser window has been resized
scroll user has scrolled up or down on page

### keyboard events

keydown user first presses a key (repeats while holding key)
keyup user releases a key
keypress character is being inserted(repeats while holding key)

### mouse events

click you clicked something
dblclick you double clicked something
mousedown clicked while over an elememt
mouseup stopped clicking over an element
mouseover moved cursor over an element
mouseout user moved cursor off of an element

### focus events

focus/focusin element gains focus
blur/focusout element loses focus

### form events

input value changed on a contenteditable element
change value in select box/checkbox/or radio button changed
submit user submits a form
reset user clicks a forms reset button
cut user cuts content(looking at you BETHESDA)
copy user copies content from a form field
paste user pastes content into a form field
select user selects text in a form field

### mutation events

DOMSubtreeModified Change has been made to a document
DOMNodeInserted Node has been inserted as direct child of another node
DOMNodeRemoved Node has been removed from another node
DOMNodeInsertedIntoDocument Node has been inserted as a descendant of another node
DOMNodeRemovedFromDocument Node has been removed as a descendant of another node

##how events trigger js code

1 select the element node you want the scipt to respond to
2 indiciate which event on the selected node will trigger the response THIS IS CALLED BINDING
3 state the code you want to run when the event happens
this could work like a password field with a checkPassword function. on input checkpassword function runs. if the password form has an input value then it triggers blur(or whichever thing would hide the password field ned clarification from teach on which)

### binding events to element

1 html event handlers BAD PRACTICE USED IN OLDER CODE
early versions of html included a set of attributes that could respond to events on the element they were added to

2 trad DOM event handlers DOM event handlers were introduced in the original specs for the DOM. they are considered better than html event handlers because they let you seperate the JS from the HTML

3 Event listeners Event Listeners were introduced in an update to the DOM specs(lvl 2 released in 2000) event listeners allow one event to trigger multiple functions as a result conflicts are less likely to occur.

### using parameters with event listeners and event handlers

if you need to pass arguments to a function that is called by an event handler or listener you pass the function call in an anonymous function

ie5-8 did not supprt addEventListener() but used attachEvent() using an if else statement to check browser support if boolean response to if browser supports addeventlistener and else to run the correct method
EXAMPLE ON PAGE 259 DUCKETT JAVASCRIPT BOOK DEFFO REFER

## event flow

event bubbling starts at the most specific node and flows outward to the least specific node. this is default with wide browser support

event capturing starts at the least specific node flows inward to the most specific node. this is not supported in ie8 and earlier

the flow of events only really when your code has event handlers on an element and one of its ancestors or descandant elements

## event object

every time an event firs the event object contains helpful data about the event such as which element the the event happened on
which key was pressed for a keypress event
what part of the viewport the user clicked for a click event
the event object is passed to any function that is the event handler or listener
pg 271-290 on js duckett book is lots of examples with more specificity refer as needed.

## HTML/CSS

forms allow you to search, input text, make choices, submit forms, upload files. 
this looks a lot like the promptpit we made but with forms instead of prompthell as in you can control response based on user input

form controls live inside a form element
methods can be sent using get or post
with get values from the form are added to the end of the url
short forms data retrieval
with post the values are sent in what are known as http headers
file upload input very long contains sensitive data adds info or deletes from a database

size attribute should not be used on new forms
the input element is used to create several different form controls type="text" name maxlength(controls max input for form(character limit))
password blocks out input from view(give it a name of password)data not secure in password form. send and retrieve with SSL sockets

textarea gives a text box(for comments and the like)
radio button
checkbox
drop down list box
multiple select box

HTML5 supports form validation without needing JS

## css

there are a bunch of css styling in this chapter that will help with lab. im not going to take the time to list them

aligning form controls
put them into their own div so they have their own block
pg346 for how it works

there is a chrome webdev toolbar which is useful for viewing your css styling
