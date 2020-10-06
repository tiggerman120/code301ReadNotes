# Responsive Web Design

## Responsive v adaptive v mobile

Responsive and adaptive web design are closely related, and often transposed as one in the same. Responsive generally means to react quickly and positively to any change, while adaptive means to be easily modified for a new purpose or situation, such as change. With responsive design websites continually and fluidly change based on different factors, such as viewport width, while adaptive websites are built to a group of preset factors.

Mobile, on the other hand, generally means to build a separate website commonly on a new domain solely for mobile users.

Responsive web design is broken down into three main components, including flexible layouts, media queries, and flexible media.

## Flexible layouts

flexible layouts, is the practice of building the layout of a website with a flexible grid, capable of dynamically resizing to any width. Flexible grids are built using relative length units, most commonly percentages or em units. These relative lengths are then used to declare common grid property values such as width, margin, or padding.

vw = Viewports width
vmin = minimum of the viewports hieght and width
vh viewports height
vmax maximum of the viewports height and width

Flexible layouts do not advocate the use of fixed measurement units such as pixels or inches. viewport size chnages from user to user
formula to adapt:  
The formula is based around taking the target width of an element and dividing it by the width of it’s parent element. The result is the relative width of the target element.
**target ÷ context = result**

### Flexible Grid

[grid system link for gridbox css](https://css-tricks.com/snippets/css/complete-guide-grid/)

Let’s see how this formula works inside of a two column layout. Below we have a parent division with the class of container wrapping both the section and aside elements. The goal is to have have the section on the left and the aside on the right, with equal margins between the two.

```html

<div class="container">
  <section>...</section>
  <aside>...</aside>
</div>

```

*Below is a flexible grid*
**clearing erroneous error message**

```css

.container {
  width: 538px;
}
section,
aside {
  margin: 10px;
}
section {
  float: left;
  width: 340px;
}
aside {
  float: right;
  width: 158px;
}

```

```css

section,
aside {
  margin: 1.858736059%; /*  10px ÷ 538px = .018587361 */
}
section {
  float: left;
  width: 63.197026%;    /* 340px ÷ 538px = .63197026 */
}
aside {
  float: right;
  width: 29.3680297%;  /* 158px ÷ 538px = .293680297 */
}

```

## Media Queries

There are a couple different ways to use media queries, using the @media rule inside of an existing style sheet, importing a new style sheet using the @import rule, or by linking to a separate style sheet from within the HTML document. Generally speaking it is recommend to use the @media rule inside of an existing style sheet to avoid any additional HTTP requests.

```html

!-- Separate CSS File -->
<link href="styles.css" rel="stylesheet" media="all and (max-width: 1024px)">

```

```css

/* @media Rule */
@media all and (max-width: 1024px) {...}

/* @import Rule */
@import url(styles.css) all and (max-width: 1024px) {...}

```

Each media query may include a media type followed by one or more expressions. Common media types include all, screen, print, tv, and braille. The HTML5 specification includes new media types, even including 3d-glasses. Should a media type not be specified the media query will default the media type to screen.

The media query expression that follows the media type may include different media features and values, which then allocate to be true or false. When a media feature and value allocate to true, the styles are applied. If the media feature and value allocate to false the styles are ignored.

## Logical Operators

logical operators in media queries help build powerful expressions. There are three different logical operators available for use within media queries, including "and", "not", and "only".

Using the and logical operator within a media query allows an extra condition to be added

Multiple individual media queries can be comma separated, acting as an unspoken or operator.

The not logical operator negates the query, specifying any query but the one identified.
The only logical operator is a new operator and is not recognized by user agents using the HTML4 algorithm, thus hiding the styles from devices or browsers that don’t support media queries. Below, the expression selects only screens in a portrait orientation that have a user agent capable of rending media queries.

When using the not and only logical operators the media type may be left off. In this case the media type is defaulted to all.

## Media Features

One of the most common media features revolves around determining a height or width for a device or browser viewport. The height and width may be found by using the height and width media features. Each of these media features may then also be prefixed with the min or max qualifiers, building a feature such as min-width or max-width.

The height and width features are based off the height and width of the viewport rendering area, the browser window for example. Values for these height and width media features may be any length unit, relative or absolute.

Within responsive design the most commonly used features include min-width and max-width. These help build responsive websites on desktops and mobile devices equally, avoiding any confusion with device features.

The min and max prefixes can be used on quite a few media features. The min prefix indicates a values of greater than or equal to while the max prefix indicates a value of less than or equal to. Using min and max prefixes avoid any conflict with the general HTML syntax, specifically not using the < and > symbols.

The orientation media feature determines if a device is in the landscape or portrait orientation. The landscape mode is triggered when the display is wider than taller, and the portrait mode is triggered when the display is taller than wider. This media feature plays a large part with mobile devices.

The aspect-ratio and device-aspect-ratio features specifies the width/height pixel ratio of the targeted rendering area or output device. The min and max prefixes are available to use with the different aspect ratio features, identifying a ratio above or below that of which is stated.

In addition to the aspect ratio media features there are also pixel-ratio media features. These features do include the device-pixel-ratio feature as well as min and max prefixes. Specifically, the pixel ratio feature is great for identifying high definition devices, including retina displays. Media queries for doing so look like the following.

@media only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)

The resolution media feature specifies the resolution of the output device in pixel density, also known as dots per inch or DPI. The resolution media feature does accept the min and max prefixes. Additionally, the resolution media feature will accept dots per pixel (1.3dppx), dots per centimeter (118dpcm), and other length based resolution values.

Other media features include identifying available output colors with use of the color, color-index, and monochrome features, identifying bitmap devices with the grid feature, and identifying the scanning process of a television with the scan feature.

## Browser Support

Unfortunately media queries do not work within Internet Explorer 8 and below, as well as other legacy browsers. There are, however, a couple suitable polyfills written in Javascript.

## Floats

There are stronger tools than float for creating layout like grid and flexbox.

The Empty Div Method is, quite literally, an empty div. div style="clear: both;"></div>. Sometimes you’ll see a br> element or some other random element used, but div is the most common because it has no browser default styling, doesn’t have any special function, and is unlikely to be generically styled with CSS.

The Overflow Method relies on setting the overflow CSS property on a parent element. If this property is set to auto or hidden on the parent element, the parent will expand to contain the floats, effectively clearing it for succeeding elements.

The Easy Clearing Method uses a clever CSS pseudo selector (:after) to clear floats. Rather than setting the overflow on the parent, you apply an additional class like “clearfix” to it. Then apply this CSS:

```css

.clearfix:after {
   content: ".";
   visibility: hidden;
   display: block;
   height: 0;
   clear: both;
}

```

This will apply a small bit of content, hidden from view, after the parent element which clears the float. This requires additional code for older browser support.

**If you need text wrapping around images, there really aren’t any alternatives for float.**

## Float Problems

Pushdown is a symptom of an element inside a floated item being wider than the float itself (typically an image). Most browsers will render the image outside the float, but not have the part sticking out affect other layout. IE will expand the float to contain the image, often drastically affecting layout. A common example is an image sticking out of the main content push the sidebar down below.

Double Margin Bug – Another thing to remember when dealing with IE 6 is that if you apply a margin in the same direction as the float, it will double the margin. Quick fix: set display: inline on the float, and **don’t worry it will remain a block-level element.**

