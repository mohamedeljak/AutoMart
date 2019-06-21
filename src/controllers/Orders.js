import OrderModel from '../models/Orders';
import { pool } from '../../db';
const Joi = require('joi');

const Order = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} reflection object 
   */
  
 createcarad(req, res) {
    var token = req.headers['access-token'];
  //console.log("token==="+token);
    if (!req.body.manufacture ||  !req.body.price) {
      return res.status(400).send({'message': '  car ad  All fields are required'})
    }
    const reflection = OrderModel.createcarad(req.body,token);
    var keyreflection = Object.keys(reflection).length;
    //console.log("xxxxxxxxxx"+keyreflection); 
    if (keyreflection > 2){ 
    return res.status(201).send({"status":201 , "message": "Car AD  is created", "data" : reflection});
                          }

                          else{
                            //console.log(ReflectionModel.createcarad.reflectioncaraddnotfound);
                             return res.status(201).send({"status":201 , "message": " Car ad not created ", "data" :reflection});
                            //return res.status(201).send({"status":404 , "message": "User not found check token please"});

                          }  
  },

async  createorderad(req, res) {
 var token = req.headers['access-token'];
  
    if (!req.body.price_offered) {
      return res.status(400).send({'message': '  order ad  All fields are required'})
    }
    const reflection = OrderModel.createorderad(req.body,token,req.params.car_id);
    var keyreflection = Object.keys(reflection).length;
    if (keyreflection > 2){
    //return res.status(201).send({"status":201 , "message": "Buy Order  is created", "data" : reflection});
     //////////////////////////////////////  DB WORK 
     console.log("zzzzzzzzzzz="+reflection.created_on);
      const text = `INSERT INTO
      orders(id,user_id, car_id,price, price_offered,created_date, modified_date )
      VALUES($1,$2, $3, $4, $5, $6, $7)
      returning *`;
    const values = [
      
      reflection.id,
      reflection.user_id,
      reflection.car_id,
      reflection.price,
      reflection.price_offered,
      reflection.created_on,
      reflection.modified_on
    ];
    try {
      const { rows } = await pool.query(text, values);
    
      return res.status(201).send({"status":201 , "message": "Order created successfully", "data" :rows[0]});
    } catch(error) {
      //return res.status(400).send(error.message);
       
      return res.status(404).send(error.message);
    }
     /////////////////////////////////////// END DATA WORK





     }
     else {
          return res.status(201).send({"status":404 , "message": " Order ad not created ", "data" :reflection});
        }//////////////////////if ok 
  
  },


  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} reflections array
   */
  getAll(req, res) {
    const reflections = OrderModel.findAll();
    return res.status(200).send(reflections);
  },

  getAllsigninusers(req, res) {
    const reflections = OrderModel.findAllsigninusers();
    return res.status(200).send(reflections);
  },

   getAllcarsads(req, res) {
    const reflections = OrderModel.findAllcarsads();
    return res.status(200).send({"status":200 , "message": "all cars ", "data" : reflections});
  },


getAllorders(req, res) {
    const reflections = OrderModel.findAllorders();
    return res.status(200).send({"status":200 , "message": "all orders ", "data" :reflections});
  },

  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} reflection object
   */
  getOne(req, res) {
    const reflection = OrderModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': 'reflection not found'});
    }
    return res.status(200).send(reflection);
  },

  getOrderOne(req, res) {
    const reflection = OrderModel.findoderOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': ' Order not found not found'});
    }
    return res.status(200).send({"status":200 , "message": " Get order ad by id ", "data" :reflection});
  },

  getOneCar(req, res) {
    const reflection = OrderModel.findCarOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': ' Car found not found'});
    }
    return res.status(200).send({"status":200 , "message": " Get car ad by id ", "data" :reflection});
  },

  getA1(req, res) {
  
    const reflection = OrderModel.findA1(req.query.success , req.query.lowPoint);
    if (!reflection) {
      return res.status(404).send({'message': 'reflection seach  not found'});
    }
    return res.status(200).send(reflection);
  },


getunsoldcarpricerange(req, res) {
  
    const reflection = OrderModel.findsoldcarpricerange(req.query);
    if (!reflection) {
      return res.status(404).send({'message': '  unsold price  seach  not found'});
    }
    return res.status(200).send({"status":200 , "message": "all cars ", "data" :reflection});
  },

getunsoldcar(req, res) {
  
    const reflection = OrderModel.findsoldcars(req.query);
    if (!reflection) {
      return res.status(404).send({'message': 'No availabe car'});
    }
    return res.status(200).send(reflection);
  },


  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated reflection
   */
  update(req, res) {
    const reflection = OrderModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': 'reflection not found'});
    }
    const updatedReflection = OrderModel.update(req.params.id, req.body)
    return res.status(200).send(updatedReflection);
  },

updateorderprice(req, res) {
  var token = req.headers['access-token'];
    var new_price=req.params.new_price;
    const reflection = OrderModel.findoderOne(req.params.id);
    /*
    if (!reflection) {
      return res.status(404).send({'message': ' update  order  not found'});
    }
    */
    const updatedReflection = OrderModel.updateorderprice(req.params.id, req.body, token)
    console.log(updatedReflection); 
    var keyreflection = Object.keys(updatedReflection).length;
    if (keyreflection > 2 ){
    return res.status(200).send({"status":200 , "message": " successfully updated ", "data" :updatedReflection});
    }
    else {
return res.status(201).send({"status":201 , "message": " order offered price not updated ", "data" :updatedReflection});
                            //return res.status(201).send({"status":404 , "message": "User not found check token please"});


    }
  },

/////////////////////////////////////////
updatecarstatus(req, res) {


  var token = req.headers['access-token'];
    var new_price=req.params.new_price;
    const reflection = OrderModel.findCarOne(req.params.id);
    /*
    if (!reflection) {
      return res.status(404).send({'message': ' ID error  Can not update car stutas to sold   '});
    }
    */
    const updatedReflection = OrderModel.updatecarstatus(req.params.id, req.body,token)
     var keyreflection = Object.keys(updatedReflection).length;
   if (keyreflection > 2){
    return res.status(200).send({"status":200 , "message": " successfully updated  car status to sold", "data" :updatedReflection});
  }
  else {
return res.status(201).send({"status":201 , "message": " Car Ad Status not updated ", "data" :updatedReflection});
                            //return res.status(201).send({"status":404 , "message": "User not found check token please"});


  }
  },

  updatecarprice(req, res) {
    var token = req.headers['access-token'];
    var car_price=req.params.car_price;
    const reflection = OrderModel.findCarOne(req.params.id);
    /*
    if (!reflection) {
      return res.status(404).send({'message': ' car_price not updated  '});
    }
    */
    const updatedReflection = OrderModel.updatecarprice(req.params.id, req.body, token )
    var keyreflection = Object.keys(updatedReflection).length;
    if (keyreflection > 2){
    return res.status(200).send({"status":200 , "message": " successfully updated ", "data" :updatedReflection});
    }
  else {
      return res.status(201).send({"status":201 , "message": " Car price not updated ", "data" :updatedReflection});
                            //return res.status(201).send({"status":404 , "message": "User not found check token please"});


  }

  },


  /**
   * 
   * @param {object} req 

   * @param {object} res 
   * @returns {void} return statuc code 204 
   */

   
   deletecarad(req, res) {
    const reflection = OrderModel.findCarOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': 'car id  not found'});
    }
    
    const ref = OrderModel.deletecarad(req.params.id);
    const reflectionx = OrderModel.findCarOne(req.params.id);
    return res.status(404).send({'status':0 ,'message': 'Car Ad successfully deleted'});
    //return res.status(204).send(me);
        
  },



  delete(req, res) {
    const reflection = OrderModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': 'reflection not found'});
    }
    const ref = OrderModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Order;