const bodyParser = require('body-parser');
const express = require('express');
const OmxManager = require('omx-manager');
const manager = new OmxManager();
const ejsLayouts = require('express-ejs-layouts');
const socket = require('socket.io');
const app = express();

const server = app.listen(process.env.PORT || 3000);
const io = socket(server);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));

const environment = process.env.NODE_ENV || 'development';
const config = require('config');

io.sockets.on('connection', function(socket) {
	console.log('New client @', socket.id);
	socket.on('create', function(){
		let video = config.get(environment + '.video');
		let camera = manager.create(video);
		camera.play();
		camera.on('end', function(){
			io.emit('gohome');
		})
	});
	socket.on('disconnect', function(){console.log('Disconnected', Date())});
});

app.get('/', (req, res) => {
  console.log('Page Loaded');
  let data = config.get(environment);
  res.render('index.ejs', data);
});

