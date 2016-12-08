var request = require('request'),
	https = require('https'),
	username = "root",
    password = "12345678",
    urla = "http://127.0.0.1/dashboard/projects",
    auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

// request('http://127.0.0.1/dashboard/projects', function(error, response, body) {
// 	if (!error && response.statusCode == 200) {
// 		console.log(body);
// 	} else {
// 		console.log('error');
// 	}
// });

// request.get('http://127.0.0.1/dashboard/projects').auth('root', '12345678', false);

// var options = {
//       host: 'http://127.0.0.1',
//       path: '/api/v3/session?login=john_smith&password=strongpassw0rd',
//       method: 'POST'
//    };


// var access_req = https.request(options, function(response){
//    response.on('data', function(chunk) {
//        console.log("Body chunk: " + chunk);
//    });
// });

var token = '';

request.post(
    'http://127.0.0.1/api/v3/session?login=root&password=12345678',
    function (error, response, body) {
        	token = JSON.parse(body)['private_token'];
        	console.log(token);
    }
);

request.post(
	'http://127.0.0.1/api/v3/projects?private_token=' + 'SzMXtzsA8csE5yyDzzPC',
	{ json: {'name' : 'lab'}},
	function (error, response, body) {
			console.log(response.statusCode);
	});
