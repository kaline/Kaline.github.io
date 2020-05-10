
var express = require('express')
var app = express()
var path = require('path');

app.use(express.static(path.join('public')));
app.use("/css", express.static('css'));
app.use("/html", express.static('html'));

const hostname =  '127.0.0.1';
const port = 3000;

app.get('/', function(req, res){
	res.sendFile(path.join('public' +'index.html'));
});
app.get('events', function(req, res){
	res.sendFile(path.join('public' + 'talks.html'));
});
app.get('projects', function(res, req){
	res.sendFile(path.join('public' + 'projects.html'))
})



app.listen(port, hostname, () => {
	console.log('Server running at http:///', hostname + ':' + port);
});