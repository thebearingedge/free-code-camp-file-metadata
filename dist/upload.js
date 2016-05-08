'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [(0, _multer2.default)().single('uploaded'), function (_ref, res) {
  var file = _ref.file;
  var method = _ref.method;


  if (method !== 'POST') return res.redirect('/');

  var name = file.originalName;
  var size = file.size;


  res.json({ name: name, size: size });
}];