var Express = require("express");

var app = Express();

app.get("/", (request, response) => {
    response.status(200).send({ "message": "working" });
});

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





var server = app.listen(3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;