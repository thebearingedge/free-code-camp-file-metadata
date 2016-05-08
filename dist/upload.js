'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();
var upload = (0, _multer2.default)();

router.use(upload.single('uploaded'), function (_ref, res) {
  var file = _ref.file;
  var headers = _ref.headers;
  var size = file.size;


  res.json(size);
});

exports.default = router;