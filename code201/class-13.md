# reading is JS chart stuff

## chart api article

I wonder if he wants us to actually download this stuff

gotta set it up which requires install! I don't like installing a buncha shit:\
 drawing a line chart
 first we have to create a canvas element in our html so chart.js can draw the chart

```HTML

 <canvas id="buyers" width="600" height="400"></canvas>


```

```js

<script>
    var buyers = document.getElementById('buyers').getContext('2d');
    new Chart(buyers).Line(buyerData);
</script>

```

INSIDE SAME SCRIPT TAGS

```JS

var buyerData = {
 labels : ["January","February","March","April","May","June"],
 datasets : [
  {
   fillColor : "rgba(172,194,132,0.4)",
   strokeColor : "#ACC26D",
   pointColor : "#fff",
   pointStrokeColor : "#9DB86D",
   data : [203,156,99,251,305,247]
  }
 ]
}

```

making a pie chart too!! need context to substantiate it!

```HTML

<canvas id="countries" width="600" height="400"></canvas>

```

INSTANTIATE

```JS

var countries= document.getElementById("countries").getContext("2d");
new Chart(countries).Pie(pieData, pieOptions);

```

LETS ART THIS COOKIE

```CSS

var pieData = [
  {
    value: 20,
      color:"#878BB6"
  },
  {
    value : 40,
    color : "#4ACAB4"
  },
  {
    value : 10,
    color : "#FF8153"
  },
  {
    value : 30,
    color : "#FFEA88"
  }
];

```

NOW WE'LL ADD OPTIONS(like a pie restaurant)

```JS

var pieOptions = {
  segmentShowStroke : false,
  animateScale : true
}

```

WE WRITIN BARS NOW

```HTML

<canvas id="income" width="600" height="400"></canvas>

```

retrieve the element write them bars!

```JS

var income = document.getElementById("income").getContext("2d");
new Chart(income).Bar(barData);

```

WRITE THE DATA IN THE DATASPOT

```JS

var barData = {
  labels : ["January","February","March","April","May","June"],
  datasets : [
    {
      fillColor : "#48A497",
      strokeColor : "#48A4D1",
      data : [456,479,324,569,702,600]
    },
    {
      fillColor : "rgba(73,188,170,0.4)",
      strokeColor : "rgba(72,174,209,0.4)",
      data : [364,504,605,400,345,320]
    }

  ]
}
//THIS INFORMATION WAS CREATED AND SHARED BY SARA VIEIRA

```

dont forget your canvas tags theyre important

I dont know whats going on with this second reading it looks like the same thing as the first code saved for reference just incase

```HTML

<canvas id="myChart" width="400" height="400"></canvas>
<script>
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
</script>

```

support check template

```JS

var canvas = document.getElementById('tutorial');

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}

```

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage

^has example of what this canvas tag will look like when used. its just (a taco inside another taco inside a taco bell INSIDE YOUR DREAMS)boxes in boxes in boxes. canvas boxception.


## drawing in our canvas chart

Before we can start drawing, we need to talk about the canvas grid or coordinate space. Our HTML skeleton from the previous page had a canvas element 150 pixels wide and 150 pixels high. To the right, you see this canvas with the default grid overlayed. Normally 1 unit in the grid corresponds to 1 pixel on the canvas. The origin of this grid is positioned in the top left corner at coordinate (0,0). All elements are placed relative to this origin. So the position of the top left corner of the blue square becomes x pixels from the left and y pixels from the top, at coordinate (x,y)

canvas tag only supports two (whys it gotta be primitive, its just prematurely cultured!)shapes

3 ways to rectanglefy your chart.
fillRect(x, y, width, height)DRAWS A FILLED RECTANGLE
strokeRect(x, y, width, height)DRAWS A RECTANGLE OUTLINE
clearRect(x, y, width, height)CLEARS THE SPECIFIED RECTANGULAR AREA, MAKING IT FULLY TRANSPARENT
Insert dirty jokes bout those function names here.

here they are in use with code

```JS

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

```

## paths

A path is a list of points, connected by segments of lines that can be of different shapes, curved or not, of different width and of different color. A path, or even a subpath, can be closed. To make shapes using paths, we take some extra steps First, you create the path. Then you use drawing commands to draw into the path. Once the path has been created, you can stroke or fill the path to render it.

beginPath() creates a new path
closePath() adds a straight line to the path
stroke() Draws the shape by stroking its outline
fill() Draws a solid shape by filling the path's content area.

Note: When the current path is empty, such as immediately after calling beginPath(), or on a newly created canvas, the first path construction command is always treated as a moveTo(), regardless of what it actually is. For that reason, you will almost always want to specifically set your starting position after resetting a path.

When the canvas is initialized or beginPath() is called, you typically will want to use the moveTo() function to place the starting point somewhere else. We could also use moveTo() to draw unconnected paths. Take a look at the smiley face below.

## styling

fillStyle = color sets the style used when filling shapes
strokeStyle = color sets the style for shapes outline
IMPORTANT NOTE: When you set the strokeStyle and/or fillStyle property, the new value becomes the default for all shapes being drawn from then on. For every shape you want in a different color, you will need to reassign the fillStyle or strokeStyle property.

In addition to drawing opaque shapes to the canvas, we can also draw semi-transparent (or translucent) shapes. This is done by either setting the globalAlpha property or by assigning a semi-transparent color to the stroke and/or fill style.

globalAlpha = transparencyValue
Applies the specified transparency value to all future shapes drawn on the canvas. The value must be between 0.0 (fully transparent) to 1.0 (fully opaque). This value is 1.0 (fully opaque) by default.
IMPORTANT SECTION The globalAlpha property can be useful if you want to draw a lot of shapes on the canvas with similar transparency, but otherwise it's generally more useful to set the transparency on individual shapes when setting their colors.

globalalpha example

```JS

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  // draw background
  ctx.fillStyle = '#FD0';
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = '#FFF';

  // set transparency value
  ctx.globalAlpha = 0.2;

  // Draw semi transparent circles
  for (var i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

```

RGBA EXAMPLE

```JS

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // Draw background
  ctx.fillStyle = 'rgb(255, 221, 0)';
  ctx.fillRect(0, 0, 150, 37.5);
  ctx.fillStyle = 'rgb(102, 204, 0)';
  ctx.fillRect(0, 37.5, 150, 37.5);
  ctx.fillStyle = 'rgb(0, 153, 255)';
  ctx.fillRect(0, 75, 150, 37.5);
  ctx.fillStyle = 'rgb(255, 51, 0)';
  ctx.fillRect(0, 112.5, 150, 37.5);

  // Draw semi transparent rectangles
  for (var i = 0; i < 10; i++) {
    ctx.fillStyle = 'rgba(255, 255, 255, ' + (i + 1) / 10 + ')';
    for (var j = 0; j < 4; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
    }
  }
}

```

lineWidth = value
Sets the width of lines drawn in the future.
lineCap = type
Sets the appearance of the ends of lines.
lineJoin = type
Sets the appearance of the "corners" where lines meet.
miterLimit = value
Establishes a limit on the miter when two lines join at a sharp angle, to let you control how thick the junction becomes.
getLineDash()
Returns the current line dash pattern array containing an even number of non-negative numbers.
setLineDash(segments)
Sets the current line dash pattern.
lineDashOffset = value
Specifies where to start a dash array on a line.

The lineCap property determines how the end points of every line are drawn. There are three possible values for this property and those are: butt, round and square. By default this property is set to butt.

The lineJoin property determines how two connecting segments (of lines, arcs or curves) with non-zero lengths in a shape are joined together (degenerate segments with zero lengths, whose specified endpoints and control points are exactly at the same position, are skipped).

There are three possible values for this property: round, bevel and miter. By default this property is set to miter. Note that the lineJoin setting has no effect if the two connected segments have the same direction, because no joining area will be added in this case.

More exactly, the miter limit is the maximum allowed ratio of the extension length (in the HTML canvas, it is measured between the outside corner of the joined edges of the line and the common endpoint of connecting segments specified in the path) to half the line width. It can equivalently be defined as the maximum allowed ratio of the distance between the inside and outside points of jonction of edges, to the total line width. It is then equal to the cosecant of half the minimum inner angle of connecting segments below which no miter join will be rendered, but only a bevel join:(WHAT DOES THIS EVEN MEAN TECHNICAL JARGON OUT THE WAZOO) might as well have explained particle physics(or anything smart i guess) makes as much sense!

miterLimit = max miterLength / lineWidth = 1 / sin ( min θ / 2 )
The default miter limit of 10.0 will strip all miters for sharp angles below about 11 degrees.
A miter limit equal to √2 ≈ 1.4142136 (rounded up) will strip miters for all acute angles, keeping miter joins only for obtuse or right angles.
A miter limit equal to 1.0 is valid but will disable all miters.
Values below 1.0 are invalid for the miter limit.

## drawing text

The canvas rendering context provides two methods to render text:

fillText(text, x, y [, maxWidth])
Fills a given text at the given (x,y) position. Optionally with a maximum width to draw.
strokeText(text, x, y [, maxWidth])
Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw.

this is how you draw text.

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text

this place has a shit ton more specifics.

heres an example math satan glad the computer is doing you.

```JS

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = '48px serif';
  ctx.fillText('Hello world', 10, 50);
}

```