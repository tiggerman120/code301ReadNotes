# Heroku deployment

This seems like its functionally similar to live-server but it's not local so other people can also navigate there. Or yourself from a new device.

reading through the page that we bookmark/skim it seems as if what I did with heroku setup can also be done using javascript code or that we can handle the websites deployment with code at the least.

var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");

The first one will give you the key to Node's HTTP functionality. The second one is for possibility to interact with the file system. The third one allows you to handle file paths. The last one allows you to determine a file's MIME-type.

{
  "name" : "blog",
  "version" : "0.0.1",
  "description" : "My minimalistic blog",
  "dependencies" : {
    "mime" : "~1.2.7"
  }
}
There are "name", "version", "description", and "dependencies" fields in it. The syntax is simple, as you can see. We added our "mime" plug-in and now it's time to download it. We'll use built-in Node Package Manager. Just run:

npm install

We will now create send404() function. It will handle the sending of 404 error, which usually appears when requested file doesn't exist:

function send404(response) {
  response.writeHead(404, {"Content-type" : "text/plain"});
  response.write("Error 404: resource not found");
  response.end();
}

Now we will define sendPage() function. It first writes the header and then sends the contents of the file:

function sendPage(response, filePath, fileContents) {
  response.writeHead(200, {"Content-type" : mime.lookup(path.basename(filePath))});
  response.end(fileContents);
}

Now we'll define how our server will handle responses. This function will return the content of the requested file or the 404 error otherwise:

handler.js
function serverWorking(response, absPath) {
  fs.exists(absPath, function(exists) {
    if (exists) {
      fs.readFile(absPath, function(err, data) {
        if (err) {
          send404(response)
        } else {
          sendPage(response, absPath, data);
        }
      });
    } else {
      send404(response);
    }
  });
}
And now it's time to create the HTTP server:

create-server.js
var server = http.createServer(function(request, response) {
  var filePath = false;

  if (request.url == '/') {
    filePath = "public/index.html";
  } else {
    filePath = "public" + request.url;
  }

  var absPath = "./" + filePath;
  serverWorking(response, absPath);
});

Now we need to start our server. And here's the tricky part. Do you remember how we told the server to listen to the 3000th port in our first example? No? I'll remind you:

http.createServer(<some code here>).listen(3000)
We can do it when we run our server locally. But Heroku sets a dynamically assigned port number to your app. That's why we need to handle all this mess with ports as it’s shown below:

var port_number = server.listen(process.env.PORT || 3000);
You can use the port_number variable later. For example, in console.log() function to tell the user, which port is used.

That's all we need to run our simple web server. Now it's time to create some content. We'll create the public folder and two folders inside of it: stylesheets and images. We'll put all our HTML files into the public folder.The stylesheets folder is for CSS files. And the images one is for pictures.

We need to create the index.html file. It will determine our blog's exterior.

To start your server locally run:

node server.js
And then click the first link:

Then return to the main page and check the second one:

Here's our 404 page.

We tested our simple server locally and now is time to deploy it.

It's Heroku time!
Open your terminal within your project folder.

Then run:

git init
Empty Git repository will be initialized in .git/ folder.

Then run:

git add .
This command allows Git to track your files changes.

Now commit your files to the initialized Git repo:

git commit -m "Simple server functionality added"
We'll create our first Heroku application now:

heroku create
Heroku will generate a random name for your application. In my case it's enigmatic-citadel-9298. Don't worry. You can change it later.

Now we can deploy our project. Every Heroku app starts with no branches and no code. So, the first time we deploy our project, we need to specify a remote branch to push to:

git push heroku master
The application is now deployed. Ensure that at least one instance of the app is running:

heroku ps:scale web=1
And now, before we open it, it's time to choose a proper name for our first creation. I called it myfirstserver:

heroku apps:rename myfirstserver
Everything is done. You can try it now:

heroku open
This command will open your Heroku project in your web browser. In this particular case, server address is https://myfirstserver.herokuapp.com/.