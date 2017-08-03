const fs = require('fs');
const express = require('express');
var multer = require( 'multer');
var upload = multer({ dest: 'uploads/'});
const app = express();

app.set('port', (process.env.PORT || 8080));
app.use('/', express.static(process.cwd() + '/public'));

app.get( '/', (req,res) => {
  res.sendFile( process.cwd() + '/public/index.html');
});

app.post( '/upload', upload.single( 'myfile'), function( req, res){
  fs.stat( req.file.path, (err, stats) => {
    const result = { filesize: stats.size};
    res.send( {result: result});
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
