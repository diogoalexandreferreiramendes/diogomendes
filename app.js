const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 9000;

// app.use(cors())

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
      if (req.headers.host === 'thediogomendes.herokuapp.com')
          return res.redirect(301, 'https://www.diogomendes.net');
      if (req.headers['x-forwarded-proto'] !== 'https')
          return res.redirect('https://' + req.headers.host + req.url);
      else
          return next();
  } else{
    return next();
  }
});

app.get('*', function (req, res) {
  //res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.send('HELLLO FROM THE OTHER SIDE');
});


app.listen(port);

