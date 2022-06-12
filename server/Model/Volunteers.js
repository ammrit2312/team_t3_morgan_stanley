const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
    UserID:{
        type:String,
        require:true,
        default:"",
        unique:true
    },
    Volunteer_Name:{
        type:String,
        require:true,
        default:""
    },
    Volunteer_Username:{
        type:String,
        default:""
    },
    Volunteer_Address:{
        type:String,
        default:""
    },
    Volunteer_College:{
        type:String,
        default:""
    },
    Volunteer_Organization:{
        type:String,
        default:""
    },
    Volunteer_Academic_Qualifications:{
        type:String,
        require:true,
        default:""
    },
    Volunteer_Occupation:{
        type:String,
        default:""
    },
    Volunteer_email:{
        type:String,
        require:true,
        default:''
    },
    Volunteer_Nationality:{
        type:String,
        default:''
    },
//online or offline
    Volunteer_Preferred_Mode:{
        type:Array,
        default:[]
    },
//phone number
    Volunteer_Number:{
        type:Number,
        require:true,
        default:0
    },
//number of activities updated by attendance
    Volunteer_Number_Of_Activities_Attended:{
        type:Number,
        default:0
    },
//number of activities opted out after approved by admin
    Volunteer_Number_Of_Activities_Opted_Out:{
        type:Number,
        default:0
    },
    
//where did they hear about toybank from
    Volunteer_Platform:{
        type:Array,
        require:true,
        default:[]
    },
//activities confirmed by admin after user selects it
    Upcoming_Activities:{
        type:Array,
        default:[]
    },

    Volunteer_Preferred_Locations:{
        type:Array,
        require:true,
        default:[]
    },
//weekend or weekdays
    Volunteer_Availability:{
        type:Array,
        require:true,
        default:[]
    },
//activity types present in form
    Volunteer_Interested_Activity_Type:{
        type:Array,
        require:true,
        default:[]
    },

    Volunteer_Languages:{
        type:Array,
        default:[]
    },
    Volunteer_Skills:{
        type:Array,
        require:true,
        default:[]
    },
    Volunteer_mapped:{
        type:Number,
        require:true,
        default:0
    },
    assigned:{
        type:Boolean,
        require:true,
        default:false
    }

},{timestamps:true}
)

module.exports = mongoose.model("Volunteers",VolunteerSchema);