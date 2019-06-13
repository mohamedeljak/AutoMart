import moment from 'moment';
import uuid from 'uuid';
import jwt from 'jsonwebtoken';



//import joi  from 'joi';
const Joi = require('joi');
const JSON = require('circular-json');
//const key = require('../key');
const key = require('../mid/key');

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
    //console.log(data);
   const schemasignup = Joi.object().keys({
    //first_name: Joi.string().alphanum().min(3).max(30).required(),
    //password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
         stutas: Joi.string().min(1).max(1).required() ,
         })

   //const result = Joi.validate({ username: 'abc', birthyear: 1994 }, schema);
    
    const email= data.email;
    const token = jwt.sign({email:email},key.tokenkey);
   
  const newReflection = {
         id: uuid.v4(),
         email: data.email ,
         first_name: data.first_name,
         last_name: data.last_name,
         token : token,
         address :data.address ,
         is_admin : data.is_admin ,
         password : data.password,
         createdDate: moment.now(),
         modifiedDate: moment.now()
         };
      
      //console.log(newReflection.token)
    this.reflections.push(newReflection);
    return newReflection
   
  
  
  }
  //////////////////////////////////////End signup
  ///////////////////////////////Signin
  getunsigninuser(q) {
    console.log(q.email);
    console.log(q.password);
    //console.log(Object.keys(q).length);
   const emailfound = this.reflections.find(reflect => reflect.email === q.email);
   const passwordfound = this.reflections.find(reflect => reflect.password === q.password); 
   if (emailfound && passwordfound){
  
    return this.reflections.find(reflect => reflect.email === q.email);
    }

  }
  //////////////////////////////////////End signin
///////////////////////////////create car post ad
 
  findOne(id) {
    return this.reflections.find(reflect => reflect.id === id);
  }

  

  


  findA1(success , lowPoint) {
return this.reflections.filter(( reflect => reflect.lowPoint === lowPoint) && (reflect => reflect.success === success));
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
    this.reflections[index].modifiedDate = moment.now()
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
export default new user();