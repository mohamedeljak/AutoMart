"use strict";

var Express = require("express");

var app = Express();
app.get("/", (request, response) => {
  response.status(200).send({
    "message": "working"
  });
}); ///////////////////////////////////  Cars

app.get('/api/v1/car/:id', (request, response) => {
  response.status(200).send({
    "message": "cars id working"
  });
});
app.get('/api/v1/car/', (request, response) => {
  response.status(200).send({
    "message": "cars/all working"
  });
});
app.get('/api/v1/car?status=test&min_price=1&max_price=10000', (request, response) => {
  // console.log(req.query.st);
  response.status(200).send({
    "message": "get car query string"
  });
});
app.post('/api/v1/car', (request, response) => {
  // console.log(req.query.st);
  response.status(200).send({
    "message": "new car ad added sucessfuly"
  });
}); /////////////////////////////  DELETE CAR AD

app.delete('/api/v1/car/:id', (request, response) => {
  // console.log(req.query.st);
  response.status(200).send({
    "message": "Car Ad sucessfuly deleted"
  });
});
app.patch('/api/v1/car/:id/status', (request, response) => {
  // console.log(req.query.st);
  response.status(200).send({
    "message": "mark car ad as SOLD"
  });
});
app.patch('/api/v1/car/:id/:car_price', (request, response) => {
  // console.log(req.query.st);
  response.status(200).send({
    "message": "Car ad's price updated"
  });
}); ///////////////////////////////  End Cars
//////////////////////////////////////////  Orders

var server = app.listen(3000, () => {
  console.log("Listening on port " + server.address().port + "...");
});
module.exports = server;