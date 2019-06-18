
var Request = require("request");
const app = require('../server');

const chai = require('chai');
const chaiHttp = require('chai-http');


describe("Server", () => {
    var server;
    let token;
    
    beforeAll(() => {
        server = require("../server");
        var signpdata = {
        "email": "mohamed@gggggggggggggggmaillast.com"  ,
        "first_name": "mooooo",
        "last_name": "mohamed",
        "address" :"mohamed" ,
        "is_admin" : "hhhhhhhhhhhhhh",
        "password" : "mohamed11" 
    }

    afterAll(() => {
        console.log("wwwwwwwwwww", response.body);
        data.body = JSON.parse(body);
        server.close();
    });

    ////////////////////////  index
    describe("GET /", () => {

        it("Status 200", () => {
            
            chai.request(app).post('http://localhost:3000/api/v1/auth/signup').send(signpdata).end((er, res) => {
                console.log(res);
            });

        });
    
    });

    /////////////////end index
    ////////////////////////////sginup get

    ////////////////////////////////////////endsingup  get    



    ////////////////////////////sginup POST
    ////////////////////////////////////////endsingup  POST

  
////////////////////////////sginIN POST
    ////////////////////////////////////////endsingIN  POST

    
    ////////////////////////////////////////////  order  add
    

    //////////////////////////////////////////// end order add


  //////////////////////////////////  UPDATE CAR STUTAS TO SOLD 

    
// describe("PATCH STATUS CAR AD  TO SOLD /", () => {
//         var data = {};
//         var statuscaradd="status"; 
//         var carads={"id": "53a58e77-1da9-4937-b4a3-8f24d1bd7654",
//         "user_id": "cfa13845-8e7d-4441-a867-b3d20f7c0fd2",
//         "email": "mohamed@gggggggggggggggmaillast.com",
//         "manufacture": "toyota",
//         "price": 90,
//         "status": "available"
//         };
//         var idcar = "53a58e77-1da9-4937-b4a3-8f24d1bd7654";
//        // signpdata.data.hello=signpdata.data.email;
//         //delete signpdata.data['email'];

//         beforeAll((done) => {
         

//             Request.patch("http://localhost:3000/api/v1/car/"+idcar+"/"+statuscaradd, (error, response, body) => {
              
//          //       console.log(signpdata);
//                 //console.log(body);
//                 data.status = response.statusCode;
//                 data.body = JSON.parse(body);
//                // console.log("gggggg"+data.body.message);
//                 done();
//             });


//         });
//         it("Status 200", () => {
//             expect(data.status).toBe(200);
//         });
//         it("Body", () => {
//             expect(data.body.message).toBe("mark car ad as SOLD");
//         });

    
//     });
// ///////////////////////////////////////// END  UPDATE CAR STATUS TO SOLD

// ///////////////////////////////////////////////////  UPDATE CAR PRICE 
 

    
// describe("PATCH  updated car price/", () => {
//         var data = {};
//         var car_price=9000000; 
//         var carads={"stutas" : "1" ,"data" :{ "id":12345666 , "email": "test@test.con"  , "manufacture": "toyota","price" : 100 }  };
//         var idcar = 12345666;
//         //delete signpdata.data['email'];

//         beforeAll((done) => {
         
         
//             Request.patch("http://localhost:3000/api/v1/car/"+idcar+"/"+car_price, (error, response, body) => {
//                         carads.data.price=car_price;

//          //       console.log(signpdata);
//                 //console.log(carads.data.price+"<br>");
//                 data.status = response.statusCode;
//                 data.body = JSON.parse(body);
//                 //console.log(response.body+"<br>");
//                 done();
//             });


//         });
//         it("Status 200", () => {
//             expect(data.status).toBe(200);
//         });
//         it("Body", () => {
//             expect(data.body.message).toBe("Car ad's price updated");
//         });

    
//     });


// ///////////////////////////////////////////////  END UPDATE CAR PRICE

//     ////////////////////////////sginin  
//     /////endsignin    
//     //////////////////////////////  cars 
    
// describe(" /", () => {
//         var data = {};
//         beforeAll((done) => {
//             Request.get("http://localhost:3000/api/v1/car", (error, response, body) => {
//                 data.status = response.statusCode;
//                 data.body = JSON.parse(body);
//                 done();
//             });
//         });
        

//         it("Status 200", () => {
//             expect(data.status).toBe(200);
//         });
//         it("Body", () => {
//             expect(data.body.message).toBe("cars/all working");
//         });

    
//     });
//     ///////////////////////////////////end cars

//     //////////////////////////////  car id 
    
// describe(" /", () => {
//         var data = {};
//         var id=9999999999;
//         beforeAll((done) => {
//             Request.get("http://localhost:3000/api/v1/car/"+id, (error, response, body) => {
//                 data.status = response.statusCode;
//                 data.body = JSON.parse(body);
//                 done();
//             });
//         });
        

//         it("Status 200", () => {
//             expect(data.status).toBe(200);
//         });
//         it("Body", () => {
//             expect(data.body.message).toBe("cars id working");
//         });

    
//     });
    
//     ///////////////////////////////////end id car
//    /////////////////////////////////////////order all
   
//    //////////////////////////end order all


// /////////////////////////////////////////order id
   
//    //////////////////////////end order id


//   //////////////////////////////////  UPDATE ODER PRICE

    
// ///////////////////////////////////////// END  UPDATE  ORDER PRICE






//   /////////////////////  car query string 
// describe(" /", () => {
//         var data = {};
//         //var id ="hhhhhhhhhhh";
//         //var status="available";
//         var stx=9999;
//         beforeAll((done) => {
//             Request.get("http://localhost:3000/api/v1/car\status=test\&min_price=1\&max_price=10000" , (error, response, body) => {
//                 //console.log(body);
//                 data.status = response.statusCode;
//                 data.body = JSON.parse(body);
//                 done();
//             });

//         });
        

//         it("Status 200", () => {
//             //console.log(data);
//             expect(data.status).toBe(200);
//         });
//         it("Body", () => {
//             expect(data.body.message).toBe("get car query string");
//         });

    
//     });

//   ////////////////////////////end car  query  string 


//       /////////////////////  add new car AD 
// describe(" /", () => {
//         var data = {};
//         //var id ="hhhhhhhhhhh";
//         var carads={"stutas" : "1" ,"data" :{"email": "test@test.con"  , "manufacture": "toyota","price" : 900000 }  };
        
//         beforeAll((done) => {
//             Request.post("http://localhost:3000/api/v1/car" , carads ,(error, response, body) => {
//                // console.log(body);
//                 data.status = response.statusCode;
//                 data.body = JSON.parse(body);
//                 done();
//             });

//         });
        

//         it("Status 200", () => {
//             //console.log(data);
//             expect(data.status).toBe(200);
//         });
//         it("Body", () => {
//             expect(data.body.message).toBe("new car ad added sucessfuly");
//         });

    
//     });

//   ////////////////////////////end add new car AD 

// //////////////////////////////////////////////  Delete car ad
 

    
// describe("Delete car ad /", () => {
//         var data = {};
//         var statuscaradd="status"; 
//         var carads={"stutas" : "1" ,"data" :{ "id":12345666 , "email": "test@test.con"  , "manufacture": "toyota","price" : 900000 }  };
//         var idcar = 12345666;
//        // signpdata.data.hello=signpdata.data.email;
//         //delete signpdata.data['email'];

//         beforeAll((done) => {
         
//          Request.post("http://localhost:3000/api/v1/car",carads, (error, response, body) => {
        
//          //       console.log(signpdata);
//                 //console.log(body);
//                 data.status = response.statusCode;
//                 data.body = JSON.parse(body);
//                 //console.log(response.body);
//                 done();
//             });   





//             Request.delete("http://localhost:3000/api/v1/car/"+idcar, (error, response, body) => {
        
//          //       console.log(signpdata);
//                 //console.log(body);
//                 data.status = response.statusCode;
//                 data.body = JSON.parse(body);
//                 //console.log(response.body);
//                 done();
//             });


//         });
//         it("Status 200", () => {
//             expect(data.status).toBe(200);
//         });
//         it("Body", () => {
//             expect(data.body.message).toBe("new car ad added sucessfuly");
//         });

    
//     });



//////////////////////////////////////////////end delete car ad

});