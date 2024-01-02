var mysql=require('mysql');
var express=require('express');
var app=express();

// var usr=require('/test.ejs');

var bodyParser=require('body-parser');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(express.static(__dirname+'/public'));
// app.use(express.static('/public'));



var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456789',
    database:'mental_health_project',
})

app.get('/',function(req,res){
    // res.send("Hello buddy");
    res.render("home");
    console.log("homepage");
})

app.post('/contact', function(req,res){

    var person={
        f_name:req.body.fname,
        l_name:req.body.lname,
        email:req.body.email,
        phone_number:req.body.number,
    }

    var i="INSERT INTO contact SET ? "
    connection.query(i,person,function(err,results){
        if(err) throw err;
        res.redirect('/');
    });

    console.log("Contact page");

})


app.post('/sign', function(req,res){
    res.render("sign");

    
    console.log("sign in Page");
})

app.post('/userStore', function(req, res){
    
    var userinfo={
        user_name:req.body.username,
        passwords:req.body.password
    
    }

    var i2="INSERT INTO sign_in SET ?";
    connection.query(i2,userinfo,function(err,results){
        if(err) throw err;
        res.render("test");
        console.log("Test Page");
    });


})

app.post('/userTest', function(req,res){

    var testResult={    
        depression:usr.depression,
        anxiety:usr.anxiety,
        ocd:usr.ocd,
        bipolar:usr.bipolar,
        s_word:usr.Schizopheneria
    }
    var i3="INSERT INTO health_score SET ?";
    connection.query(i3,testResult,function(err,results){
        if(err) throw err;
    })


})

app.listen(8080,function(){
    console.log("Server running 8080");
})