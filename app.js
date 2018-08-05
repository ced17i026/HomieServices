var express = require("express"),
app = express();

//instructing the browser to look for public folder
app.use(express.static("public"))
//All Routs
app.get("/",function(req,res){
    res.render("homieServices.ejs");
})


//Listening Routs
app.listen(7000,function(){
    console.log("App has successfully started...")
})