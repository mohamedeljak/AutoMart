import userModel from '../models/user';
const user = {
create(req, res) {
    if (!req.body.data.email || !req.body.data.first_name ||  !req.body.data.password) {
      return res.status(400).send({'message': ' signup All fields are required'})
    }
    const reflection = userModel.create(req.body.data);
    return res.status(201).send(reflection);
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
  }
}

export default user;    