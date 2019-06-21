import express from 'express';
import user from '../controllers/user';
import jwt from 'jsonwebtoken';
//import tokenkey from './key';


const key = require('./key');

const app = express()
app.use(express.json())



//app.use('/api/v1/car', ProtectedRoutes);
module.exports = (req, res, next) => {


    // check header for the token
    var token = req.headers['access-token'];

    // decode token
    if (token) {
     //console.log(key.tokenkey)
      // verifies secret and checks if the token is expired
      jwt.verify(token, key.tokenkey , (err, decoded) =>{  
      //console.log('-----------------------',err)
        if (err) {
        	console.log(token);
          return res.json({ 
           status :400,
      	message :"invalid token",
      	data: {  

          	message: 'invalid token' } });    
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;    
          next();
        }
      });

    } else {

      // if there is no token  

      res.send({ 
      	status :401,
      	message :"token not provided",
      	data: {  

          message: 'No token provided.'} 
      });

    }
  };
 