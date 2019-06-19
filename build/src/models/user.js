"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _uuid = _interopRequireDefault(require("uuid"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import joi  from 'joi';
const Joi = require('joi');

const JSON = require('circular-json'); //const key = require('../key');


const key = require('../middlewares/key');

class user {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.reflections = [];
    this.reflectionssignin = [];
  }
  /**
   * 
   * @returns {object} reflection object
   */
  ///////////////////////////////Signup


  create(data) {
    //const result = Joi.validate({ username: 'abc', birthyear: 1994 }, schema);
    const email = data.email;

    const token = _jsonwebtoken.default.sign({
      email: email
    }, key.tokenkey);

    const newReflection = {
      id: _uuid.default.v4(),
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      token: token,
      address: data.address,
      is_admin: data.is_admin,
      password: data.password,
      createdDate: _moment.default.now(),
      modifiedDate: _moment.default.now()
    }; //console.log(newReflection.token)

    this.reflections.push(newReflection);
    return newReflection;
  } //////////////////////////////////////End signup
  ///////////////////////////////Signin


  getunsigninuser(q) {
    console.log(q.email);
    console.log(q.password); //console.log(Object.keys(q).length);
    //const reflection = this.findOne(id);
    //const index = this.reflections.indexOf(reflection);
    //const emailfound = this.reflections.find(reflect => reflect.email === q.email);

    const reflection = this.reflections.find(reflect => reflect.email === q.email);

    if (reflection) {
      const index = this.reflections.indexOf(reflection);
      console.log("index=" + index);
      const passwordfound = this.reflections.find(reflect => reflect.password === q.password);

      if (this.reflections[index].email === q.email && this.reflections[index].password === q.password) {
        return this.reflections.find(reflect => reflect.email === q.email);
      } else {
        return {
          "status": 404,
          "message": "Email or password Wrong"
        };
      }
    } else {
      return {
        "status": 404,
        "message": "User  not found"
      };
    }
  } //////////////////////////////////////End signin
  ///////////////////////////////create car post ad


  findOne(id) {
    return this.reflections.find(reflect => reflect.id === id);
  }

  findA1(success, lowPoint) {
    return this.reflections.filter((reflect => reflect.lowPoint === lowPoint) && (reflect => reflect.success === success));
  }
  /**
   * @returns {object} returns all reflections
   */


  findAll() {
    return this.reflections;
  }

  findAllsigninusers() {
    return this.reflectionssignin;
  }

  findAllcarsads() {
    return this.reflectionscreatecaradd;
  }

  findAllorders() {
    return this.reflectioncreateorder;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */


  update(id, data) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);
    this.reflections[index].success = data['success'] || reflection.success;
    this.reflections[index].lowPoint = data['lowPoint'] || reflection.lowPoint;
    this.reflections[index].takeAway = data['takeAway'] || reflection.takeAway;
    this.reflections[index].modifiedDate = _moment.default.now();
    return this.reflections[index];
  }
  /**
   * 
   * @param {uuid} id 
   */


  delete(id) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);
    this.reflections.splice(index, 1);
    return {};
  }

}

var _default = new user();

exports.default = _default;