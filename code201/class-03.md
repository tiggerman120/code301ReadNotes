# Class 02: Basics of HTML, CSS, and JS

## Fundamentals

- all of these are browser friendly, and are sort of expected when running software in a web browser.

### HTML

- Hyper Text Markup Language.
- Replicating a newspaper on a screen.
- HTML with no CSS, should hopefully by default look a little like a newspaper.
- Organizing content, providing structure.
- HTML tags: include an opening and a closing tag.
- Tag vs an element
- The tag refers to the name of the content, usually the things between the angle brackets.
- The element is what shows up in the browser.
- HTML Attributes:
- Modify the contents of a tag.
- href / src: require a url to an external file.
- id / class: use strings to identify / group elements together.
- Ids should only be applied to "one" element.
            Classes should be used to group like elements together.
- (no spaces please, spaces are like periods )

    ``` HTML

    <head>

    <!-- this tag has two attributes: href and rel -->
    <link href="style1.css" rel="stylesheet"></link>
    <link href="style2.css" rel="stylesheet"></link>
    <h1 class="site-title">Our headings by importance</h1>
    <h2>2</h2>
    <h3>3</h3>
    <h4>4</h4>
    <h5>5</h5>
    <h6>6</h6>

    <p>Our paragraphs</p>

    <ul>
        <li class="items">
            An unordered list item
        </li>
    </ul>

    <ol>
        <li>
            An ordered list item
        </li>
    </ol>
    <!-- this tag requires a source 
    <script src="app.js"></script> -->

### CSS

- We use "selectors" to apply styling specifications to our elements.
- Selectors can select elements using many different methods
- By tag name `p {}` `h1 {}` `ul {}`
- By id / class:
- id: `#id-name {}`
- class: `.class-name {}`
- CSS properties: all the things we want to style our elements with.
- Syntax: `property-name: property-value;`
- What about using the style attribute?
- The values still must follow the syntax for CSS properties.
- `<p style="color: green; background-color: blue; ">Here be content</p>`
- Linking using a link element.
- href attribute that points to a location of a CSS file.
- If our link is pointing to CSS we must specify that the relation is a stylesheet.
- `<link href="some-styles.css" rel="stylesheet"/>`
- This typically goes in the head element (metadata).
- For selectors that conflict the last thing read at the bottom of the stylesheet will be used.(can be overridden using `!important`)

    style.css

    ```css
    <!-- * selector * -->
    h1 {
        <!-- * properties * -->
    color: red;
    background-color: yellow;
    }

    #site-title {


    }

    .item {

    }

    ```

### Javascript

- Types of data that javascript can handle.
    1. string : sequence of natural language characters
        1. 'here is a string'
    2. number : its a number including decimals.
        - Don't use commas for 4 digit values or larger
    3. boolean : a binary response true vs false
        1. True
        2. false
    4. null - Setting a value of nothing. Using to represent something that has no value. (clicking cancel on a prompt)
    5. undefined

- Conditional logic
- Operations / JS statements that will be executed based upon a condition.
- Run statement in a specified code block whether something is true or false ( truthy / falsey )

```js
// Basic condition logic
if (some condition) {
    // Execute these statements

}   /* if we need an inverse operation */ else {
        // Execute some other statements
}

// We can also use else if

if (true) {
    console.log(true);
} else if (null) {
    console.log(null);
} else {
    console.log('something else');
}

// Switch statements
// Conditional logic that can only use one value, but have many different conditions

var user = 'Jacob';

switch (user) {
    // When these catch, all other statements below will run, unless you add a 'break'
    case 'Jacob':
        console.log('jacob is the user');
        break;
    case 'Chance':
        console.log('Oh, its Chance');
        break;
    case
        'Skylar':
            console.log('its Skylar');
        break;
    default:
        console.log('This is our default case');
        break;
}

- Logical operators

if (true && false) {

} else {
    console.log('Our statement is falsey');
}

if (true || false) {
    console.log('Our statement is truthey');
} else {

}

// Logical negation

if (true != false) {
    console.log('We are not false');
}

if (!false) {
    console.log('We flipped our boolean');
}


```

- Short circuit value:

```js

var string = (false && true);
// start here for new shit

'use strict';

console.log('js is loaded');

var ready = confirm('Are you ready');
var answer1 = null;

console.log(ready);

// '==' loose equals just compares the values so 5 == '5' and '===' strict equals compares the value and data type so 5 === '5' is false but '5' === '5' is true
if (ready === true); {
    answer1 = prompt('What is your favorite color?');
    console.log(answer1, answer1.toLowerCase);

    //if (answer1 === 'red') {
    //    alert(answer1 + ' is not a nice color');
    //    else if (answer1 === 'purple') {
    //        alert('Wow how regal');
    //    }
    //} else {
    //    alert(answer1 + ' I love that color too');
    }

    switch (answer1) {
        case 'red':
            alert(answer1 + ' is not a nice color');
            break;

        case 'purple':
            alert('Wow how regal');
            break;

        default:
            alert(answer1 + ' I love that color too');

    }
// removed text from demo    alert('Cool, lets begin');
} else {
    alert('Okay, bye');
}
