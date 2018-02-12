var express = require('express');
var app = express();

app.use(express.static('app'));

const port = process.env.PORT || 3000;

app.listen(port, function (err) {
    if (err) {
        throw err
    }

    console.log('server is listening on port ' + port);
});
