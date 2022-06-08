const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
    Volunteer_ID:{
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

    Volunteer_Languages:{
        type:Array,
        default:[]
    },
    Volunteer_Skills:{
        type:Array,
        require:true,
        default:[]
    },
    assigned:{
        type:Boolean,
        require:true,
        default:false
    }

},{timestamps:true}
)

module.exports = mongoose.model("Volunteers",VolunteerSchema);