var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  serveStatic = require('serve-static');

var app = module.exports = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extend: true}));
app.use(bodyParser.json())
app.use(methodOverride());
app.use(serveStatic(__dirname + '/public'));

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.get('/api/contacts', api.contacts);
app.get('/api/contacts/:id', api.contact);
app.post('/api/contacts', api.createContact);
app.put('/api/contacts/:id', api.updateContact);
app.delete('/api/contacts/:id', api.destroyContact);

app.get('*', routes.index);

app.listen(3000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
