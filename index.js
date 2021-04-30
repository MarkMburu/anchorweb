const express = require("express")

const PORT = process.env.PORT || 5000

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
app.get('/products',function(req,res){
    res.render("products")
});

app.get("/selling",function(req,res){
    res.render("projects")
})
app.get('/contact',function(req,res){
    res.render("contact")
});

app.get('/projects',function(req,res){
    res.render("projects")
});
app.get("/mamlaka",function(req,res){
    res.render("mamlaka")
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