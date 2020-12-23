# Message queues

## questions

What does it mean that web sockets are bidirectional? Why is this useful?
they can both send and receive information. so you can communicate between the user and server on one line
Does socket.io use HTTP? Why?
yes because its part of the application layer
What happens when a client emits an event?
a whale song goes out for the server to hear with the event name
What happens when a server emits an event?
a whale song goes out for all to hear
What happens if a client “misses” an event?
an error should throw
How can we mitigate this?
by having event handlers resend the event in the event the client missed the event

## definitions

Socket
A socket is one endpoint of a two-way communication link between two programs running on the network.
<!-- https://docs.oracle.com/javase/tutorial/networking/sockets/definition.html#:~:text=Definition%3A,address%20and%20a%20port%20number. -->
Web Socket
computer communications protocol, providing full-duplex communication channels over a single TCP connection.
<!-- https://en.wikipedia.org/wiki/WebSocket#:~:text=WebSocket%20is%20a%20computer%20communications,being%20standardized%20by%20the%20W3C. -->
Socket.io
Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js
<!-- socket.io docs -->
Client
the user interacting with your application
Server
the programs sending to information to and receiving requests from the user
OSI Model
The OSI model describes seven layers that computer systems use to communicate over a network
app layer presentation layer session layer transport layer network layer
data link layer physical layer
TCP Model
The Internet protocol suite is the conceptual model and set of communications protocols used in the Internet and similar computer networks.
<!--https://en.wikipedia.org/wiki/Internet_protocol_suite -->
TCP
Transmission Control Protocol is a standard that defines how to establish and maintain a network conversation through which application programs can exchange data.
<!--https://searchnetworking.techtarget.com/definition/TCP#:~:text=TCP%20(Transmission%20Control%20Protocol)%20is,of%20data%20to%20each%20other.-->
UDP
The User Datagram Protocol, or UDP, is a communication protocol used across the Internet for especially time-sensitive transmissions such as video playback
<!--https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/-->
Packets
compressed converted and encrypted information ready to be sent across the web