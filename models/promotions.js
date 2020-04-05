const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const Schema = mongoose.Schema;

const PromoSchema =new Schema({
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
    label:{
        type:String,
        default:'',
    },
    price:{
        type:Currency,
        required:true,
        min:0
    },
    featured:{
        type:Boolean,
        default: false
    },   
},
{
    timestamps: true,

});

var Promos = mongoose.model('Promo',PromoSchema);
module.exports =Promos;