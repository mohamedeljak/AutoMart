"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Joi = require('joi');

const user = {
  create(req, res) {
    if (!req.body.email || !req.body.first_name || !req.body.password || !req.body.last_name || !req.body.is_admin === " ") {
      return res.status(400).send({
        'message': ' signup All fields are required when signup'
      });
    }

    const reflection = _user.default.create(req.body);

    return res.status(201).send({
      "status": 201,
      "message": "User is created",
      "data": reflection
    });
  },

  createsignin(req, res) {
    if (!req.body.data.email || !req.body.data.first_name || !req.body.data.password) {
      return res.status(400).send({
        'message': ' SigninAll fields are required'
      });
    }

    const reflection = _user.default.createsignin(req.body.data);

    return res.status(201).send(reflection);
  },

  getAll(req, res) {
    const reflections = _user.default.findAll();

    return res.status(200).send(reflections);
  },

  getAllsigninusers(req, res) {
    const reflections = _user.default.findAllsigninusers();

    return res.status(200).send(reflections);
  },

  getunsigninuser(req, res) {
    ////////////////////////////if ok
    const reflection = _user.default.getunsigninuser(req.body);

    var keyreflection = Object.keys(reflection).length;
    console.log(reflection);

    if (keyreflection === 2) {
      return res.status(200).send({
        "status": 404,
        "message": "User not found ",
        "data": reflection
      });
    } else {
      return res.status(200).send({
        "status": 200,
        "message": "User Log in",
        "data": reflection
      });
    } // if ok 

  } // end signinuser


};
var _default = user;
exports.default = _default;