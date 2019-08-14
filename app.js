const Express=require('express')
var app1 = new Express();
app1.get('/home',(req,res)=>{
    res.send("welcome to my web");
});
app1.listen(3000);