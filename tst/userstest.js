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



var server = app.listen(3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;