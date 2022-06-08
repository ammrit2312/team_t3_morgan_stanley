const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
   Notification_title:{
       type:String,
       default:'',
       require:true
   },
   Notification_message:{
       type:String,
       default:'',
       require:true
   }
},
{timestamps:true}
)

module.exports = mongoose.model("Notification",NotificationSchema);