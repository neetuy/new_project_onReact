const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// app.set('port', (process.env.PORT || 6000));
// routes
// const authRoutes quire('./serjsroutes/auth');
// app.use('/auth', authRoutes);js start the server

app.get("/r_page", function(req, res) {
res.sendFile(__dirname + '/server/static/index.html')
});

app.get("/j_page", function(req, res) {
res.sendFile(__dirname + '/server/static/index.html')
});

app.get("/react_page", function(req, res) {
res.sendFile(__dirname + '/server/static/index.html')
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});

// app.get('/', function(request, response) {
//     var result = 'App is running'
//     response.send(result);
// }).listen(app.get('port'), function() {
//     console.log('App is running, server is listening on port ', app.get('port'));
// });


