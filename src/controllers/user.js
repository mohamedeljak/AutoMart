import userModel from '../models/user';
const Joi = require('joi');
const user = {
create(req, res) {
    if (!req.body.email || !req.body.first_name ||  !req.body.password || !req.body.last_name ||
      !req.body.is_admin === " " ) {
      return res.status(400).send({'message': ' signup All fields are required when signup'})
    }
 const data = req.body;
 console.log(data);
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
                message: 'Invalid request data',
              
            });
            
            }

            else {

           const reflection = userModel.create(req.body);
    return res.status(201).send({"status":201 , "message": "User is created", "data" : reflection   });

            
            }
            });


    
  },

 createsignin(req, res) {
    if (!req.body.data.email || !req.body.data.first_name ||  !req.body.data.password) {
      return res.status(400).send({'message': ' SigninAll fields are required'})
    }
    const reflection = userModel.createsignin(req.body.data);
    return res.status(201).send(reflection);
  },
  getAll(req, res) {
    const reflections = userModel.findAll();
    return res.status(200).send(reflections);
  },
  getAllsigninusers(req, res) {
    const reflections = userModel.findAllsigninusers();
    return res.status(200).send(reflections);
  },
  getunsigninuser(req, res) {
  
const data = req.body;
 console.log(data);
 const schema = Joi.object().keys({
    email:Joi.string().email().required(),
    password : Joi.string().alphanum().required()
  });

Joi.validate(data, schema, (err, value) => {
 if (err) {
             console.log(schema.email);
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
              
            });
            
            }

else {

   ////////////////////////////if ok
    const reflection = userModel.getunsigninuser(req.body);
    var keyreflection = Object.keys(reflection).length;
    console.log(reflection);
    if (keyreflection === 2) {
      return res.status(200).send({"status":404 , "message": "User not found ", "data":reflection});
          }
    else {
    return res.status(200).send({"status":200 , "message": "User Log in", "data":reflection});
  }   // if ok 

}
      });
  

  } // end signinuser



}

export default user;    