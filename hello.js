let express = require('express');
let app = express();
let path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/hello.html'));
});
console.log("listening on port 8000");
app.listen(8000);