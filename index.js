const bodyParser = require('body-parser');
const express = require('express');
const OmxManager = require('omx-manager');
const manager = new OmxManager();
const ejsLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/', function (req, res) {
  let camera = manager.create('./public/video.mp4');
  camera.play();
  camera.on('end', function(){
    res.send('Complete Ajax Req.');
  });
});

app.listen('3000', () => {});

