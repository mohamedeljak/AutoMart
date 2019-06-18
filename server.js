// server.js
import express from 'express';
import Reflection from './src/controllers/Reflection';
import car from './src/controllers/Cars';
import Order from './src/controllers/Orders';
import user from './src/controllers/user';
import auth from './src/middlewares/authenticationMiddleware';
import authadmin from './src/middlewares/authenticonAdmin';
import Valicreatead from './src/middlewares/createAdVali';
import Valicreateorder from './src/middlewares/createOrderVali';
import ValiupdatecarAD from './src/middlewares/UpdatecarAdVali';
import ValiupdateOrder from './src/middlewares/UpdateOrderVali';
import ValiSingup from './src/middlewares/SignupVali';
import ValiSingin from './src/middlewares/SigninVali';
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})
// Signup , and Get All Signup Users 
app.post('/api/v1/auth/signup', ValiSingup ,user.create); // tested
//app.get('/api/v1/signup/all', user.getAll); // tested

// Signin , and Get All Signin Users
app.post('/api/v1/auth/signin', ValiSingin , user.getunsigninuser);  // tested
//app.get('/api/v1/signin/all', user.getAllsigninusers);// tested

// create , and show all car add  , update car status , update car price , get car by id, AND DELETE CAR AD
app.post('/api/v1/car', Valicreatead ,authadmin ,car.createcarad); // tested
//app.get('/api/v1/car', Reflection.getAllcarsads); // tested
app.patch('/api/v1/car/:id/status',auth, car.updatecarstatus); // tested
app.patch('/api/v1/car/:id/price', ValiupdatecarAD , auth ,car.updatecarprice); // tested
app.get('/api/v1/car/:id', car.getOneCar);// tested
app.delete('/api/v1/car/:id', auth , car.deletecarad); 
//  create . and show , and update  order   price

app.post('/api/v1/order/:car_id' , Valicreateorder ,auth , Order.createorderad); // tested
app.get('/api/v1/orders/all', Order.getAllorders);// tested
app.patch('/api/v1/order/:id/price',ValiupdateOrder, auth, Order.updateorderprice); // tested
app.get('/api/v1/order/:id', auth , Order.getOrderOne); // tested

// view car unsold , view unsold car with price rang
//app.get('/api/v1/car', Reflection.getunsoldcar);
app.get('/api/v1/car', car.getunsoldcarpricerange); // tested

app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.get('/api/v1/reflectionsxx', Reflection.getA1);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);



app.listen(3000)
console.log('app running on port ', 3000);