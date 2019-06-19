"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Reflection = _interopRequireDefault(require("./src/controllers/Reflection"));

var _Cars = _interopRequireDefault(require("./src/controllers/Cars"));

var _Orders = _interopRequireDefault(require("./src/controllers/Orders"));

var _user = _interopRequireDefault(require("./src/controllers/user"));

var _authenticationMiddleware = _interopRequireDefault(require("./src/middlewares/authenticationMiddleware"));

var _authenticonAdmin = _interopRequireDefault(require("./src/middlewares/authenticonAdmin"));

var _createAdVali = _interopRequireDefault(require("./src/middlewares/createAdVali"));

var _createOrderVali = _interopRequireDefault(require("./src/middlewares/createOrderVali"));

var _UpdatecarAdVali = _interopRequireDefault(require("./src/middlewares/UpdatecarAdVali"));

var _UpdateOrderVali = _interopRequireDefault(require("./src/middlewares/UpdateOrderVali"));

var _SignupVali = _interopRequireDefault(require("./src/middlewares/SignupVali"));

var _SigninVali = _interopRequireDefault(require("./src/middlewares/SigninVali"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server.js
const app = (0, _express.default)();
app.use(_express.default.json());
app.get('/', (req, res) => {
  return res.status(200).send({
    'message': 'YAY! Congratulations! Your first endpoint is working'
  });
}); // Signup , and Get All Signup Users 

app.post('/api/v1/auth/signup', _SignupVali.default, _user.default.create); // tested
//app.get('/api/v1/signup/all', user.getAll); // tested
// Signin , and Get All Signin Users

app.post('/api/v1/auth/signin', _SigninVali.default, _user.default.getunsigninuser); // tested
//app.get('/api/v1/signin/all', user.getAllsigninusers);// tested
// create , and show all car add  , update car status , update car price , get car by id, AND DELETE CAR AD

app.post('/api/v1/car', _createAdVali.default, _authenticonAdmin.default, _Cars.default.createcarad); // tested
//app.get('/api/v1/car', Reflection.getAllcarsads); // tested

app.patch('/api/v1/car/:id/status', _authenticationMiddleware.default, _Cars.default.updatecarstatus); // tested

app.patch('/api/v1/car/:id/price', _UpdatecarAdVali.default, _authenticationMiddleware.default, _Cars.default.updatecarprice); // tested

app.get('/api/v1/car/:id', _authenticationMiddleware.default, _Cars.default.getOneCar); // tested

app.delete('/api/v1/car/:id', _authenticationMiddleware.default, _Cars.default.deletecarad); //  create . and show , and update  order   price

app.post('/api/v1/order/:car_id', _createOrderVali.default, _authenticationMiddleware.default, _Orders.default.createorderad); // tested

app.get('/api/v1/orders/all', _Orders.default.getAllorders); // tested

app.patch('/api/v1/order/:id/price', _UpdateOrderVali.default, _authenticationMiddleware.default, _Orders.default.updateorderprice); // tested

app.get('/api/v1/order/:id', _authenticationMiddleware.default, _Orders.default.getOrderOne); // tested
// view car unsold , view unsold car with price rang
//app.get('/api/v1/car', Reflection.getunsoldcar);

app.get('/api/v1/car', _Cars.default.getunsoldcarpricerange); // tested

app.get('/api/v1/reflections', _Reflection.default.getAll);
app.get('/api/v1/reflections/:id', _Reflection.default.getOne);
app.get('/api/v1/reflectionsxx', _Reflection.default.getA1);
app.put('/api/v1/reflections/:id', _Reflection.default.update);
app.delete('/api/v1/reflections/:id', _Reflection.default.delete);
app.listen(3000);
console.log('app running on port ', 3000);
var _default = app;
exports.default = _default;