# node-botnet
Idea for a botnet controlled by a node API. Runs on your localhost.

Bots are collected by putting the code in ```victims.js``` on the webpage they are viewing.

Uses express.js to host a control center and API for the bots to connect to.

# Setup

To start the server:

`node app.js`

Server runs on localhost:3000 by default
Default password is "98frayw4fa4hw"

# Known Issues

It doesn't work. It was an idea to begin with, but I would like to see it work
eventually.

# To do:
Make a flooder that works:
```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://127.0.0.1:3000/api. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing).
```
