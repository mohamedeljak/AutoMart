import userModel from '../models/user';
import { pool } from '../../db';
import uuid from 'uuid';
const Joi = require('joi');
const user = {

async create(req, res) {
      const reflection = userModel.create(req.body);

    const text = `INSERT INTO
      users(id, email,first_name, last_name, token ,address,  is_admin, password,created_date, modified_date )
      VALUES($1,$2, $3, $4, $5, $6, $7,$8, $9 , $10)
      returning *`;
    const values = [
      
      reflection.id,
      reflection.email,
      reflection.first_name,
      reflection.last_name,
      reflection.token,
      reflection.address,
      reflection.is_admin,
      reflection.password,
      reflection.createdDate,
      reflection.createdDate
    ];
    

    try {
      const { rows } = await pool.query(text, values);
      return res.status(201).send({"status":201 , "message": "User is created", "data" :rows[0]});
    } catch(error) {
      //return res.status(400).send(error.message);
       
      return res.status(400).send({'message': '  user not found'});
    }
  }
,

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


 async  getunsigninuser(req, res) {
  
  const reflection = userModel.getunsigninuser(req.body);
  const text = `select *
from users where email=$1 and password=$2`;
    const values = [
      
      
      reflection.email,
      reflection.password
      
    ];     

  try {
      const { rows, rowCount } = await pool.query(text, values);
      console.log("fffffffffffff"+rowCount);
     
      if (rowCount>0){
      return res.status(200).send({"status":200 , "message": "User Log In Successfully", "data" :rows[0]});
    }
    else {
      return res.status(400).send({"status":400 , "message": "User Not found , either email or passwordd wrong"});
    }

    } catch(error) {

    //  return res.status(400).send({"status":400 , "message": "User Not found , either email or passwordd wrong"});
    }

  } // end signinuser



}

export default user;    