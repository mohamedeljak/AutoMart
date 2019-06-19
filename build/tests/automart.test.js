"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _server = _interopRequireDefault(require("./../server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//  .set('Authorization', )
var token;
var car_id;
var order_id;

_chai.default.use(_chaiHttp.default); //////////////////////////  Test(1)  SIGNUP


describe("Auth", () => {
  describe(" TEST(1) Signup ", () => {
    it("it hould return 200 when user account is created", done => {
      const signUpData = {
        "email": "mohamed@gggggggggggggggmaillast.com",
        "first_name": "mooooo",
        "last_name": "mohamed",
        "address": "mohamed",
        "is_admin": true,
        "password": "mohamed11"
      };

      _chai.default.request(_server.default).post("/api/v1/auth/signup").send(signUpData).end((error, res) => {
        console.log(res.body);
        (0, _chai.expect)(res.body.status).to.be.equal(201);
        token = res.body.data.token;
        done();
      });
    });
  });
}); //////////////////////////  END   Test(1)  SIGNUP
////////////////////////////////////////////// TEST (2)SIGN IN

describe("Auth", () => {
  describe(" TEST (2) SignIN ", () => {
    it("it hould return 200 when user account is login", done => {
      const signinData = {
        "email": "mohamed@gggggggggggggggmaillast.com",
        "password": "mohamed11"
      };

      _chai.default.request(_server.default).post("/api/v1/auth/signin").send(signinData).end((error, res) => {
        (0, _chai.expect)(res.body.status).to.be.equal(200);
        console.log("T=" + res.body.data.token);
        done();
      });
    });
  });
}); //////////////////////////////////////////////// END TEST (2) SIGN IN
/////////////////////////CAAAAAAAAAAAAAAAAAAAAR ////////////////////////////////////////////////
/////////////////////////////////TEST(3) CREATE CAR AD   

describe("CREATE A CAR AD", () => {
  describe(" TEST (3 )CREATE A CAR AD", () => {
    it("it hould return 200 when   car AD created", done => {
      const caraddata = {
        "manufacture": "toyota",
        "price": "90"
      };

      _chai.default.request(_server.default).post("/api/v1/car").set("access-token", token).send(caraddata).end((error, res) => {
        console.log("T=" + token);
        console.log(res.body);
        (0, _chai.expect)(res.body.status).to.be.equal(201); //const token= res.body.data.token;

        console.log("T=" + res.body.data.token);
        car_id = res.body.data.id;
        done();
      });
    });
  });
}); // ///////////////////////////////// TEST (3) END CREATE CAR AD 
// ////////////////////////////////////////////////////// TEST (4)  UPDATE CAR AD STATUS  

describe("UPDATE CAR AD STATUS  ", () => {
  describe("TEST (4)  UPDATE CAR AD STATUS", () => {
    it("it hould return 200 when ad stutas updated to sold", done => {
      console.log("Car_ID" + car_id);

      _chai.default.request(_server.default).patch(`/api/v1/car/${car_id}/status`).set("access-token", token).end((error, res) => {
        console.log(res.body);
        (0, _chai.expect)(res.body.status).to.be.equal(200);
        const token = res.body.data.token;
        console.log("T=" + res.body.data.token);
        done();
      });
    });
  });
}); // //////////////////////////////////////////////////////  END TEST (4)  UPDATE CAR AD STATUS  
// /////////////////////////////////////////////////////////////// TEST (5) UPDATE CAR AD PRICE

describe("UPDATE CAR AD PRICE  ", () => {
  describe("TEST (4)  UPDATE CAR AD PRICE", () => {
    it("it hould return 200 when  car ad price updated", done => {
      const caradpricedata = {
        "price": "99.9"
      };

      _chai.default.request(_server.default).patch(`/api/v1/car/${car_id}/price`).set("access-token", token).send(caradpricedata).end((error, res) => {
        //  console.log(res.body);
        (0, _chai.expect)(res.body.status).to.be.equal(201);
        const token = res.body.data.token; //console.log("T="+res.body.data.token)

        done();
      });
    });
  });
}); // ////////////////////////////////////////////////////////////////// END TEST (5) UPDATE CAR AD PRICE
// //////////////////////////////////////////////////////////// TEST (6)  GET CAR AD BY ID

describe("GET CAR AD BY ID   ", () => {
  describe("TEST (6)  GET CAR AD BY ID", () => {
    it("it hould return 200 when  car ad  founded", done => {
      _chai.default.request(_server.default).get(`/api/v1/car/${car_id}`).set("access-token", token).end((error, res) => {
        console.log(res.body);
        (0, _chai.expect)(res.body.status).to.be.equal(200);
        const token = res.body.data.token;
        console.log("T=" + res.body.data.token);
        done();
      });
    });
  });
}); // //////////////////////////////////////////////////////////// END TEST (6) GET CAR AD BY ID 
////////////////////////////////////////////////////// GET  GARS BY STATUS 

describe("GET  ALL CARS BY STUTAS   ", () => {
  describe("GET ALL CARS  BY STUTAS", () => {
    it("it hould return 200 when  car ad  founded", done => {
      _chai.default.request(_server.default).get(`/api/v1/car/`).set("access-token", token).end((error, res) => {
        console.log(res.body);
        (0, _chai.expect)(res.body.status).to.be.equal(200);
        const token = res.body.data.token;
        console.log("T=" + res.body.data.token);
        done();
      });
    });
  });
}); ///////////////////////////////////////////////////////// END GET CARS BY STUTAS
//////////////////////////////////////////////// GET ALL CARS 

describe("GET  ALL CARS   ", () => {
  describe("GET ALL CARS ", () => {
    it("it hould return 200 when  car ad  founded", done => {
      _chai.default.request(_server.default).get(`/api/v1/car/`).set("access-token", token).end((error, res) => {
        console.log(res.body);
        (0, _chai.expect)(res.body.status).to.be.equal(200);
        const token = res.body.data.token;
        console.log("T=" + res.body.data.token);
        done();
      });
    });
  });
}); ///////////////////////////////////////////////////ENG GET ALL CARS
// delete a car 
////////////////////////////////////////////////////////////////////////////// end cars  Cars
////////////////////////////////////////////// Order////////////////////////////////////////////////
///////////////////////////////////////////////End ORDERS////////////////////////////////////////////
///////////////////////////////////////////  CREATE ORDER

describe("CREATE A CAR AD", () => {
  describe(" TEST (9) create Order", () => {
    it("it hould return 200 when   order created", done => {
      const orderdata = {
        "price_offered": "77777"
      };

      _chai.default.request(_server.default).post(`/api/v1/order/${car_id}`).set("access-token", token).send(orderdata).end((error, res) => {
        console.log("T=" + token);
        console.log(res.body);
        (0, _chai.expect)(res.body.status).to.be.equal(201); //const token= res.body.data.token;

        console.log("T=" + res.body.data.token);
        order_id = res.body.data.id;
        done();
      });
    });
  });
}); ////////////////////////////////////////// END CREATE ORDER
////////////////////////////////////////  Update ORDER PRICE 

describe("UPDATE ORDER  PRICE  ", () => {
  describe("TEST (4)  UPDATE CAR AD PRICE", () => {
    it("it hould return 200 when  car ad price updated", done => {
      const orderadpricedata = {
        "price": "99.9"
      };

      _chai.default.request(_server.default).patch(`/api/v1/car/${order_id}/price`).set("access-token", token).send(orderadpricedata).end((error, res) => {
        //  console.log(res.body);
        (0, _chai.expect)(res.body.status).to.be.equal(201);
        const token = res.body.data.token; //console.log("T="+res.body.data.token)

        done();
      });
    });
  });
}); ////////////////////////////////////////// END UPDATE ORDER PRICE
////////////////////////////////////////  GET ORDER BY ID 

describe("GET CAR AD BY ID   ", () => {
  describe("TEST (6)    Order  BY ID", () => {
    it("it hould return 200 when  order  founded", done => {
      _chai.default.request(_server.default).get(`/api/v1/order/${order_id}`).set("access-token", token).end((error, res) => {
        console.log(res.body);
        (0, _chai.expect)(res.body.status).to.be.equal(200);
        const token = res.body.data.token;
        console.log("T=" + res.body.data.token);
        done();
      });
    });
  });
}); ///////////////////////////////////////// END GET ORDER BY ID
/////////////////////////////////////////////  GET ALL ORDERS

describe("GET  ALL ORDERS   ", () => {
  describe("GET  ALL ORDERS", () => {
    it("it hould return 200 when  order  founded", done => {
      _chai.default.request(_server.default).get("/api/v1/orders/all").set("access-token", token).end((error, res) => {
        console.log(res.body);
        (0, _chai.expect)(res.body.status).to.be.equal(200);
        const token = res.body.data.token;
        console.log("T=" + res.body.data.token);
        done();
      });
    });
  });
}); ///////////////////////////////////////////  END GET ALL ORDERS