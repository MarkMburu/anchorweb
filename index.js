const express = require("express")

const PORT = process.env.PORT || 80

const app = express()

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.render("index")
  })
app.get('/about',function(req,res){
    res.render("about")
});
app.get('/service',function(req,res){
    res.render("service")
});
app.get('/properties',function(req,res){
    res.render("properties")
});

app.get("/selling",function(req,res){
    res.render("products")
})
app.get('/contact',function(req,res){
    res.render("contact")
});

app.get('/blog',function(req,res){
    res.redirect("/")
});
app.get('/blog-single',function(req,res){
    res.redirect("/")
});
app.get('/single',function(req,res){
    res.redirect("/")
});
app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})