import userModel from '../models/user';
const user = {
create(req, res) {
    if (!req.body.email || !req.body.first_name ||  !req.body.password || !req.body.last_name ||
    	!req.body.is_admin) {
      return res.status(400).send({'message': ' signup All fields are required when signup'})
    }
    const reflection = userModel.create(req.body);
    return res.status(201).send({"status":201 , "message": "User is created", "data" : reflection   });
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
  
    const reflection = userModel.getunsigninuser(req.body);
    if (!reflection) {
      return res.status(404).send({'message': '  user not found'});
    }
    return res.status(200).send(reflection);
  }



}

export default user;    