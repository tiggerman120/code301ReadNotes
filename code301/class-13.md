# form traffic

At it's most basic, the web uses a client/server architecture that can be summarized as follows. a client (usually a web browser) sends a request to a server (most of the time a web server like Apache, Nginx, IIS, Tomcat, etc.), using the HTTP protocol. The server answers the request using the same protocol.

## form

The form element defines how the data will be sent. All of its attributes are designed to let you configure the request to be sent when a user hits a submit button. The two most important attributes are action and method.

The action attribute defines where the data gets sent. Its value must be a valid relative or absolute URL. If this attribute isn't provided, the data will be sent to the URL of the page containing the form — the current page.

The names and values of the non-file form controls are sent to the server as name=value pairs joined with ampersands. The action value should be a file on the server that can handle the incoming data, including ensuring server-side validation. The server then responds, generally handling the data and loading the URL defined by the action attribute, causing a new page load (or a refresh of the existing page, if the action points to the same page).

The method attribute defines how data is sent. The HTTP protocol provides several ways to perform a request; HTML form data can be transmitted via a number of different methods, the most common being the GET method and the POST method

The GET method is the method used by the browser to ask the server to send back a given resource

The POST method is a little different. It's the method the browser uses to talk to the server when asking for a response that takes into account the data provided in the body of the HTTP request

HTTP requests are never displayed to the user (if you want to see them, you need to use tools such as the Firefox Network Monitor or the Chrome Developer Tools).

If you need to send a password (or any other sensitive piece of data), never use the GET method or you risk displaying it in the URL bar, which would be very insecure.

If you need to send a large amount of data, the POST method is preferred because some browsers limit the sizes of URLs. In addition, many servers limit the length of URLs they accept.

## server side

Whichever HTTP method you choose, the server receives a string that will be parsed in order to get the data as a list of key/value pairs. The way you access this list depends on the development platform you use and on any specific frameworks you may be using with it.

PHP offers some global objects to access the data. Assuming you've used the POST method

There are many other server-side technologies you can use for form handling, including Perl, Java, .Net, Ruby, etc. Just pick the one you like best. That said, it's worth noting that it's very uncommon to use these technologies directly because this can be tricky. It's more common to use one of the many high quality frameworks that make handling forms easier, such as:

Django for Python (a bit more heavyweight than Flask, but with more tools and options).
Express for Node.js.
Laravel for PHP.
Ruby On Rails for Ruby.
It's worth noting that even using these frameworks, working with forms isn't necessarily easy. But it's much easier than trying to write all the functionality yourself from scratch, and will save you a lot of time.

## sending files

Sending files with HTML forms is a special case. Files are binary data — or considered as such — whereas all other data is text data. Because HTTP is a text protocol, there are special requirements for handling binary data.

If you want to send files, you need to take three extra steps:

This attribute lets you specify the value of the Content-Type HTTP header included in the request generated when the form is submitted. This header is very important because it tells the server what kind of data is being sent. By default, its value is application/x-www-form-urlencoded. In human terms, this means: "This is form data that has been encoded into URL parameters."

Set the method attribute to POST because file content can't be put inside URL parameters.
Set the value of enctype to multipart/form-data because the data will be split into multiple parts, one for each file plus one for the text data included in the form body (if text is also entered into the form).
Include one or more input type="file" controls to allow your users to select the file(s) that will be uploaded.

## security

Each time you send data to a server, you need to consider security. HTML forms are by far the most common server attack vectors (places where attacks can occur). The problems never come from the HTML forms themselves — they come from how the server handles data.

All data that comes to your server must be checked and sanitized. Always. No exception.

Escape potentially dangerous characters. The specific characters you should be cautious with vary depending on the context in which the data is used and the server platform you employ, but all server-side languages have functions for this. Things to watch out for are character sequences that look like executable code (such as JavaScript or SQL commands).
Limit the incoming amount of data to allow only what's necessary.
Sandbox uploaded files. Store them on a different server and allow access to the file only through a different subdomain or even better through a completely different domain.

As we'd alluded to above, sending form data is easy, but securing an application can be tricky. Just remember that a front-end developer is not the one who should define the security model of the data.