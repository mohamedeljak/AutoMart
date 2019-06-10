import ReflectionModel from '../models/Reflection';

const Reflection = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} reflection object 
   */
  create(req, res) {
    if (!req.body.data.email || !req.body.data.first_name ||  !req.body.data.password) {
      return res.status(400).send({'message': ' signup All fields are required'})
    }
    const reflection = ReflectionModel.create(req.body.data);
    return res.status(201).send(reflection);
  },

 createsignin(req, res) {
    if (!req.body.data.email || !req.body.data.first_name ||  !req.body.data.password) {
      return res.status(400).send({'message': ' SigninAll fields are required'})
    }
    const reflection = ReflectionModel.createsignin(req.body.data);
    return res.status(201).send(reflection);
  },
 createcarad(req, res) {
    if (!req.body.data.email || !req.body.data.manufacture ||  !req.body.data.price) {
      return res.status(400).send({'message': '  car ad  All fields are required'})
    }
    const reflection = ReflectionModel.createcarad(req.body.data);
    return res.status(201).send(reflection);
  },

createorderad(req, res) {
    if (!req.body.data.car_id || !req.body.data.price  ||  !req.body.data.price_offered) {
      return res.status(400).send({'message': '  order ad  All fields are required'})
    }
    const reflection = ReflectionModel.createorderad(req.body.data);
    return res.status(201).send(reflection);
  },


  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} reflections array
   */
  getAll(req, res) {
    const reflections = ReflectionModel.findAll();
    return res.status(200).send(reflections);
  },

  getAllsigninusers(req, res) {
    const reflections = ReflectionModel.findAllsigninusers();
    return res.status(200).send(reflections);
  },

   getAllcarsads(req, res) {
    const reflections = ReflectionModel.findAllcarsads();
    return res.status(200).send(reflections);
  },


getAllorders(req, res) {
    const reflections = ReflectionModel.findAllorders();
    return res.status(200).send(reflections);
  },

  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} reflection object
   */
  getOne(req, res) {
    const reflection = ReflectionModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': 'reflection not found'});
    }
    return res.status(200).send(reflection);
  },

  getOrderOne(req, res) {
    const reflection = ReflectionModel.findoderOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': ' Order not found not found'});
    }
    return res.status(200).send(reflection);
  },

  getOneCar(req, res) {
    const reflection = ReflectionModel.findCarOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': ' Car found not found'});
    }
    return res.status(200).send(reflection);
  },

  getA1(req, res) {
  
    const reflection = ReflectionModel.findA1(req.query.success , req.query.lowPoint);
    if (!reflection) {
      return res.status(404).send({'message': 'reflection seach  not found'});
    }
    return res.status(200).send(reflection);
  },


getunsoldcarpricerange(req, res) {
  
    const reflection = ReflectionModel.findsoldcarpricerange(req.query);
    if (!reflection) {
      return res.status(404).send({'message': '  unsold price  seach  not found'});
    }
    return res.status(200).send(reflection);
  },

getunsoldcar(req, res) {
  
    const reflection = ReflectionModel.findsoldcars(req.query);
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
    const reflection = ReflectionModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': 'reflection not found'});
    }
    const updatedReflection = ReflectionModel.update(req.params.id, req.body)
    return res.status(200).send(updatedReflection);
  },

updateorderprice(req, res) {
    var new_price=req.params.new_price;
    const reflection = ReflectionModel.findoderOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': ' update  order  not found'});
    }
    const updatedReflection = ReflectionModel.updateorderprice(req.params.id, req.body, new_price)
    return res.status(200).send(updatedReflection);
  },

/////////////////////////////////////////
updatecarstatus(req, res) {
    var new_price=req.params.new_price;
    const reflection = ReflectionModel.findCarOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': ' ID error  Can not update car stutas to sold   '});
    }
    const updatedReflection = ReflectionModel.updatecarstatus(req.params.id, req.body)
    return res.status(200).send(updatedReflection);
  },

  updatecarprice(req, res) {
    var car_price=req.params.car_price;
    const reflection = ReflectionModel.findCarOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': ' car_price not updated  '});
    }
    const updatedReflection = ReflectionModel.updatecarprice(req.params.id, req.body, car_price )
    return res.status(200).send(updatedReflection);
  },


  /**
   * 
   * @param {object} req 

   * @param {object} res 
   * @returns {void} return statuc code 204 
   */

   
   deletecarad(req, res) {
    const reflection = ReflectionModel.findCarOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': 'car id  not found'});
    }
    
    const ref = ReflectionModel.deletecarad(req.params.id);
    const reflectionx = ReflectionModel.findCarOne(req.params.id);
    return res.status(404).send({'status':0 ,'message': 'Car Ad successfully deleted'});
    //return res.status(204).send(me);
        
  },



  delete(req, res) {
    const reflection = ReflectionModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': 'reflection not found'});
    }
    const ref = ReflectionModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Reflection;