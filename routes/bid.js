var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Bid = require('../models/bid');

router.get("/getall",function(req,res,next){
    Bid.find(function(err,bids){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        return res.json(bids);
    })
});

router.post('/',function(req,res,next){
    var decoded = jwt.decode(req.query.token);


    User.findById(decoded.user._id, function (err, user) {

        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        var date = new Date()
        var bid = new Bid({
            bidAmount: req.body.bidAmount,
            bidTime:date,
            owner: user,
            auction: req.body.auction

        });

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
});
// router.get('/', function (req, res, next) {
//     var decoded = jwt.decode(req.header('token'));
//     Property.find({"owner": decoded.user._id}).exec(function (err, properties) {
//         if (err) {
//             return res.status(500).json({
//                 title: 'An error occurred',
//                 error: err
//             });
//         }
//         res.status(200).json(properties);
//     });
// });
router.get("/:id",function(req,res,next) {
    Bid.find({"auction": req.params.id}).populate('auction').populate('owner')
        .exec(function (err, bids) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: bids
            });
        });
});

router.get("/",function(req,res,next){
    Bid.find().populate('auction').populate('owner')
        .exec(function (err, bids) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: bids
            });
});


});
module.exports = router;
