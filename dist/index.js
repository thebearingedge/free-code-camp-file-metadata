'use strict';

var _path = require('path');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jade = require('jade');

var _upload = require('./upload');

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
var indexHtml = (0, _jade.renderFile)((0, _path.join)(__dirname, '/index.jade'));

(0, _express2.default)().use('/upload', _upload2.default).get('/', function (req, res) {
  return res.send(indexHtml);
}).listen(port, function (_) {
  return console.log('listening on ' + port);
});