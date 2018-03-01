
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var home = require('./routes/home');
// Example route
// var user = require('./routes/user');
var happy_A = require('./routes/happy_A');
var graph = require('./routes/graph');
var selectEmote = require('./routes/selectEmote');
var makePost = require('./routes/makePost');
var info = require('./routes/info');
var happy_B = require('./routes/happy_B');

var happy1 = require('./routes/happy1');
var happy2 = require('./routes/happy2');
var happy3 = require('./routes/happy3');
var happy4 = require('./routes/happy4');

var loving1 = require('./routes/loving1');
var loving2 = require('./routes/loving2');
var loving3 = require('./routes/loving3');
var loving4 = require('./routes/loving4');

var relaxed1 = require('./routes/relaxed1');
var relaxed2 = require('./routes/relaxed2');
var relaxed3 = require('./routes/relaxed3');
var relaxed4 = require('./routes/relaxed4');

var sad1 = require('./routes/sad1');
var sad2 = require('./routes/sad2');
var sad3 = require('./routes/sad3');
var sad4 = require('./routes/sad4');

var upset1 = require('./routes/upset1');
var upset2 = require('./routes/upset2');
var upset3 = require('./routes/upset3');
var upset4 = require('./routes/upset4');

var anxious1 = require('./routes/anxious1');
var anxious2 = require('./routes/anxious2');
var anxious3 = require('./routes/anxious3');
var anxious4 = require('./routes/anxious4');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/home', home.view);
// Example route
// app.get('/users', user.list);
app.get('/happy_A', happy_A.view);
app.get('/graph', graph.view);
app.get('/selectEmote', selectEmote.view);
app.get('/makePost', makePost.view);
app.get('/info', info.view);
app.get('/happy_B', happy_B.view);

app.get('/happy1', happy1.view);
app.get('/happy2', happy2.view);
app.get('/happy3', happy3.view);
app.get('/happy4', happy4.view);

app.get('/loving1', loving1.view);
app.get('/loving2', loving2.view);
app.get('/loving3', loving3.view);
app.get('/loving4', loving4.view);

app.get('/relaxed1', relaxed1.view);
app.get('/relaxed2', relaxed2.view);
app.get('/relaxed3', relaxed3.view);
app.get('/relaxed4', relaxed4.view);

app.get('/sad1', sad1.view);
app.get('/sad2', sad2.view);
app.get('/sad3', sad3.view);
app.get('/sad4', sad4.view);

app.get('/upset1', upset1.view);
app.get('/upset2', upset2.view);
app.get('/upset3', upset3.view);
app.get('/upset4', upset4.view);

app.get('/anxious1', anxious1.view);
app.get('/anxious2', anxious2.view);
app.get('/anxious3', anxious3.view);
app.get('/anxious4', anxious4.view);



app.post('/happy1-post', happy1.post);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
