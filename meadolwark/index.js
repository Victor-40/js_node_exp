let express = require('express');

let app = express();
let handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(rea, res){
    res.render('home');
});

app.get('/about', function(rea, res){
    res.render('about');
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

