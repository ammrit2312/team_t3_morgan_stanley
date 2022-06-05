const mongoose = require('mongoose');

const ReccomendationSchema = new mongoose.Schema({
    UserId:{
        type:String,
        require:true,
        default:""
    },
    Name:{
        type:String,
        default:""
    },
    Reccomendation_ActivityID:{
        type:Array,
        default:[]
    },
    User_Activity_Select:{
        type:Boolean,
        default:false
    },
    UserPreferred_Activity:{
        type:Array,
        default:[]
    }
},
{timestamps:true}
)

module.exports = mongoose.model("Reccomendation",ReccomendationSchema);