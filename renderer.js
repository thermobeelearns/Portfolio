var express = require('express');
var router = express.Router();
var fs = require('fs');
var os = require('os');
var path = require('path');
global.appRoot = path.resolve(__dirname);

router.get('/', function (req, res) {
	res.sendFile(appRoot + '/hello.html');
});

router.get('/hello', function (req, res) {
	res.sendFile(appRoot + '/hello.html');
});

router.get('/resume', function (req, res) {
	res.sendFile(appRoot + '/resume.html');
});

router.get('/portfolio', function (req, res) {
	res.sendFile(appRoot + '/portfolio.html');
});


module.exports = router;
