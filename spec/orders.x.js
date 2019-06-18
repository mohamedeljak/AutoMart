var Request = require("request");


describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../tests/ordertest");
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
        



    ////////////////////////////sginup POST

    ////////////////////////////////////////endsingup  POST

  
////////////////////////////sginIN POST

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

    

///////////////////////////////////////// END  UPDATE CAR STATUS TO SOLD

///////////////////////////////////////////////////  UPDATE CAR PRICE 
 

    

///////////////////////////////////////////////  END UPDATE CAR PRICE

    ////////////////////////////sginin  

    ///////////////////////////////////end cars

    //////////////////////////////  car id 
    
    
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

    
describe("PATCH Update order price /", () => {
        var data = {};
        
        var orderad= {
        "id": "b85404c1-e1a3-496d-bdf9-9e0f8d0d9a28",
        "user_id": "44897cdd-dfc6-433b-9e2d-fecc33825c9c",
        "car_id": "1ed703eb-8421-4908-ac11-ebe36bfdc08f",
        "price": 90,
        "price_offered": 77777,
        "status": "available",
        
    };
        var orderid ="b85404c1-e1a3-496d-bdf9-9e0f8d0d9a28";
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
        
             orderad.old_offered_price=orderad.price_offered;
             delete orderad['price_offered'];
             orderad.new_offered_price= new_offered_price;

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
            expect(data.body.message).toBe("new order added sucessfuly");
        });

    
    });
///////////////////////////////////////// END  UPDATE  ORDER PRICE






  /////////////////////  car query string 

  ////////////////////////////end car  query  string 


      /////////////////////  add new car AD 

  ////////////////////////////end add new car AD 

//////////////////////////////////////////////  Delete car ad
 

    


//////////////////////////////////////////////end delete car ad

});