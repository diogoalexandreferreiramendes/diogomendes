const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 9000;

// app.use((req, res, next) => {
//   if (process.env.NODE_ENV === 'production') {
//       if (req.headers.host === 'thediogomendes.herokuapp.com')
//           return res.redirect(301, 'https://www.diogomendes.net');
//       if (req.headers['x-forwarded-proto'] !== 'https')
//           return res.redirect('https://' + req.headers.host + req.url);
//     }else
//       return next();
// });

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);

