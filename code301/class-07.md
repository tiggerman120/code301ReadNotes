# REST

## Roy Fielding

Who is “Roy Fielding”?

He helped write the first web servers, that sent documents across the Internet… and then he did a ton of research explaining why the web works the way it does. His name is on the specification for the protocol that is used to get pages from servers to your browser. HTTP

That first part tells the browser what protocol to use. That stuff you type in there is one of the most important breakthroughs in the history of computing.

Because it is capable of describing the location of something anywhere in the world from anywhere in the world. It's the foundation of the web. You can think of it like GPS coordinates for knowledge and information.

The whole world wide web is built on an architectural style called “REST”. REST provides a definition of a “resource”, which is what those things point to.
Those URLs tell the browser that there's a concept somewhere. A browser can then go ask for a specific representation of the concept. Specifically, the browser asks for the web page representation of the concept.

Hmm. Well, there's this concept that people are calling “Web Services” or "APIs". It means a lot of different things to a lot of different people but the basic concept is that machines could use the web just like people do.

No, not really. I don't mean that machines will be sitting down at the desk and browsing the web. But computers can use those same protocols to send messages back and forth to each other. We've been doing that for a long time but none of the techniques we use today work well when you need to be able to talk to all of the machines in the entire world.

Because they weren't designed to be used like that. When Fielding and his buddies started building the web, being able to talk to any machine anywhere in the world was a primary concern.

Yes - and more. We need to be able to talk to all machines about all the stuff that's on all the other machines. So we need some way of having one machine tell another machine about a resource that might be on yet another machine.

Let's say you're talking to our sister and she wants to borrow Great Grandma's silver water jug or something. But you don't have it - Mom has it. So you tell our sister to get it from Mom instead. This happens all the time in real life and it happens all the time when machines start talking too. On the Internet, it's called a "redirect".

: So how do the machines tell each other where things are? The URL

what about verbs

that's another big aspect of REST

GET, PUT, and DELETE.

The web page just specifies the URLs to the images and the browser goes and does more GETs using the HTTP protocol on them until all the resources are obtained and the web page is displayed.

Because web pages are designed to be understood by people. A machine doesn't care about layout and styling. Machines basically just need the data. Ideally, every URL would have a human readable and a machine readable representation.

Exactly. Each of the systems would retrieve information from each other using a simple HTTP GET. If one system needs to add something to another system, it would use an HTTP POST. If a system wants to replace something in another system, it uses an HTTP PUT, or, to do a partial update, it'll hopefully use PATCH. The only thing left to figure out is what the data models should look like.