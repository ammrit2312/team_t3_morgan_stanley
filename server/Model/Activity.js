const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    ActivityName:{
        type:String,
        require:true,
        default:""
    },
    Activity_Location:{
        type:Array,
        default:[]
    },
    Activity_Mode:{
        type:String,
        default:""
    },
    Language_Preference:{
        type:Array,
        default:[]
    },
    Activity_availability:{
        type:Array,
        default:[]
    },
    Preferred_skills:{
        type:Array,
        default:[]
    },
    Current_assigned:{
        type:Number,
        default:0
    },
    Max_volunteers:{
        type:Number,
        default:0
    },
    Activity_Address:{
        type:String,
        default:''
    },
    Activty_Description:{
        type:String,
        default:''
    },
    AssignedTo:{
        type:Array,
        default:[]
    }
},{timestamps:true}
)

module.exports = mongoose.model("Activity",ActivitySchema);