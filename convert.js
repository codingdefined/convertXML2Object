//Convert Objects to XML
var objects = require('./objects'),
xml2js = require('xml2js');

var xmlValues = new xml2js.Builder({rootname : 'objects'});
convertedObjects = xmlValues.buildObject(objects);
console.log(convertedObjects);

//Convert XML to Objects
xml2js.parseString (convertedObjects, {
	explicitArray: false,
	explicitRoot: false
}, function(err, obj) {
	console.log(obj);
});
