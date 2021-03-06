const mongoose = require('mongoose');
//ActivityType,Date,Time,Duration
const ActivitySchema = new mongoose.Schema({
    ActivityName:{
        type:String,
        require:true,
        default:""
    },
    ActivityType:{
        type:Array,
        require:true,
        default:[]
    },
    ActivityDate:{
        type:String,
        require:true,
        default:""
    },
    ActivityTime:{
        type:String,
        require:true,
        default:""
    },
    ActivityDurationInMinutes:{
        type:Number,
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
    //weekend or weekday used for mapping 
    Activity_availability:{
        type:Array,
        default:[]
    },
    Preferred_skills:{
        type:Array,
        default:[]
    },
    //number of volunteers already confirmed
    Current_assigned:{
        type:Number,
        default:0
    },
    Max_volunteers:{
        type:Number,
        default:5
    },
    Activity_Address:{
        type:String,
        default:''
    },
    Activity_Description:{
        type:String,
        default:''
    },

    Activity_Attendance:{
        type:Array,
        default:[]
    },
    //volunteer ids who are confirmed by admin
    AssignedTo:{
        type:Array,
        default:[]
    },
    // All the userid who have prefered this activity
    Preferred_Users:{
        type:Array,
        default:[]
    },
    isArchived:{
        type:Boolean,
        default:false
    }
},{timestamps:true}
)

module.exports = mongoose.model("Activity",ActivitySchema);