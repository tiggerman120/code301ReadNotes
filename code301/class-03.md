# Flexbox and Templating

## Templating with mustache.js

Javascript templating is a fast and efficient technique to render client-side view templates with Javascript by using a JSON data source. The template is HTML markup, with added templating tags that will either insert variables or run programming logic.

The template engine then replaces variables and instances declared in a template file with actual values at runtime.

### Mustache

Mustache is a logic-less template syntax. It can be used for HTML, config files, source code — anything. It works by expanding tags in a template using values provided in a hash or object.  
It is often referred to as “logic-less” because there are no if statements, else clauses, or for loops. Instead, there are only tags.

**mustache.js is an implementation of the mustache template system in JavaScript. It is often considered the base for JavaScript templating. And, since mustache supports various languages, we don’t need a separate templating system on the server side.**
Mustache.render(“Hello, {{name}}”, { name: “Garrett” });
// returns: Hello, Garrett
In the above, we see two braces around {{ name }}. This is Mustache syntax to show that it is a placeholder.

Mustache is not a templating engine. It is a specification for a templating language. An engine compiles its data.

### Mustache express (All Aboard! Choo! Choo!)

If you intend you use mustache with Node and Express, you can use mustache-express. Mustache Express lets you use Mustache and Express together easily.
*ask whether we need to install mustache today*

### install with npm

to install:
<!-- https://medium.com/@1sherlynn/javascript-templating-language-and-engine-mustache-js-with-node-and-express-f4c2530e73b2 -->
instructions on the webpage halfway down

## A guide to Flexbox

### Parent

`display` defines a flex container
display: flex (or inline-flex)
`flex-direction`row/row-reverse/column/column-reverse
establishes the main-axis, thus defining the direction flex items are placed in the flex container
flex box is a single direction layout concept
`flex-wrap`nowrap/wrap/wrap-reverse
 flex flows on one line. this wraps it down
`justify-content`flex-start/flex-end/center/space-between/space-around/space-evenly
This defines the alignment along the main axis. It helps distribute free space leftover when either all the flex items on a linev are inflexible, or are flexible but have reached their maximum size.
`align-items`flex-start/flex-end/center/stretch/baseline
This defines how flex items are laid out along the cross axis
`safe` `unsafe` modifier keywords can be used in conjunction with all the rest of these keywords to deal with helping oyu prevent content from becoming inaccessible
`align-content`flex-start/flex-end/center/stretch/space-between/space-around
This aligns a flex container's lines within when there is extra space in the cross-axis
Note: no effect if only one line of flex items

### children

`order`By default flex items are laid out in the source order. However, the order property controls the order in which theu appear in the flex container
`flex-grow`this definies the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion
`flex-shrink`this defines the ability for a flex item to shrink. negative numbers are invalid
`flex-basis`This defines the deault size of an element before the remaining space is distributed. It can be a length(20%, 5rem) or a keyword
the auto keyword means look at my width or height property
`flex`This is the shorthand for flex-grow flex-shrink and flex-basis combined. the second and third parameters are optional(flex-shrink and flex basis)
`align-self`this allows default alignment to be overwritten for individual flex items
note: float, clear, and vertical align have no effect on a flex item
