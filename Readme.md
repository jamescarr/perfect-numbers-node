#Example Node.JS app

This is an example node.js app I put together complete with
a jspec setup and project structure for development. specs 
will run given that ruby is running using version
1.8.x and are ran by calling

	jspec run --node

or for autospec like mode:
	jspec --node

which will execute specs on file change. Still trying to figure 
out how to have specs run against the get function. :)

To run the server, just run
	node app.js

and navigate to http://localhost:3000

## I cannot get this to work
In order to run this, you will need:
	node.JS
	kiwi
	express
	jspec (installed as a gem)
	ruby 1.8.x (you really should use rvm for it)
	ruby gems (potentially)

Ruby gems is required for the jspec runner. Unfortunately the autospec mode
only seems to work in 1.8 ... you can run the spec with 1.9 given that you 
just call jspec run --node. 
