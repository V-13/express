const Express=require('express')
var app1 = new Express();
app1.set('view engine','ejs');

app1.get('/',(req,res)=>{
    res.render('index',{title:"ICT","names":["a","b","c"]});
});

app1.get('/contact',(req,res)=>{
    res.render('contact')
});

app1.get('/table',(req,res)=>{
    res.render('table')
});

app1.get('/home',(req,res)=>{
    res.send("<h1>welcome to my world</h1>");
});



app1.listen(3000,()=>{
    console.log("server running")
});