const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');


const port = process.env.PORT || 9000;


app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));

app.use(function(request, response, next) {

  if (process.env.NODE_ENV !== 'development' && !request.secure) {
     return response.redirect("https://" + request.headers.host + request.url);
  }

  next();
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);

