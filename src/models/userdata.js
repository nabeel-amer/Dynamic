const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = mongoose.Schema({
    
    email:{
        type:String,
        required:true,
       validate(value){
           if(!validator.isEmail(value)){
               throw new Error("invalid Email Id")
           }
       }
    },


   business:{
       type:String,
       required:true,
       minlength:20,
       maxlength:50
    },

    address:{
        type: String,
        required:true,
        maxlength:50
    },

    city:{
        type: String,
        required:true,
        minlength:5
    },

    date:{
        type:Date,
        default:Date.now

    }

})

//we need collections

const User = mongoose.model("User", userSchema);
module.exports = User;

 
