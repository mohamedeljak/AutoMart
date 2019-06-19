"use strict";

var _express = _interopRequireDefault(require("express"));

var _Reflection = _interopRequireDefault(require("../controllers/Reflection"));

var _user = _interopRequireDefault(require("../controllers/user"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import tokenkey from './key';
const key = require('./key');

const app = (0, _express.default)();
app.use(_express.default.json()); //app.use('/api/v1/car', ProtectedRoutes);

module.exports = (req, res, next) => {
  // check header for the token
  var token = req.headers['access-token']; // decode token

  if (token) {
    //console.log(key.tokenkey)
    // verifies secret and checks if the token is expired
    _jsonwebtoken.default.verify(token, key.tokenkey, (err, decoded) => {
      //console.log('-----------------------',err)
      if (err) {
        console.log(token);
        return res.json({
          status: 400,
          message: "invalid token",
          data: {
            message: 'invalid token'
          }
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token  
    res.send({
      status: 401,
      message: "token not provided",
      data: {
        message: 'No token provided.'
      }
    });
  }
};