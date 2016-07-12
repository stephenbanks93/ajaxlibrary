//Hello World
// var app = require('express')();

// 	var httpListeningTool = require('http').Server(app);
// 	app.get('/', function(request, response){
// 		response.send('<h1>Hello World</h1>')
// 	});

// 	httpListeningTool.listen(3000, function(){
// 		console.log('listening on *:3000')
// 	});	


	// Accessing express module
	var app = require('express')();
	
	// Using http - module that is innate to NODE.JS
	//("http") - built in node module: passing the app 
	// variable to the built in server function
	//("fs")
	var http = require('http').Server(app);
	
	//"app.get" - first argument is path
	// second argument is callback
	//  '/' - root directory
	app.get('/', function(req, res){
		res.sendFile(__dirname + '/index.html')
	});

	//
	http.listen(3000, function(){
		console.log('tuning in to *:3000')
	});
	