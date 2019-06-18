var Express = require("express");

var app = Express();

app.get("/", (request, response) => {
    response.status(200).send({ "message": "working" });
});

////////////////  Users
app.get('/api/v1/signup/all', (request, response) => {
    response.status(200).send({ "message": "signup/all working" });
});

app.post('/api/v1/auth/signup', (request, response) => {
    response.status(200).send({ "message": "user sign up successfuly" });
});

app.post('/api/v1/auth/signin', (request, response) => {
    response.status(200).send({ "message": "user sign in successfuly" });
});

app.get('/api/v1/signin/all', (request, response) => {
    response.status(200).send({ "message": "signin/all working" });
});

////////////////////////////////  END users

///////////////////////////////////  Cars
app.get('/api/v1/cars/all', (request, response) => {
    response.status(200).send({ "message": "cars/all working" });
});

app.get('/api/v1/car?status=test&min_price=1&max_price=10000', (request, response) => {
   // console.log(req.query.st);
    response.status(200).send({ "message": "get car query string" });
});

app.post('/api/v1/car', (request, response) => {
   // console.log(req.query.st);
    response.status(200).send({ "message": "new car ad added sucessfuly" });
});

/////////////////////////////  DELETE CAR AD

 
app.delete('/api/v1/car/:id', (request, response) => {
   // console.log(req.query.st);
    response.status(200).send({ "message": "Car Ad sucessfuly deleted" });
});






app.patch('/api/v1/car/:id/status', (request, response) => {
   // console.log(req.query.st);
    response.status(200).send({ "message": "mark car ad as SOLD" });
});



app.patch('/api/v1/car/:id/:car_price', (request, response) => {
   // console.log(req.query.st);
    response.status(200).send({ "message": "Car ad's price updated" });
});


  ///////////////////////////////  End Cars

//////////////////////////////////////////  Orders
app.post('/api/v1/order', (request, response) => {
   // console.log(req.query.st);
    response.status(200).send({ "message": "new order added sucessfuly" });
});



app.patch('/api/v1/order/:id/:new_price', (request, response) => {
   // console.log(req.query.st);
    response.status(200).send({ "message": "Order price updated" });
});

app.get('/api/v1/car/', (request, response) => {
    response.status(200).send({ "message": "cars id working" });
});

app.get('/api/v1/orders/all', (request, response) => {
    response.status(200).send({ "message": "orders/all working" });
});

app.get('/api/v1/order/', (request, response) => {
    response.status(200).send({ "message": "order id  working" });
});


//////////////////////////////////////////// Orders


var server = app.listen(3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;





// // token encoding and decoding test
// describe('auth : token', () => {
//  describe('encodeToken()', () => {
//   it('should return a token', (done) => {
//    const results = jwt.encodeToken({ id: 1 });
//    should.exist(results);
//    results.should.be.a('string');
//    done();
//   });
//  });
// ​
//  describe('decodeToken()', () => {
//   it('should return a payload', (done) => {
//    const token = jwt.encodeToken({ id: 1 });
//    should.exist(token);
//    token.should.be.a('string');
//    jwt.decodeToken(token, (err, res) => {
//     should.not.exist(err);
//     res.sub.should.eql(1);
//     done();
//    });
//   });
//  });
// });
// ​
// // Signup test
// describe('routes : auth', () => {
//  //  test for signup
//  describe('POST /auth/signup', () => {
//   it('Should register a new user', (done) => {
//    const user = {
//     email: 'user@user.com',
//     firstName: 'Tito',
//     lastName: 'Geekandi',
//     password: 'pass123'
//    };
// ​
//    chai.request(app)
//     .post('/api/v1/auth/signup')
//     .set('Accept', 'applicatio/json')
//     .send(user)
//     .end((err, res) => {
//      expect(res.status).to.equal(201);
//      expect(res.body.message).to.equal('Account Created!');
//     });
//    done();
//   });
//  });
// ​
// ​
//  //  test for signin
//  describe('POST /auth/signin', () => {
//   it('Should login a registered user', (done) => {
//    const user = {
//     email: 'user@user.com',
//     password: 'pass123'
//    };
// ​
//    chai.request(app)
//     .post('/api/v1/auth/signin')
//     .set('Accept', 'applicatio/json')
//     .send(user)
//     .end((err, res) => {
//      expect(res.status).to.equal(201);
//      expect(res.body.message).to.equal('Login succesful!');
//     });
//    done();
//   });
// ​
//   it('Should not login an unregistered user', (done) => {
//    const user = {
//     email: 'new@email.com',
//     password: 'anypass'
//    };
//    chai.request(app)
//     .post('/api/v1/auth/signin')
//     .set('Accept', 'application/json')
//     .send(user)
//     .end((err, res) => {
//      expect(res.status).to.equal(400);
//      expect(res.body.message).to.equal('Please first register');
//     });
//    done();
//   });
//  });
// });