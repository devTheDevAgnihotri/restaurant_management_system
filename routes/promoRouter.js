const express = require('express');
const bodyParser =require('body-parser');
const promoRouter = express.Router();



promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all((req,res,next) =>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next) =>{
    res.end('will send all the promotions to you');
})
.post((req,res,next) =>{
    res.end("will add the promotion " + req.body.name +"with details:" + req.body.description);
})
.put((req,res,next) =>{
    res.statusCode =403;
    res.end("Put method not supported on promotion");
})
.delete((req,res,next) =>{
    res.end("will delete the promotion ");
});
promoRouter.route('/:promoId')
.all((req,res,next) =>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next) =>{
        res.end('will send the promotions with promoId'+ req.params.promoId +"to you!");
    })
.post((req,res,next) =>{
        res.statusCode=403;
        res.end("post method not supported on/promotions/"+req.params.promoId);
    })
.put((req,res,next) =>{
        res.write('updating the promotion'+req.params.promoId+"\n")
        res.end("will update the promotion "+req.body.name+"with details"+ req.body.description);
})
.delete((req,res,next) =>{
        res.end("will delete the promotion "+req.params.promoId);
    });
module.exports =promoRouter;