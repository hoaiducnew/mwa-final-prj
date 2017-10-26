var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Property = require('../models/property');
var Auction = require('../models/auction');

router.post('/', function (req, res, next) {
        var auction = new Auction({
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            startingBid: req.body.startingBid,
            currentBid: req.body.currentBid,
            status: req.body.status,
            bidCount:req.body.bidCount,
            currentHighestBidder: req.body.bidder,
            property: req.body.property
        });

        auction.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            res.status(201).json({
                message: 'auction created',
                obj: result
            });
        });

});

router.put('/changeStatus', function (req, res, next) {

    Auction.findById(req.body._id, function (err, auction) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }      
        auction.status = req.body.status;
        auction.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            res.status(201).json({
                message: 'auction ' + req.body.status,
                obj: result
            });
        });
    });
});
router.put('/addBid', function (req, res, next) {
    
        Auction.findById(req.body._id, function (err, auction) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }      
            auction.currentBid = req.body.currentBid;
            auction.bidCount++;
            auction.save(function (err, result) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
    
                res.status(201).json({
                    message: 'auction bidded',
                    obj: result
                });
            });
        });
    });
    

router.get('/', function (req, res, next) {
    Auction.find().populate('property')
        .exec(function (err, auctions) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json(
                auctions
            );
        });
});
// router.get('/:id', function (req, res, next) {
//     var decoded = jwt.decode(req.header('token'));
//     Auction.findById(req.params.id, function (err, auction) {
//         if (err) {
//             return res.status(500).json({
//                 title: 'An error occurred',
//                 error: err
//             });
//         }
//         res.status(200).json(auction);
//     });
// });
router.get('/active', function (req, res, next) {
    Auction.find({"status":"APPROVED"}).populate("property")
        .exec(function (err, properties) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            
            res.status(200).json(
                properties
            );
        });
});

module.exports = router;
