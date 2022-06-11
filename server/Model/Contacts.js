const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
   Email:{
       type:String,
       default:''
   },
   Title:{
       type:String,
       default:'',
   },
   Message:{
       type:String,
       default:'',
   }
},
{timestamps:true}
)

module.exports = mongoose.model("Contacts",ContactSchema);