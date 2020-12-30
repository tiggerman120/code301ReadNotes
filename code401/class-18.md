# AWS: API, Dynamo and Lambda

## questions

What’s the difference between a FIFO and a standard queue?
a fifo supports exactly once processing whereas a standard queue does not

How can the server be assured a message was properly received?
the client can send a response that the message was properly received

What classic design pattern is best represented by event driven programming?
a singleton because the events are all originating from a single event hub

How do you test an event driven system?
provide it with different inputs/jest/spyOn

## definitions

Serverless Functions
lambda functions are functions that run without the use of your own server and can be useful for event logging
Cloud Storage
remote storage in a cloud system where space is partitioned to you. can be costly.
CDN
geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end users
<!--https://en.wikipedia.org/wiki/Content_delivery_network-->

things I understand better
APi's, aws dynamo

things I want to implement
I want to implement event driven systems to build a website better than its current state