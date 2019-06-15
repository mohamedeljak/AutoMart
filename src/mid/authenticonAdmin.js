import express from 'express';
import Reflection from '../controllers/Reflection';
import user from '../controllers/user';
import jwt from 'jsonwebtoken';
import userx from '../models/user';
//import tokenkey from './key';


const key = require('./key');

const app = express()
app.use(express.json())



//app.use('/api/v1/car', ProtectedRoutes);
module.exports = (req, res, next) => {


    // check header for the token
    var token = req.headers['access-token'];
    const reflection = userx.reflections.find(reflect => reflect.token === token);

    //console.log("is_admin==="+reflection.id);
    // decode token
    if (token) {
     //console.log(key.tokenkey)
      // verifies secret and checks if the token is expired
      jwt.verify(token, key.tokenkey , (err, decoded) =>{  
      //console.log('-----------------------',err)
        if (err) {
        	//console.log(token);
          return res.json({ 
           status :400,
      	message :"invalid token",
      	data: {  

          	message: 'invalid token' } });    
        } else {
         if(reflection) {
          const reflectionuser = userx.reflections.find(reflect => reflect.id === reflection.id);
           console.log("iffffffff== "+reflectionuser.is_admin);
          if(reflectionuser.is_admin === true){
          //  console.log("is_admin==="+reflection);
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;    
          next();
        }
        else {
          return res.json({ 
           status :400,
        message :"your are not admin",
        data: {  

            message: ' your are not admin' } });


        }
      }
     else {

       return res.json({ 
           status :400,
        message :"User not Found",
        data: {  

            message: ' User not Found' } });

     }

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
 