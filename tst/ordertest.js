var Express = require("express");

var app = Express();

app.get("/", (request, response) => {
    response.status(200).send({ "message": "working" });
});


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