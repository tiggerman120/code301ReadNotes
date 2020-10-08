# Responsive Web Design

## CSS Grid Garden

`https://cssgridgarden.com/`
completed

## bookmarks

`https://regex101.com/`
`https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285`
`https://css-tricks.com/snippets/css/complete-guide-grid/`
`https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df`

## grids

grid boxes seem so straightforward to use. I look forward to using them.

### parent

`display` Defines the element as a grid container and establishes a new grid formatting context for its contents.

Values:

grid – generates a block-level grid
inline-grid – generates an inline-level grid

`grid-template-columns/rows`grid-template-columns
grid-template-rows
Defines the columns and rows of the grid with a space-separated list of values. The values represent the track size, and the space between them represents the grid line.

Values:

`track-size` – can be a length, a percentage, or a fraction of the free space in the grid (using the fr unit)
`line-name` – an arbitrary name of your choosing
you can also use the repeat function with grids if you want multiple of the same grid unit

`grid-template-areas`
Defines a grid template by referencing the names of the grid areas which are specified with the grid-area property. Repeating the name of a grid area causes the content to span those cells. A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.

Values:

`grid-area-name` – the name of a grid area specified with grid-area
. – a period signifies an empty grid cell
none – no grid areas are defined

grid-template``
A shorthand for setting grid-template-rows, grid-template-columns, and grid-template-areas in a single declaration.

Values:

none – sets all three properties to their initial values
`grid-template-rows` / `grid-template-columns` – sets grid-template-columns and grid-template-rows to the specified values, respectively, and sets grid-template-areas to none
**THIS ONE SEEMS THE MOST USEFUL**

`column-gap`
`row-gap`
`grid-column-gap`
`grid-row-gap`
Specifies the size of the grid lines. You can think of it like setting the width of the gutters between the columns/rows.
put spaces between your boxes

Values:

`line-size` – a length value

`gap` - standard
`grid-gap` - old
A shorthand for row-gap and column-gap

Values:

`grid-row-gap` `grid-column-gap` – length values

`justify-items`
Aligns grid items along the inline (row) axis (as opposed to align-items which aligns along the block (column) axis). This value applies to all grid items inside the container.

Values:

start – aligns items to be flush with the start edge of their cell
end – aligns items to be flush with the end edge of their cell
center – aligns items in the center of their cell
stretch – fills the whole width of the cell (this is the default)

`align-items`
Aligns grid items along the block (column) axis (as opposed to justify-items which aligns along the inline (row) axis). This value applies to all grid items inside the container.

Values:

start – aligns items to be flush with the start edge of their cell
end – aligns items to be flush with the end edge of their cell
center – aligns items in the center of their cell
stretch – fills the whole height of the cell (this is the default)

`place-items`
**place-items sets both the align-items and justify-items properties in a single declaration.**

Values:

`align-items` / `justify-items` – The first value sets align-items, the second value justify-items. If the second value is omitted, the first value is assigned to both properties.
All major browsers except Edge support the place-items shorthand property.

`justify-content`
Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the inline (row) axis (as opposed to align-content which aligns the grid along the block (column) axis).

Values:

start – aligns the grid to be flush with the start edge of the grid container
end – aligns the grid to be flush with the end edge of the grid container
center – aligns the grid in the center of the grid container
stretch – resizes the grid items to allow the grid to fill the full width of the grid container
space-around – places an even amount of space between each grid item, with half-sized spaces on the far ends
space-between – places an even amount of space between each grid item, with no space at the far ends
space-evenly – places an even amount of space between each grid item, including the far ends

`align-content`
Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the block (column) axis (as opposed to justify-content which aligns the grid along the inline (row) axis).

Values:

start – aligns the grid to be flush with the start edge of the grid container
end – aligns the grid to be flush with the end edge of the grid container
center – aligns the grid in the center of the grid container
stretch – resizes the grid items to allow the grid to fill the full height of the grid container
space-around – places an even amount of space between each grid item, with half-sized spaces on the far ends
space-between – places an even amount of space between each grid item, with no space at the far ends
space-evenly – places an even amount of space between each grid item, including the far ends

`place-content`
place-content sets both the align-content and justify-content properties in a single declaration.

Values:

`align-content` / `justify-content` – The first value sets align-content, the second value justify-content. If the second value is omitted, the first value is assigned to both properties.
All major browsers except Edge support the place-content shorthand property.

`grid-auto-columns`
`grid-auto-rows`
Specifies the size of any auto-generated grid tracks (aka implicit grid tracks). Implicit tracks get created when there are more grid items than cells in the grid or when a grid item is placed outside of the explicit grid. (see The Difference Between Explicit and Implicit Grids)

Values:

`track-size` – can be a length, a percentage, or a fraction of the free space in the grid (using the fr unit)

`grid-auto-flow`
If you have grid items that you don’t explicitly place on the grid, the auto-placement algorithm kicks in to automatically place the items. This property controls how the auto-placement algorithm works.

Values:

row – tells the auto-placement algorithm to fill in each row in turn, adding new rows as necessary (default)
column – tells the auto-placement algorithm to fill in each column in turn, adding new columns as necessary
dense – tells the auto-placement algorithm to attempt to fill in holes earlier in the grid if smaller items come up later

`grid`
A shorthand for setting all of the following properties in a single declaration: grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and grid-auto-flow (Note: You can only specify the explicit or the implicit grid properties in a single grid declaration).

Values:

none – sets all sub-properties to their initial values.
`grid-template` – works the same as the grid-template shorthand.
`grid-template-rows` / [ auto-flow && dense? ] `grid-auto-columns` – sets grid-template-rows to the specified value. If the auto-flow keyword is to the right of the slash, it sets grid-auto-flow to column. If the dense keyword is specified additionally, the auto-placement algorithm uses a “dense” packing algorithm. If grid-auto-columns is omitted, it is set to auto.
[ auto-flow && dense? ] `grid-auto-rows` / `grid-template-columns` – sets grid-template-columns to the specified value. If the auto-flow keyword is to the left of the slash, it sets grid-auto-flow to row. If the dense keyword is specified additionally, the auto-placement algorithm uses a “dense” packing algorithm. If grid-auto-rows is omitted, it is set to auto.

## Children

`grid-column-start`
`grid-column-end`
`grid-row-start`
`grid-row-end`
Determines a grid item’s location within the grid by referring to specific grid lines. grid-column-start/grid-row-start is the line where the item begins, and grid-column-end/grid-row-end is the line where the item ends.

Values:

`line` – can be a number to refer to a numbered grid line, or a name to refer to a named grid line
span `number` – the item will span across the provided number of grid tracks
span `name` – the item will span across until it hits the next line with the provided name
auto – indicates auto-placement, an automatic span, or a default span of one

`grid-column`
`grid-row`
Shorthand for grid-column-start + grid-column-end, and grid-row-start + grid-row-end, respectively.

Values:

`start-line` / `end-line` – each one accepts all the same values as the longhand version, including span

`grid-area`
Gives an item a name so that it can be referenced by a template created with the grid-template-areas property. Alternatively, this property can be used as an even shorter shorthand for grid-row-start + grid-column-start + grid-row-end + grid-column-end.

Values:

`name` – a name of your choosing
`row-start` / `column-start` / `row-end` / `column-end` – can be numbers or named lines

`justify-self`
Aligns a grid item inside a cell along the inline (row) axis (as opposed to align-self which aligns along the block (column) axis). This value applies to a grid item inside a single cell.

Values:

start – aligns the grid item to be flush with the start edge of the cell
end – aligns the grid item to be flush with the end edge of the cell
center – aligns the grid item in the center of the cell
stretch – fills the whole width of the cell (this is the default)

`align-self`
Aligns a grid item inside a cell along the block (column) axis (as opposed to justify-self which aligns along the inline (row) axis). This value applies to the content inside a single grid item.

Values:

start – aligns the grid item to be flush with the start edge of the cell
end – aligns the grid item to be flush with the end edge of the cell
center – aligns the grid item in the center of the cell
stretch – fills the whole height of the cell (this is the default)

`place-self`
place-self sets both the align-self and justify-self properties in a single declaration.

Values:

auto – The “default” alignment for the layout mode.
`align-self` / `justify-self` – The first value sets align-self, the second value justify-self. If the second value is omitted, the first value is assigned to both properties.

## Regex

### Basic Topics

Anchors  ^ and $
^The        matches any string that starts with The
end$        matches a string that ends with end
^The end$   exact string match (starts and ends with The end)
roar        matches any string that has the text roar in it

Quantifiers  * + ? and {}
abc*        matches a string that has ab followed by zero or more c
abc+        matches a string that has ab followed by one or more c
abc?        matches a string that has ab followed by zero or one c
abc{2}      matches a string that has ab followed by 2 c
abc{2,}     matches a string that has ab followed by 2 or more c
abc{2,5}    matches a string that has ab followed by 2 up to 5 c
a(bc)*      matches a string that has a followed by zero or more copies of the sequence bc
a(bc){2,5}  matches a string that has a followed by 2 up to 5 copies of the sequence bc

OR operator  | or []
a(b|c)     matches a string that has a followed by b or c (and captures b or c)
a[bc]      same as previous, but without capturing b or c

Character classes  \d \w \s and .
\d         matches a single character that is a digit
\w         matches a word character (alphanumeric character plus underscore)
\s         matches a whitespace character (includes tabs and line breaks)
.          matches any character
Use the . operator carefully since often class or negated character class are faster and more precise.
\d, \w and \s also present their negations with \D, \W and \S respectively.
For example, \D will perform the inverse match with respect to that obtained with \d.

\D         matches a single non-digit character

Flags
We are learning how to construct a regex but forgetting a fundamental concept: flags.
A regex usually comes within this form /abc/, where the search pattern is delimited by two slash characters /. At the end we can specify a flag with these values (we can also combine them each other):
g (global) does not return after the first match, restarting the subsequent searches from the end of the previous match
m (multi-line) when enabled ^ and $ will match the start and end of a line, instead of the whole string
i (insensitive) makes the whole expression case-insensitive (for instance /aBc/i would match AbC)

## inter topic

a(bc)           parentheses create a capturing group with value bc
a(?:bc)*        using ?: we disable the capturing group
a(?foobc)     using ?foo we put a name to the group

[abc]            matches a string that has either an a or a b or a c -> is the same as a|b|c
[a-c]            same as previous
[a-fA-F0-9]      a string that represents a single hexadecimal digit, case insensitively
[0-9]%           a string that has a character from 0 to 9 before a % sign
[^a-zA-Z]        a string that has not a letter from a to z or from A to Z. In this case the ^ is used as negation of the expression
