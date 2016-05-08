'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;

(0, _express2.default)().get('/', function (req, res) {
  return res.send('hello app');
}).listen(port, function (_) {
  return console.log('listening on ' + port);
});