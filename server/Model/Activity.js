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
    Preffered_skills:{
        type:Array,
        default:[]
    },
    Max_volunteers:{
        type:Number,
        default:0
    },
    Activity_Adress:{
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