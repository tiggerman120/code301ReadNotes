# review research and discussion

What is the benefit of transforming data into packets?
you arent limited to a fixed data transfar rate
UDP is often refereed to as a connectionless protocol. Why is this?
because no connection between the source and destination needs to be established to transmit data
<!-- https://www.sciencedirect.com/topics/computer-science/connectionless-protocol#:~:text=DNS%2C%20TFTP%2C%20and%20many%20other,the%20payload%20is%20not%20corrupted. assisted with this answer -->
Can a socket server application have multiple socket connections?
yes so long as they are associated with different client-side IP port pairs
<!-- https://stackoverflow.com/questions/11129212/tcp-can-two-different-sockets-share-a-port/11129641#:~:text=Multiple%20connections%20on%20the%20same,system%20resources%20allow%20it%20to. assisted with this answer-->
Can a socket connection application be connected to multiple socket servers?
yes it can handle as many connections as system resources allow
Can an application be both a socket server and a socket connection?
yes but you have to use two different ports or ensure that the sockets aren't using the ports at the same time

## definitions

Observer Pattern

Listener

Event Handler
a callback function to be used by an event listener when an event happens
Event Driven Programming
programming concept based around listening and responding to events(user input)
Event Loop
the event loop monitors the call stack and callback queue it first takes from the queue and pushes into the call stack(a tick)
<!-- https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5 assisted with this answer -->
Event Queue
a repository where events from an app are held prior to being processed by a receiving program or system
<!-- https://www.techopedia.com/definition/24963/event-queue#:~:text=An%20event%20queue%20is%20a,of%20an%20enterprise%20messaging%20system. assisted with this answer -->
Call Stack
the order in which the commands execute
Emit/Raise/Trigger
send an event out into the world to be listened to(a whale song)
Subscribe
a pay attention to something like event listeners are subscribed to their listener command
database
a collection area for information to be stored for future access
things I knew about but have better clarity on now

1. web browsers require application layer protocols which is what http is

2. presentation layer takes in data and compresses and converts and encrypts it for the computer

3. session layer manages connections including connection creation and termination. authentication and authorization is handled by the session layer

4. transfer layer lost data can be resent via TCP

I'm hoping to learn how to manage events so that I can rebuild user functionality for ffxivclock.com

im hoping to learn how to respond to events from multiple users simultaneously over multiple connections
how to create a responsive signup and signin form

im most excited to combine everything we have been learning to rebuild a website but better.