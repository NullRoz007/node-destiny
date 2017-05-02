var events = require('events');
var util = require('util');
var fs = require('fs');
var _ = require('underscore');

function Generator(json) {
	events.EventEmitter.call( this );
	fs.readFile(json, (err, data) => {
		if(err) throw err;
		this.api_definition = JSON.parse(data);
		this.emit('ready')
	});
}

util.inherits(Generator, events.EventEmitter);
var standalone = false;
Generator.prototype.generateDocs = function(wrapper, title, file){
	var output = "##"+title+"\n";
	wrapper.endpoints.forEach((endpoint) => {
		var url = endpoint.url;
		var name = endpoint.name;
		
		var _url = url.replace(/{/g, '%');
		_url = _url.replace(/}/g, '%');
		var url_arr = _url.split('/');
		var _params = [];
		url_arr.forEach((part) => {
			if(part[0] === '%' && part[part.length - 1] === '%'){
				var paramName = part.substr(1).slice(0, -1);
				_params.push(paramName);
			}
		});
		
		var example_code = name+"(options, callback)\n";
		
		example_code += "Example:\n```js"+
							"\nwrapper."+name+"({\n\t"+_params.join(': null,\n\t')+": null\n}, (error, response, json) => {});\n```\n[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/"+name+") "
		output += "\n"+example_code+"\n\n---";
	});
	fs.writeFile(file, output);
}

Generator.prototype.generate = function(callback){
	console.log("I: Generating: "+this.api_definition.name+"...");
	var parent = this;
	var wrapper = {
		addGlobalHeader: function(name){
			this[name] = '';
		},
		emit: function (filename, module) {
			var object_to_emit = this;
			var props = [];
			var code = "";
			console.log("I: Setting up parent...");
			code += "var parent = {api_definition: {base_url:\""+parent.api_definition.base_url+"\",global_headers: [";//+parent.api_definition.global_headers.toString()+"}};\n\n"
			
			parent.api_definition.global_headers.forEach((header) => {
				code += "\""+header+"\", "
			});
			code += "]}};\n\nvar wrapper;\nvar standalone = true;\n\n"
			
			console.log("I: Seralizing wrapper to javascript source code...");
			
			_.each(object_to_emit, (value, key) => {
				
				if(key != "addGlobalHeader" && key != "emit"){
					
					
					if(!value) value = "\"\"";
					var value_to_put = value.toString();
					if(key == "endpoints") value_to_put = "[]"
					var val_check = value_to_put.substr(0, 8);
					if(val_check == "function") {
						var arr = value_to_put.split('\n');
						arr.splice(1, 0, "				var __name = \""+key+"\";");
						value_to_put = arr.join('\n');
					}
					var name = (key.indexOf('-') == -1) ? key : JSON.stringify(key);
					var prop = name+": "+value_to_put;
					props.push(prop);
				}
			});
			
			code += "var _request = require('request');\n\nvar output = { "+props.join(",\n")+"};\nwrapper = output;"
			
			if(module) {code += "\n\nmodule.exports = output;\n\n"}
			
			code += fillStringWithOptions.toString() + "\n\n";
			code += getGlobalHeaders.toString() + "\n\n";
			fs.writeFile(filename, code, () => {
				console.log("I: Done.");
			});
		}
	};
	this.api_definition.global_headers.forEach((header) => {
		wrapper.addGlobalHeader(header);
	});
	
	wrapper['endpoints'] = [];
	this.api_definition.endpoints.forEach((endpoint) => {
		if(endpoint.hasOAuth) {this.emit('skipped')}
		else{
			wrapper.endpoints.push({name: endpoint.name, url: endpoint.url});
			var endpoint_object = function(options, callback){
				if(!standalone){
					var _endpoint = endpoint; 
					var _url =  _endpoint.url;
					var headers_object = getGlobalHeaders(parent.api_definition.global_headers, wrapper);
					
					var _final_url = parent.api_definition.base_url+fillStringWithOptions(_url, options);
					var request_options = {
						headers: headers_object,
						url: _final_url
					};
					
					var _request = require('request');
					_request(request_options, (error, response, body) => {
						if (error) callback(error, null, null);
						
						var jObject = JSON.parse(body);
						callback(null, response, jObject);
					});
				}
				else {
					this.__endpoints__.forEach(endpoint => {
						if(endpoint["name"] == __name){
							var _url = endpoint["url"];
							var headers_object = getGlobalHeaders(parent.api_definition.global_headers, wrapper);					
							var _final_url = parent.api_definition.base_url+fillStringWithOptions(_url, options);
							var request_options = {
								headers: headers_object,
								url: _final_url
							};
							var _request = require('request');
							_request(request_options, (error, response, body) => {
								if (error) callback(error, null, null);
								
								var jObject = JSON.parse(body);
								callback(null, response, jObject);
							});
						}
					});
				}
			};
			console.log("I: Processing: "+endpoint.name);
			wrapper[endpoint.name] = endpoint_object;
		}
	});
	wrapper['__endpoints__'] = JSON.stringify(wrapper.endpoints);
	callback(wrapper);
}

module.exports = Generator;

/////////////////////////////////////////
//			Helper Functions           //
/////////////////////////////////////////

function fillStringWithOptions(string, options){
	var arr = string.split('/');
	arr.forEach(part => {
		if(part[0] === '%' && part[part.length - 1] === '%'){
			var name = part.substr(1);
			name = name.substr(0, name.length - 1);
			string = string.replace(part, options[name]);
		}
	});
	return string;
}

function getGlobalHeaders(headers, wrapper){
	var ret_object = {};
	
	headers.forEach(header => {
		var value = wrapper[header];
		ret_object[header] = value;
	});
	
	return ret_object;
}

function hasProp(object, prop_name){
	for(prop in object){
		if(prop == prop_name) return true;
	}
	return false;
}