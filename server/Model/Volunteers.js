const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
    Volunteer_Name:{
        type:String,
        require:true,
        default:""
    },
    Volunteer_DOB:{
        type:Date,
        require:true,
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

    Volunteer_Number:{
        type:Number,
        require:true,
        default:0
    },

    Volunteer_Platform:{
        type:Array,
        require:true,
        default:[]
    },

    Volunteer_Preferred_Locations:{
        type:Array,
        require:true,
        default:[]
    },

    Volunteer_Availability:{
        type:Array,
        require:true,
        default:[]
    },

    Volunteer_Preferred_Activity:{
        type:Array,
        default:[]
    },

    Volunteer_Number:{
        type:Number,
        require:true,
        default:0
    },

    Volunteer_Skills:{
        type:Array,
        require:true,
        default:[]
    }

},{timestamps:true}
)

module.exports = mongoose.model("Volunteers",VolunteerSchema);