# Object literals

If an object is part of an object(variable) it is called a property.
If a function is part of an object it is called a method.
  In javascript variables have a name and you xN assign them a value of a string, boolean, or number.
  Arrays have a name and a group of values. each item in an array is a name/value pair because it has an index number and a value
  named functions have a bame and valuethat is a set of statements to run if the function is called.
  Objects consist of a set of name/value pairs(but the names are referredto as keys).

## Creating an object

Literal notation - easiest and most popular. `var x = {}`
Dot notation - var hotelName = hotel(object).name(property/method call);
  you can also use square brackets to access the methods of an object

## Document object model

When your browser loads a webpage it creates a model of the webpage. The model is called the DOM tree, and it is stored in the browser. It consists of four types of nodes.

### The body of the HTML page

the document node is the top of the DOM tree and everytime you access your webpage it goes through the document node first.(algorithmic process of accessing data I think?)

### The element node

HTML elements describe the structure of the webpage
To access the DOM tree you start by looking for elements.
Once you find the correct element node you can start accessing its text and attribute nodes.
This is why you start by learning methods that allow you to access element nodes before learning to access and alter text or attributes IMPORTANT I THINK

### Attribute node

The opening tags of HTML elements can carry attributes and these are represented by attribute nodes in the DOM tree `<p href(the attribute)="tacos">`
Attributes are not children of the element that carries them. They are part of that element. Once you access an element, there are specific JS methods and properties to read or change that elements attributes.

### Text nodes

Once you have accessed an element node, you can then reach the text within that element. This is stored in its own text node.
Text nodes cannot have children. if an element contains text and another child element, the child element is not a child of the text node but rather a child of the containing element. Text node is always a new branch on the DOm tree and no further branches come after it.

### Working the DOM

Step 1:
access the elements
  Select an individual element node
    getElementById
    querySelector
work with those elements
  Select multiple elements
    getElementByClassName
    getElementsByTagName
    querySelectorAll
traversing between element nodes
  parentNode
  previousSibling/nextSibling
  firstChild/lastChild

Step 2:
work with those elements
  access/update text nodes
    nodeValue
  work with HTML content
    innerHTML
    textContent
    createElement
    createTextNode
    appendChild/removeChild
  access or update attribute values
  className/id
  hasAttribute
  getAttribute
  setAttribute
  removeAttribute
p190... JS book by Jon Duckett delves further into specifics and howto: access specifics of the DOM tree using previous methods listed
