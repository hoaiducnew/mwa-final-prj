var express = require('express');
var router = express.Router();

var Bid = require('../models/bid');

router.post('/',function(req,res,next){

    var bid = new Bid({
        amount: req.body.amount
        // time: req.body.time,
        // bidder: req.body.bidder,
        // property: req.body.property
    })

    bid.save(function (err,result){

        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'bid created',
            obj: result
        });

    });

});


module.exports = router;
