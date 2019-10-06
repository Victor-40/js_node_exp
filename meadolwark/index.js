let express = require('express');

let app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', function(rea, res){
    res.type('text/plain');
    res.send('Meadolwark Travel');
});

app.get('/about', function(rea, res){
    res.type('text/plain');
    res.send('About Meadolwark Travel');
});



// 404 page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - not found');
});

// 505 page
app.use(function(err, req, res, next){
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server error');
});

app.listen(app.get('port'), function(){
    console.log('Express was started on http://localhost:' + app.get('port') + 'press Ctrl+C for exit');
})

