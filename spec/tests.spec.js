var Request = require("request");

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../tests/tests");
    });
    afterAll(() => {
        server.close();
    });
    ////////////////////////  index
    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        

        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("working");
        });

    
    });

    /////////////////end index
    ////////////////////////////sginup get
describe("POST /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/api/v1/signup/all", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        

        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("signup/all working");
        });

    
    });
    ////////////////////////////////////////endsingup  get    



    ////////////////////////////sginup POST
describe("POST /", () => {
        var data = {};
        var signpdata= {"stutas" : "1" ,"data" :{"email": "test@test.con"  , "first_name": "mohamed","password" : "123456" }  }
       // signpdata.data.hello=signpdata.data.email;
        //delete signpdata.data['email'];

        beforeAll((done) => {
            Request.post("http://localhost:3000/api/v1/auth/signup", signpdata , (error, response, body) => {
          //       console.log(signpdata);
               //  console.log(body);
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        

        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("user sign up successfuly");
        });

    
    });
    ////////////////////////////////////////endsingup  POST

  
////////////////////////////sginIN POST
describe("POST /", () => {
        var data = {};
        var signINdata= {"stutas" : "1" ,"data" :{"email": "test@test.con"  , "first_name": "mohamed","password" : "123456" }  }
       // signpdata.data.hello=signpdata.data.email;
        //delete signpdata.data['email'];

        beforeAll((done) => {
            Request.post("http://localhost:3000/api/v1/auth/signin", signINdata , (error, response, body) => {
          //       console.log(signpdata);
               //  console.log(body);
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        

        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("user sign in successfuly");
        });

    
    });
    ////////////////////////////////////////endsingIN  POST

    
    ////////////////////////////////////////////  order  add
    
describe("POST /", () => {
        var data = {};
        var orderdata= {"stutas" : "1" ,"data" :{"car_id": "12332222"  , "price": 200,"price_offered" : 400 }  }
       // signpdata.data.hello=signpdata.data.email;
        //delete signpdata.data['email'];

        beforeAll((done) => {
            Request.post("http://localhost:3000/api/v1/order", orderdata , (error, response, body) => {
          //       console.log(signpdata);
               //  console.log(body);
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        

        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("new order added sucessfuly");
        });

    
    });


    //////////////////////////////////////////// end order add


  //////////////////////////////////  UPDATE CAR STUTAS TO SOLD 

    
describe("PATCH STATUS CAR AD  TO SOLD /", () => {
        var data = {};
        var statuscaradd="status"; 
        var carads={"stutas" : "1" ,"data" :{ "id":12345666 , "email": "test@test.con"  , "manufacture": "toyota","price" : 900000 }  };
        var idcar = 12345666;
       // signpdata.data.hello=signpdata.data.email;
        //delete signpdata.data['email'];

        beforeAll((done) => {
         
         Request.post("http://localhost:3000/api/v1/car",carads, (error, response, body) => {
        
         //       console.log(signpdata);
                //console.log(body);
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                //console.log(response.body);
                done();
            });   





            Request.patch("http://localhost:3000/api/v1/car/"+idcar+"/"+statuscaradd, (error, response, body) => {
        
         //       console.log(signpdata);
                //console.log(body);
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                //console.log(response.body);
                done();
            });


        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("mark car ad as SOLD");
        });

    
    });
///////////////////////////////////////// END  UPDATE CAR STATUS TO SOLD

///////////////////////////////////////////////////  UPDATE CAR PRICE 
 

    
describe("PATCH  updated car price/", () => {
        var data = {};
        var car_price=9000000; 
        var carads={"stutas" : "1" ,"data" :{ "id":12345666 , "email": "test@test.con"  , "manufacture": "toyota","price" : 100 }  };
        var idcar = 12345666;
        //delete signpdata.data['email'];

        beforeAll((done) => {
         
         Request.post("http://localhost:3000/api/v1/car",carads, (error, response, body) => {

         //       console.log(signpdata);
                //console.log(body);
                //console.log(carads.data.price+"<br>");
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                //console.log(response.body.price+"<br>");
                done();
            });   

            Request.patch("http://localhost:3000/api/v1/car/"+idcar+"/"+car_price, (error, response, body) => {
                        carads.data.price=car_price;

         //       console.log(signpdata);
                //console.log(carads.data.price+"<br>");
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                //console.log(response.body+"<br>");
                done();
            });


        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("Car ad's price updated");
        });

    
    });


///////////////////////////////////////////////  END UPDATE CAR PRICE

    ////////////////////////////sginin  
describe(" /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/api/v1/signin/all", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        

        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("signin/all working");
        });

    
    });
    /////endsignin    
    //////////////////////////////  cars 
    
describe(" /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/api/v1/cars/all", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        

        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("cars/all working");
        });

    
    });
    ///////////////////////////////////end cars

    //////////////////////////////  car id 
    
describe(" /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/api/v1/car/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        

        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("cars id working");
        });

    
    });
    
    ///////////////////////////////////end id car
   /////////////////////////////////////////order all
   describe(" /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/api/v1/orders/all", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        

        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("orders/all working");
        });

    
    });

   //////////////////////////end order all


/////////////////////////////////////////order id
   describe(" /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/api/v1/order/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        

        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("order id  working");
        });

    
    });

   //////////////////////////end order id


  //////////////////////////////////  UPDATE ODER PRICE

    
describe("PATCH STATUS CAR AD  TO SOLD /", () => {
        var data = {};
        
        var orderad={"stutas" : "1" ,"data" :{"id": 12345666   , "price": 200,"price_offered" : 400 }  }
        var orderid = 12345666;
        var new_offered_price=88888888;
       // signpdata.data.hello=signpdata.data.email;
        //delete signpdata.data['email'];

        beforeAll((done) => {
         
         Request.post("http://localhost:3000/api/v1/order",orderad, (error, response, body) => {
        
         //       console.log(signpdata);
                //console.log(body);
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                //console.log(response.body);
                done();
            });   





            Request.patch("http://localhost:3000/api/v1/order/"+orderid+"/"+new_offered_price, (error, response, body) => {
        
             orderad.data.old_offered_price=orderad.data.price_offered;
             delete orderad.data['price_offered'];
             orderad.data.new_offered_price= new_offered_price;

         //       console.log(signpdata);
                //console.log(body);
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                //console.log(response.body);
                done();
            });


        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("Order price updated");
        });

    
    });
///////////////////////////////////////// END  UPDATE  ORDER PRICE






  /////////////////////  car query string 
describe(" /", () => {
        var data = {};
        //var id ="hhhhhhhhhhh";
        //var status="available";
        var stx=9999;
        beforeAll((done) => {
            Request.get("http://localhost:3000/api/v1/car\status=test\&min_price=1\&max_price=10000" , (error, response, body) => {
                //console.log(body);
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });

        });
        

        it("Status 200", () => {
            //console.log(data);
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("get car query string");
        });

    
    });

  ////////////////////////////end car  query  string 


      /////////////////////  add new car AD 
describe(" /", () => {
        var data = {};
        //var id ="hhhhhhhhhhh";
        var carads={"stutas" : "1" ,"data" :{"email": "test@test.con"  , "manufacture": "toyota","price" : 900000 }  };
        
        beforeAll((done) => {
            Request.post("http://localhost:3000/api/v1/car" , carads ,(error, response, body) => {
               // console.log(body);
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });

        });
        

        it("Status 200", () => {
            //console.log(data);
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("new car ad added sucessfuly");
        });

    
    });

  ////////////////////////////end add new car AD 

//////////////////////////////////////////////  Delete car ad
 

    
describe("PATCH STATUS CAR AD  TO SOLD /", () => {
        var data = {};
        var statuscaradd="status"; 
        var carads={"stutas" : "1" ,"data" :{ "id":12345666 , "email": "test@test.con"  , "manufacture": "toyota","price" : 900000 }  };
        var idcar = 12345666;
       // signpdata.data.hello=signpdata.data.email;
        //delete signpdata.data['email'];

        beforeAll((done) => {
         
         Request.post("http://localhost:3000/api/v1/car",carads, (error, response, body) => {
        
         //       console.log(signpdata);
                //console.log(body);
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                //console.log(response.body);
                done();
            });   





            Request.delete("http://localhost:3000/api/v1/car/"+idcar, (error, response, body) => {
        
         //       console.log(signpdata);
                //console.log(body);
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                //console.log(response.body);
                done();
            });


        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.message).toBe("Car Ad sucessfuly deleted");
        });

    
    });



//////////////////////////////////////////////end delete car ad

});