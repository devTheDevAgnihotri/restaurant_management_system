const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const Schema = mongoose.Schema;

const LeaderSchema =new Schema({
    name:{
      type: String,
      required:true,
      unique:true  
    },

    description:{
        type:String,
        required: true,

    },
    image:{
        type:String,
        required:true,
    },
    abbr:{
        type:String,
        default:'',
    },
    featured:{
        type:Boolean,
        default: false
    },
    designation:{
        type:String,
        required:true,
    },  
},
{
    timestamps: true,

});

var leaders = mongoose.model('leader',LeaderSchema);
module.exports =leaders;