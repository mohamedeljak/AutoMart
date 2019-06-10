// server.js
import express from 'express';
import Reflection from './src/controllers/Reflection';
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})
// Signup , and Get All Signup Users 
app.post('/api/v1/auth/signup', Reflection.create); // tested
app.get('/api/v1/signup/all', Reflection.getAll); // tested

// Signin , and Get All Signin Users
app.post('/api/v1/auth/signin', Reflection.createsignin);  // tested
app.get('/api/v1/signin/all', Reflection.getAllsigninusers);// tested

// create , and show all car add  , update car status , update car price , get car by id, AND DELETE CAR AD
app.post('/api/v1/car', Reflection.createcarad); // tested
//app.get('/api/v1/car', Reflection.getAllcarsads); // tested
app.patch('/api/v1/car/:id/status', Reflection.updatecarstatus); // tested
app.patch('/api/v1/car/:id/:car_price', Reflection.updatecarprice); // tested
app.get('/api/v1/car/:id', Reflection.getOneCar);// tested
app.delete('/api/v1/car/:id', Reflection.deletecarad); 
//  create . and show , and update  order   price

app.post('/api/v1/order', Reflection.createorderad); // tested
app.get('/api/v1/orders/all', Reflection.getAllorders);// tested
app.patch('/api/v1/order/:id/:new_price', Reflection.updateorderprice); // tested
app.get('/api/v1/order/:id', Reflection.getOrderOne); // tested

// view car unsold , view unsold car with price rang
//app.get('/api/v1/car', Reflection.getunsoldcar);
app.get('/api/v1/car', Reflection.getunsoldcarpricerange); // tested

app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.get('/api/v1/reflectionsxx', Reflection.getA1);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);



app.listen(3000)
console.log('app running on port ', 3000);