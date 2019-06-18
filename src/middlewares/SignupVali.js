import express from 'express';
import Reflection from '../controllers/Reflection';
import user from '../controllers/user';
import jwt from 'jsonwebtoken';
//import tokenkey from './key';
const Joi = require('joi');


const key = require('./key');

const app = express()
app.use(express.json())



//app.use('/api/v1/car', ProtectedRoutes);
module.exports = (req, res, next) => {
const data = req.body;
const schema = Joi.object().keys({
    
    email:Joi.string().email().required(),
    first_name:Joi.string().alphanum().required(),
    last_name: Joi.string().alphanum().required(),
    address :Joi.string().alphanum().required(),
    is_admin : Joi.boolean().default(false),
     password : Joi.string().alphanum().required()
    
    });     
   Joi.validate(data, schema, (err, value) => {
 if (err) {
             console.log(schema.email);
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: 'Invalid Login Data(x)',
              
            });
            
            }   
            else {
                console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyy');

         next();


            }
});
    
  };
 