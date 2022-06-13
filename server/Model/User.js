const mongoose = require('mongoose');

/*
    0 --> user
    1 --> admin
 */

const UserSchema = new mongoose.Schema({
    UserID:{
        type:String,
        unique:true,
        require:true,
        default:""
    },
    Email:{
        type:String,
        unique:true,
        required:true,
        default:''
    },
    Filled_Form:{
        type:Boolean,
        default:false,
        require:true
    },
    AccountType:{
        type:Number,
        default:0,
        require:true
    },
    Number:{
        type:String,
        default:""
    }
    
},
{timestamps:true}
)

module.exports = mongoose.model("User",UserSchema);