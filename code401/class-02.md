# class 02

## Put v Patch

Put is a method of modifying a resource where the client sends data that updates the entire resource.

For instance when updating a first name that contains a first and last name you need to update the entire resource not just the first name

Patch, unlike Put applies a partial update to the resource. so you could only need to update the first name in the database
<!-- rapidapi.com/blog/put-vs-patch assisted with this answer-->

## api mocking tools

[mockoon](https://mockoon.com/)
[Mocky](https://designer.mocky.io/)
[Mockable](https://www.mockable.io/)

## compare and contrast Swagger and APIDoc.js

swagger-ui is meant for consumption by JavaScript web projects that include module bundlers, such as Webpack, Browserify, and Rollup. Its main file exports Swagger UI's main function

swagger-ui-dist is meant for server-side projects that need assets to serve to clients. The module, when imported, includes an absolutePath helper function that returns the absolute filesystem path to where the swagger-ui-dist module is installed.
Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, build, document and consume REST APIs. The major Swagger tools include:

Swagger Editor – browser-based editor where you can write OpenAPI specs.
Swagger UI – renders OpenAPI specs as interactive API documentation.
Swagger Codegen – generates server stubs and client libraries from an OpenAPI spec.

Swagger sells itself as user friendly and prvoides many tools for the client to use

What is docker?

<!--https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/ assisted with this answer -->
apiDoc creates a documentation from API annotations in your source code
it also provides templates for generating API documentation
<!-- https://apidocjs.com/ assisted with this answer-->

OpenAPI has better documentation and supports both YAML and JSON outputs

200 - if the callback is accepted

400 - unsuccessful Bad Request
401 - Unsuccessful Unauthorized(no credentials)
403 - Successful but API won't allow it Forbidden
404 - unsuccessful not found
405 - unsuccessful http method that the resource doesnt allow
406 - unsuccesful cannot generate preferred media types as indicated by the accept request header
412 - unsuccesful precondition failed from request header
415 - unsupported media type API cant process supplied media type
500 -generic something went wrong not client fault
501 - does not recognize the the req method


<!--https://restfulapi.net/http-status-codes/ assisted with this answer -->

## SOAP V ReST

### Simple Object Access Control

SOAP is more rigid with rules and can't achieve any level of standardization without the rules
It also relies exlcusively on XML to provide messaging services
It is highly extensible but you only use the pieces you need for your task (no need for WS security for an open to the public web service)
XML used can be extremely complex and in some languages<!--(like Javascript :( )--> those requests need to be built manually which can be problematic as SOAP is intolerant of errors

It provides built in error-handling which can prove incredibly useful
<!--https://smartbear.com/blog/test-and-monitor/soap-vs-rest-whats-the-difference/ assisted with this response -->

### Representational State Transfer

ReST provides a lighter weight and less cumbersome alternative to SOAP
developers using javascript find they don't need to build the XML structure everytime
Instead of using XML to make a request ReST usually relies on an url
ReST can use four different HTTP verbs "get put post and delete" to complete tasks
ReST isn't relegated to XML you can also utilize CSV, JSON, and RSS
<!--https://smartbear.com/blog/test-and-monitor/soap-vs-rest-whats-the-difference/ assisted with this response -->

## definitions

web server:
On the hardware side, a web server is a computer that stores web server software and a website's component files. A web server connects to the Internet and supports physical data interchange with other devices connected to the web.

On the software side, a web server includes several parts that control how web users access hosted files. At a minimum, this is an HTTP server. An HTTP server is software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages). An HTTP server can be accessed through the domain names of the websites it stores, and it delivers the content of these hosted websites to the end user's device.
<!--https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server assisted with this response-->
express: simply put express is the server.
Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to:
Write handlers for requests with different HTTP verbs at different URL paths (routes).
Integrate with "view" rendering engines in order to generate responses by inserting data into templates.
Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
Add additional request processing "middleware" at any point within the request handling pipeline.
<!-- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction assisted with this response -->
routing:
wrrc: web request response cycle
the wrrc is the cycle in which the client and the server interact and in which the server interacts with the api(in which case the server is the client and the api is the server)
the client makes a request to the server. the server checks if it already has the information and responds if it does. if not makes a request to the api for the data at which point the api responds with the data. the server then responds with the data to the original client

## 3 things

3 things I had heard about previously and now have better clarity on are what media types are, ReST, and what status codes actually mean.

3 things I am hoping to learn more about are building web application using ReSTful API's
how to utilize ReSTful API's and javascript to build an ecommerce site
I want to use MongoDB

I am most excited about using AWS and MongoDB