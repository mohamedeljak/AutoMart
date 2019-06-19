"use strict";

var _express = _interopRequireDefault(require("express"));

var _Reflection = _interopRequireDefault(require("../controllers/Reflection"));

var _user = _interopRequireDefault(require("../controllers/user"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import tokenkey from './key';
const Joi = require('joi');

const key = require('./key');

const app = (0, _express.default)();
app.use(_express.default.json()); //app.use('/api/v1/car', ProtectedRoutes);

module.exports = (req, res, next) => {
  const data = req.body;
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    first_name: Joi.string().alphanum().required(),
    last_name: Joi.string().alphanum().required(),
    address: Joi.string().alphanum().required(),
    is_admin: Joi.boolean().default(false),
    password: Joi.string().alphanum().required()
  });
  Joi.validate(data, schema, (err, value) => {
    if (err) {
      console.log(schema.email); // send a 422 error response if validation fails

      res.status(422).json({
        status: 'error',
        message: 'Invalid Login Data(x)'
      });
    } else {
      next();
    }
  });
};