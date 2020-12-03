# HTML lists, Control Flow with JS, and the CSS Box Model

## HTML/CSS Chapter 3 HTML Lists

    `<ol>` ordered list(numbered)
    `<ul>` unordered list(bullets)
    `<li>` line item(used for both)
    `<dl>` definition list
    `<dt>` used to contain the term being defined
    `<dd>` used to contain the definition
    you can put another list inside of a line item. It goes in between the open and close tags

## HTML/CSS Chapter 13 CSS box models
box dimensions are width+height
you can limit width with the css rules `min-width` and `max-width`
you can limit height with `min-height` and `max-height`
if your data does not all fit within the box you can use `overflow: hidden` to hide the excess data or you can use `overflow: scroll` to scroll through the data in the box

boxes have three available properties to control its appearance `border` seperates the edge of one box from another
 `margin` sits outside the edge of border and can be used to create space between the borders of two adjacent boxes `padding` is the space between the inside border of a box and the data contained within it

 the padding and margin properties are very useful in creating space between boxes

 `border-width` controls border width and can be stated in pixels or using `border-width: thin/medium/thick` you cannot use percantages for `border-width`

 you can control individual walls of a border using border`-top/right/bottom/left-width`

 `border-style` controls the style of a border using `solid` `dotted` `dashed` `double` `groove` `ridge` `inset` `outset` `hidden/none`

 `border` allows you to control width style and color in one property values should be stated in that order `border: 3px dotted darkcyan`

If you want to center a box you need to set a width and then you can set `left-margin` and `right-margin` to auto

ie6 is fucky refer to page 316. i don't understand it need further explanation.

`inline` causes a block level element to act as an inline element
`block` causes an inline element to act as a block element
`inline-block` allows a block level element to flow like an inline element while retaining other block level features
`none` hides an element from a page
`visibility:hidden` hides an element
`visibility:visible` shows an element
`border-image` adds a picture to the border of any box
`box-shadow` allows you to properly add a drop shadow around a box. pg 320 for further alterations
you can create custom shaped boxes using `border-radius`

## JS Chapter 4 Decisions and Loops

A switch statement starts with a variable called the switch value
Each case indicates a possible value for this variable and the code that should run if the variable matches that value

switch (level) {
    case 'One':
        title = 'Level 1';
        break;

    case 'Two':
        title = 'Level 2';
        break;

    case 'Three':
        title = 'Level 3';
        break;

        default:
            title = 'Test';
            break;

}<!-- this code isnt finished it is just a portion of a switch. It creates the switch but still requires a variable and inputs -->

I need help with for loops.
I made 5 while loops I think i kinda get them.
I need help with do while loops. I can understand the words in the textbook but i can't figure out how to apply that to code.

## Javascript Chapter 3 Arrays

you can use an array to give a variable multiple inputs

`var colors;
colors = ['white', 'black', 'custom'];

you can also use the array constructor

var colors = new Array('white',
                        'black',
                        'custom');

var el = document/getElementById('colors');(get the element by id of colors)
el.textContent = colors[0];(replace with third item from array)

array values are accessed as if they were a numbered list starting at zero


updating values in an array

## Class day 3 morning lecture

### Box Model / Arrays / Iteration

### How Does Git Work

- Computer's file system
  - creating files in our local file system
- Git software
  - looking for updates, and formalizing changes in a specific place
- Remote repository
  - Doing the same thing as the software, but just on a remote server.
- How do these changes talk to each other.

## Javascript Arrays

- What is an array
  - a bucket of other data types

```js

var question1 = 'What is your favorite color?'
var question2 = 'What is your favorite food?'
var question3 = 'What is your first car?';

var questions = ['What is your favorite color?', 'What is your favorite food?', 'What is your first car?'];

questions.length; // property that exists on all js arrays. => 3

// if we want to add something to the array, what do we do?
questions[questions.length] = 'another thing';

console.log(questions) // => ['What is your favorite color?', 'What is your favorite food?', 'What is your first car?']

var answer1 = 'my super awesome string';
var answer2 = 'another string';

// an empty array
// var myArray = [];

var myArray = [string1, string2];

console.log(myArray)

// ['my super awesome string', 'another string'];

// accessing the first position within the array;
myArray[0];

// move on memory position to get to the second item in the array;
myArray[1];


```

## Running code multiple loops

- What is a loop?
  - Running a specified code block, as long as a condition remains true.
- for loops take 3 specific statements
  - Initilization of something to check within the loop
  - Comparison (Condition involving our initialized thing)
  - Operation to perform on our initialized thing

```js
  // we start with a for keyword
  for (var i = 3; i > 0; i = i - 1) {
      console.log(i);
  }

  - This is very good news for arrays
    - [3, 2, 1]

    
    var numbers = [3, 2, 1];

// for (var i = numbers.length; i > 0; i = i - 1) {
//    console.log(i - 1);
// }

for (var)
```

- truthy values and falsey values
  - truthy: true / 'string' / [] / {} / 1 (any number above zero)
  -falsey: false / '' / 0 / undefined / null

```js
var i = 0
var bool = [3 ,2 ,1];
var temp = [];

while(bool.length) {
//  console.log('running');
temp.push(numbers.pop());
console.log(temp);
//  bool = false;
}

```

```js
//this code will always run at least once
numbers = [];
do {
    //same idea
    console.log('this should execute at least once');
} while (numbers.length);

```

## CSS Box Model

- Understanding the layout of elements in a browser.
- All elements in the browser are boxed.
  - Each box can be provided values for 3 discreet properties (going from the most outside layer of a box, inward )
    - refers to any space between the border, and any other element surrounding our box

- Border
  - (by default) a thin line that sits between our margin and padding

- Padding
  - Any space seperating the content from its border, this actually makes our box bigger
  - (sort of the actual content)

### Semantic tags

- brsw
