let express = require('express');
let handlebars = require('express-handlebars').create({defaultLayout: 'main'});
let fortune = require('./lib/forune.js')

let app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));


app.get('/', function(rea, res){
    res.render('home');
});

app.get('/about', function(rea, res){
    res.render('about', { fortune: fortune.getFortune() });
});


// 404 page
app.use(function(req, res){
    res.status(404);
    res.render('404');
});

// 500 page
app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express was started on http://localhost:' + app.get('port') + 'press Ctrl+C for exit');
})

