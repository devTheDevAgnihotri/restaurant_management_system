const express = require('express');
const bodyParser =require('body-parser');
const leaderRouter = express.Router();



leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req,res,next) =>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next) =>{
    res.end('will send all the leaders to you');
})
.post((req,res,next) =>{
    res.end("will add the leaders " + req.body.name +"with details:" + req.body.description);
})
.put((req,res,next) =>{
    res.statusCode =403;
    res.end("Put method not supported on leadership");
})
.delete((req,res,next) =>{
    res.end("will delete the leader ");
});
leaderRouter.route('/:leaderId')
.all((req,res,next) =>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next) =>{
        res.end('will send the leader with leaderId'+ req.params.leaderId +"to you!");
    })
.post((req,res,next) =>{
        res.statusCode=403;
        res.end("post method not supported on/leaders/"+req.params.leaderId);
    })
.put((req,res,next) =>{
        res.write('updating the leader'+req.params.leaderId+"\n")
        res.end("will update the leader "+req.body.name+"with details"+ req.body.description);
})
.delete((req,res,next) =>{
        res.end("will delete the leader "+req.params.leaderId);
    });
module.exports =leaderRouter;