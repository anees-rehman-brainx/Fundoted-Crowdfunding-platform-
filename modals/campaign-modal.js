const mongoose = require('mongoose')

const campaignSchema = mongoose.Schema({
    userId :{
        type : mongoose.Schema.Types.ObjectId, 
        required : [true , "userId is required"],
    },
    title : {
        type : String,
        required : [true , "Campaign title is required"],
    },
    catogary : {
        type : String,
        required : [true , "Campaign catogary is required"],
    },
    images : [],
    goalAmount : {
        type : Number,
        required : [true , "Goal Amount is required"],
    },
    noOfDaysToGo : {
        type : Number,
        required : [true , "No of days to go is required"],
    },
    noOfBackers : {
        type : Number,
        default : 0
    },
    pledgedAmount : {
        type : Number,
        default : 0
    }
}, {timestamps : true})

module.exports = mongoose.model("campaignModal", campaignSchema);
