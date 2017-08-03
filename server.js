
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8080));
app.use('/', express.static(process.cwd() + '/public'));

app.get( '/', (req,res) => {
  res.sendFile( process.cwd() + '/public/index.html');
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
