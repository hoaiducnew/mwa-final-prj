var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Property = require('../models/property');
var Auction = require('../models/auction');

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    // User.findById(decoded.user._id, function (err, user) {
    //     if (err) {
    //         return res.status(500).json({
    //             title: 'An error occurred',
    //             error: err
    //         });
    //     }

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
    // });
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

router.get('/activeAuctions', function (req, res, next) {
    Auction.findByStatus('Approved')
        .exec(function (err, properties) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: properties
            });
        });
});

module.exports = router;
