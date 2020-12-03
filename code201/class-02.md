# day 2 reading notes

## HTML Chapter 2

structural markup is the framework like `body` or `p`
semantic markup is the detail like `b` `i` `strong` `em`bold italic strong importance and emphasis
`blockquote` for larger quotes
`q`for shorter quotes that sit within text
`abbr` abbrevation tag. ADA compliance
`cite` referencing pieces of work to italicize
`dfn` used to denote the word you are defining if introducing a definition. ADA compliance probably
`address` contains contact details for author of the page
`ins` shows data that has been added(underline)
`del` shows data that has been removed(strikethrough)
`s` shows data no longer relvant but still useful like a sale advertisement

## Chapter 10 notes

CSS
Block level elements look like they start on a new line`h1`-`h6` `p` `div`
Inline elements flow within the text`b` `i` `img` `em` `span`

selectors indicate which element the rule applies to
declarations indicate how the elements referred to should be styled
`link` links to your css sheet
`href` specifies the path to the css file
`type` specifies the type of file being linked to (css in this case)
`rel` specifies the relationship between the html page and the page being linked to
`style` can be used for inline css `<p style=" >`
`*` universal  selector selects all elements on page
`h1` `h2` `h3` type selector
 `.`class selectors target an id attribute `p.note` for instance
 `#` id selector selects an element from its id attribute
 `li>a` or other element selects only children of the specified element so this would be a children of li parent
 `p a` or other combination selects element descended from specified not just direct child
 `h1+p` adjacent sibling selector selects the parallel down
 `h1~p` matches sibling elements

 if two selectors are identical the latter one will take precedence
 if a selector is more specific it will take precendence `h1` is more specific than `*` `b` is more specific than `p` `p#intro` is more specific than `p`
 you can add `!important` to specify that an element should be considered more specific

 it is best practice to use an external css sheet however some niche cases may exist

## Javascript chapter 2

 each individual section of code is called a statement and is seperated by a semicolon
 javascript is case sensitive
 width x height = area for humans
 `remember value for width`
 `remember value for height`
 `multiply width by height to get the area`
 `return the result to the user`
`how to get the area for a computer`

declare variables with `var`
assign variables a value with `=`
`var quantity = 3`
just use single quotes for your strings save double quotes for quotations
a boolean variable is only true or false
`var inStock`
`var shipping`
`inStock = true`
`shipping = false`

`var price = 5`
`var quantity = 14`
`var total = price * quantity`

`var price, quantity, total`
`price = 5`
`quantity = 14`
`total = price * quantity`

rules for naming variables
Names must begin with a letter, dollar sign, or an underscore. it must not start with a number
the name can contain letters, numbers, dollar sign, or an underscore no `-` or `.`
you cannot use keywords or reserved words `var` is an example of something you cannot name a variable
variables are case sensitive
use a name to describe what you're doing
camelcase is good practice
array `colors = ['white', 'black', 'custom']
