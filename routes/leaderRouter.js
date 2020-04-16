const express = require('express');
const bodyParser =require('body-parser');
const leaderRouter = express.Router();
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const leaders = require('../models/leaders');


leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.get((req,res,next) =>{
    leaders.find({})
    .then((leaders)=>{
        res.statusCode =200;
        res.setHeader('Content-Type','application/json');
        res.json(leaders);
    },(err)=>next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next) =>{
    leaders.create(req.body)
   .then((leader)=>{
       console.log('Leader Created');
       res.statusCode =200;
        res.setHeader('Content-Type','application/json');
        res.json(leader);
   },(err)=>next(err))

   .catch((err) => next(err));
})
.put(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next) =>{
    res.statusCode =403;
    res.end("Put method not supported on Leaders");
})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next) =>{
    leaders.remove({})
   .then((resp) =>{
    res.statusCode =200;
    res.setHeader('Content-Type','application/json');
    res.json(resp);
   },(err)=>next(err))
   .catch((err) => next(err));
});
leaderRouter.route('/:leaderId')
.get((req,res,next) =>{
    leaders.findById(req.params.leaderId)
        .then((leader) =>{
            res.statusCode =200;
            res.setHeader('Content-Type','application/json');
            res.json(leader);
           },(err)=>next(err))
           .catch((err) => next(err));
    })
.post(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next) =>{
        res.statusCode=403;
        res.end("post method not supported on/leaders/"+req.params.leaderId);
    })
.put(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next) =>{
    leaders.findByIdAndUpdate(req.params.leaderId,{
        $set: req.body
    },{new:true})
    .then((leader) =>{
        res.statusCode =200;
        res.setHeader('Content-Type','application/json');
        res.json(leader);
       },(err)=>next(err))
       .catch((err) => next(err));
})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next) =>{
    leaders.findByIdAndRemove(req.params.leaderId)
    .then((resp) =>{
        res.statusCode =200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
       },(err)=>next(err))
       .catch((err) => next(err));

});


    module.exports =leaderRouter;