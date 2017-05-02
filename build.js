var autowrapper = require('./lib/autowrapper.js');
var request = require('request');
var fs = require('fs');

var destiny_object = {
	name: "Bungie.net DestinyPlatform API Wrapper",
	base_url: "http://bungie.net/platform/",
	global_headers: [
		"X-API-KEY"
	],
	endpoints: []
};
console.log("I: Fetching endpoints...");
request({url: "https://raw.githubusercontent.com/DestinyDevs/BungieNetPlatform/master/wiki-builder/data/endpoints.json"}, (error, response, body) => {
	var jObject = JSON.parse(body);
	var DestinyService = jObject['DestinyService'];
	for(e in DestinyService.endpoints){
		var endpoint = DestinyService.endpoints[e];
		
		var method = endpoint.method;
		if(method != "POST"){
			var _url = endpoint.endpoint.replace(/{/g, '%');
			_url = _url.replace(/}/g, '%');
			var url_arr = _url.split('/');
			var _params = [];
			url_arr.forEach((part) => {
				if(part[0] === '%' && part[part.length - 1] === '%'){
					var paramName = part.substr(1).slice(0, -1);
					_params.push(paramName);
				}
			});
			
			var object = {
				name: e,
				params: _params,
				url: _url
			};
			destiny_object.endpoints.push(object);
		}
		else {
			console.log("W: Skipping POST endpoint.");
		}
	}
	
	var output = JSON.stringify(destiny_object);
	fs.writeFile("destiny.json", output, () => {
		var Generator = new autowrapper('destiny.json');
		Generator.on('ready', () => {
			Generator.generate((wrapper) => {
				fs.mkdir('output');
				wrapper.emit('./output/destiny_api.js', true);
				Generator.generateDocs(wrapper, "Destiny API Wrapper", "./output/README.md");
			});
		});
	});
});
		

