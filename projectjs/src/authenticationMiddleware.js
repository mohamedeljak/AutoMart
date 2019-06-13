import express from 'express';
import Reflection from './controllers/Reflection';
import user from './controllers/user';
const key = require('./key');



//app.use('/api/v1/car', ProtectedRoutes);
module.exports = (req, res, next) => {


    // check header for the token
    var token = req.headers['access-token'];

    // decode token
    if (token) {

      // verifies secret and checks if the token is expired
      jwt.verify(token, app.get('tokenkey'), (err, decoded) =>{      
        if (err) {
          return res.json({ message: 'invalid token' });    
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;    
          next();
        }
      });

    } else {

      // if there is no token  

      res.send({ 

          message: 'No token provided.' 
      });

    }
  };
 