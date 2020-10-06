<!-- # HTML Links, JS functions, and Intro to CSS Layout

## JS Chapter 3 Functions, Methods, and Objects pg.86-99

Functions let you group statements together to perform a specific task

```js
function wrapper() {
    var answeredProperly1 = false;
    while (answeredProperly1 === false) {
        var answer1 = prompt('Was I born in kentucky? yes/no');
        //console.log(answer1.toLowerCase());
        if (answer1.toLowerCase() === 'yes') {
        answeredProperly1 = true;
        //correctAnswersTotal = correctAnswersTotal + 1;
        //correctAnswersTotal += 1
        correctAnswersTotal++;
        //console.log(answer1.toLowerCase());
        alert('Correct! I was born in kentucky');
        } else if (answer1.toLowerCase() === 'no') {
        answeredProperly1 = true;
        //console.log(answer1.toLowerCase());
        alert('Incorrect! I was indeed born in kentucky!');
        } else {
        alert('Please pick yes or no!');

        }
    }
}
```
function is the `function` keyword to create a function. You assign a name to it after
```js
function tacos() {

}
```
you call he function with `tacos()`
sometimes a function needs information `function getArea(width, height) {
    getArea(3, 5)
}
or
`wallWidth = 3;`
`wallHeight = 5;`
`getArea(wallWidth * wallHeight);`

```js
function calculateArea(width, height) {
    var area = width * height;
    return area;
}
var wallOne = calculateArea(3, 5);
var wallOne = calculateArea(8, 5);
```

## pair programming article

Global variables use more memory. The browser has to remember them for as long as the web page using them is loaded. Local variables are only remembered during the period of time that a function is being executed.

<!--pair programming commonly involves two roles: the Driver and the Navigator. The Driver is the programmer who is typing and the only one whose hands are on the keyboard. Handling the “mechanics” of coding, the Driver manages the text editor, switching files, version control, and—of course writing—code. The Navigator uses their words to guide the Driver but does not provide any direct input to the computer. The Navigator thinks about the big picture, what comes next, how an algorithm might be converted in to code, while scanning for typos or bugs.
 this text was copied from the article to be summarized -->
The driver is the technical portion. the code writer. the grunt.
The navigator is middle management. He makes the plans, provides support, and runs overwatch.

<!--there are four fundamental skills that help anyone learn a new language: Listening: hearing and interpreting the vocabulary Speaking: using the correct words to communicate an idea Reading: understanding what written language intends to convey Writing: producing from scratch a meaningful
 this text was copied from the article to be summarized -->

ASK FOR HELP LEARN FROM YOUR PEERS

## HTML Chapter 4 Links

linking to other websites
<a href="https://www.google.com"></a>
linking to pages within your website
<a href="index.html">Home</a>

your directory tree matters for linking file paths
parent file ../index.html
grandparent file ../../index.html

`mailto` email links
`target` opening links in a new tab
`<h1 id="top">x</h1>`
`<a href="#top">xx</a>`
linking to same page
same concept for links to different page bar substitute url

## HTML/CSS Chapter 15

CSS treats html elements as if it is in its own box. this box will either be a block level element or an inline box

block level elements start on a new line
inline elements flow in between surrounding text
a box may be nested inside several other block level elements. the containing element is always the direct parent
<!--PLEASE REFER TO PAGES 363 364 ITS IMPORTANT AND NOT WELL SUMMARIZABLE I THINK-->
`position:static` normal flow stacks block level elements on top of each other
`position:relative` relative positioning moves an element in relation to where it would have been in normal flow
`position:absolute` when the position property is given the absolute value the box is taken out of normal flow and no longer affects the position of other elements on the page
`position:fixed` fixed positioning is a type of absolute positioning that requires the [psition property to have a value of fixed
`z-index` when you have overlapping elements you can use the z index to control which element is on top
`float` is left or right positioning in normal flow

Because screen sizes and display resolutions vary so much, web designers often try to create pages of around 960-1000 pixels wide
 

