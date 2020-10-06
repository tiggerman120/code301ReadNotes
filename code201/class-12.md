# images and practical information

## images

you can resize images using width and height and it is good practice if you plan on using many images of the same sizes. Something like amazon or Ebay as an example.
Though i do wonder how they go from declaring sizes to having user upload fill the image space. Javascript event listeners I guess?

you can use float and positioning with top bottom left and right to position images(and div boxes) though i have more trouble figuring out the element stacking than i do the positioning.

When you use a single image multiple times it is generally better to use a sprite. refer to p417 html book for specifics and I need to ask teach I dont understand the book.

Gradients and color choice in general matters a lot. Website appeal is very important for driving traffic. An otherwise functioning website will never get used as much with poor design or overwhelming color choices. i can confirm I don't stay on websites that overwhelm me with poor design or the color palette of a Marines puke.(they eat crayons)
a low contrast image makes text easier to read. You can add a screen in front of a high contrast image to read the text but it blocks the image so probably poor design.

## practical information

a well designed website has navigation that follows six principles. It needs to be concise, clear, selective, gives context, is pleasingly interactive, and is always consistent.(not part of the chapter but I think its useful practical info).

Search Engine Optimization is the practice of trying to help your site appear nearer the top of search engine results when people look for the topics that your website covers.

Spend time brainstorming on what keywords you think people will use to search your website on a search engine. (google analytics likely has some information like this.)
Using those keywords in your code is a great on page technique to drive search engine traffic.
The page title, the url, headings, text, image alt text, link text, andpage descriptions are great spots to use keywords to drive SE traffic

Getting other websites to link to you also drives your positioning on search engine results.

how to identify keywords and phrases.
brainstorm, organize, research(google has a tool "adwords.google.co.uk/select/KeywordToolExternal use exact match), compare, refine, and map. after figuring out a well informed list of keywords pick 3 or 5 of them for each page of your website.

google analytics is your friend when running a public facing website.

File transfer protocols(third party tool) allows you to transfer files from your local machine to the web server hosting your files.(<!--video controls>)-->

## html5 video and audio

the video and audio tags allow you to embed them into web pages.(like spotify or music on myspace?? but myspace is pre html5?). leave an option for people without html5 support.
HTMLMediaElement API provides features to allow you to control video and audio players programmatically.

```HTML

<!-- example code used from developer.mozilla.org-->
<!--<div class="player">
  <video controls>
    <source src="video/sintel-short.mp4" type="video/mp4">
    <source src="video/sintel-short.webm" type="video/webm">
     fallback content here
  </video>
  <div class="controls">
    <button class="play" data-icon="P" aria-label="play pause toggle"></button>
    <button class="stop" data-icon="S" aria-label="stop"></button>
    <div class="timer">
      <div></div>
      <span aria-label="timer">00:00</span>
    </div>
    <button class="rwd" data-icon="B" aria-label="rewind"></button>
    <button class="fwd" data-icon="F" aria-label="fast forward"></button>
  </div>
</div>-->
<!-- this is the information provided with their example text -->

<!--The whole player is wrapped in a <div> element, so it can all be styled as one unit if needed.
The <video> element contains two <source> elements so that different formats can be loaded depending on the browser viewing the site.
The controls HTML is probably the most interesting:
We have four <button>s — play/pause, stop, rewind, and fast forward.
Each <button> has a class name, a data-icon attribute for defining what icon should be shown on each button (we'll show how this works in the below section), and an aria-label attribute to provide an understandable description of each button, since we're not providing a human-readable label inside the tags. The contents of aria-label attributes are read out by screenreaders when their users focus on the elements that contain them.
There is also a timer <div>, which will report the elapsed time when the video is playing. Just for fun, we are providing two reporting mechanisms — a <span> containing the elapsed time in minutes and seconds, and an extra <div> that we will use to create a horizontal indicator bar that gets longer as the time elapses. To get an idea of what the finished product will look like, check out our finished version.-->

```

there is a lot more to this specifically whole section on css and 7 sections for javascript. I dont necessarily understand it all. the webpage this information is on for referencing is

```HTML

<a href="developer.mozilla.org/en-US/docs/Learn/Javascript/Client-side_web_APIs/Video_and_audio_APIs>REFERENCE LINK</a>

```
