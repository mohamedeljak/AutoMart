var Request = require("request");

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../tests/userstest");
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
    


    //////////////////////////////////////////// end order add


  //////////////////////////////////  UPDATE CAR STUTAS TO SOLD 

    
///////////////////////////////////////// END  UPDATE CAR STATUS TO SOLD

///////////////////////////////////////////////////  UPDATE CAR PRICE 
 

    


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
    
    ///////////////////////////////////end cars

    //////////////////////////////  car id 
    
    
    ///////////////////////////////////end id car
   /////////////////////////////////////////order all
   
   //////////////////////////end order all


/////////////////////////////////////////order id
   
   //////////////////////////end order id


  //////////////////////////////////  UPDATE ODER PRICE

    

///////////////////////////////////////// END  UPDATE  ORDER PRICE






  /////////////////////  car query string 
  ////////////////////////////end car  query  string 


      /////////////////////  add new car AD 

  ////////////////////////////end add new car AD 

//////////////////////////////////////////////  Delete car ad
 

    


//////////////////////////////////////////////end delete car ad

});