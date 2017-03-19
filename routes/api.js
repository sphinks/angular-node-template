
var bodyParser = require("body-parser");
var request = require("request");
var cheerio = require('cheerio');



exports.contacts = function(req, res) {
  var returnData = [];
  var options = {
    url: 'http://stackoverflow.com/users'
  };
  var processEveryItem = function(index, element) {
    returnData.push({
        firstname: $(this).find('a').text(),
        lastname: $(this).find('.reputation-score').text()
      });
    console.log('user: ', [$(this).find('a').text(), $(this).find('.reputation-score').text()]);          
  };

  request.get(options, function(error, response, body) {
        console.log('status Code:', response && response.statusCode);
        returnData = [];
        $ = cheerio.load(body);
        $('.user-details').each(processEveryItem);
        res.json(returnData);
    });
};

exports.contact = function(req, res) {

  res.json(
    {
      firstname: 'John',
      lastname: 'Doe'
    }
  );
};

exports.createContact = function(req, res) {

  res.json(
    {
      result: 'Created'
    }
  );
};

exports.updateContact = function(req, res) {

  res.json(
    {
      result: true
    }
  );
};

exports.destroyContact = function(req, res) {

  res.json(
    {
      result: 'Removed'
    }
  );
};