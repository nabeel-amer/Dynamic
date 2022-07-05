const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./models/userdata")
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;

//setting path
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");



//middleware
app.use('/css', express.static(path.join(__dirname , "../node_modules/bootstrap/dist/css")));//passing root to /css of path
app.use('/js', express.static(path.join(__dirname , "../node_modules/bootstrap/dist/js")));
app.use('/jquery', express.static(path.join(__dirname , "../node_modules/jquery/dist")));




app.use(express.urlencoded({extended:false}))
app.use (express.static(staticpath))
app.set("view_engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);

//routing
//app.get(path,callback)
app.get("/",(req,res) =>{
    res.render("index.hbs");
})



app.post("/contact" , async(req,res) =>{
    try{
     //res.send(req.body);
     const userMsg = new User(req.body);
     await userMsg.save();
     res.status(201).render("index.hbs");



    } catch(error){
res.status(500).send(error);
    }
})


//create server
app.listen(port , () => {
    console.log('My Server is running at port: 3000' );
});