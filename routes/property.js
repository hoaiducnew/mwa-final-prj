var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Property = require('../models/property');

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        var property = new Property({
            name: req.body.name,
            // expectedPrice: req.body.expectedPrice,
            // facilities: req.body.facilities,
            // area: req.body.area,
            // type: req.body.type,
            // imagePath: req.body.imagePath,
            // address: {
            //     address1: req.body.address.address1,
            //     address2: req.body.address.address2,
            //     city: req.body.address.city,
            //     state: req.body.address.state,
            //     zip: req.body.address.zip
            // },
            owner: user
        });

        property.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            res.status(201).json({
                message: 'Property created',
                obj: result
            });
        });
    });
});

router.delete('/:id', function (req, res, next) {
    // var decoded = jwt.decode(req.query.token);
    Property.findById(req.params.id, function (err, property) {
        console.log(property);
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!property) {
            return res.status(500).json({
                title: 'No Property Found!',
                error: {message: 'Property not found'}
            });
        }
        // if (property.owner != decoded.user._id) {
        //     return res.status(401).json({
        //         title: 'Not Authenticated',
        //         error: {message: 'Users do not match'}
        //     });
        // }
        property.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted property',
                obj: result
            });
        });
    });
});

router.get('/:id', function (req, res, next) {
    Property.findById(req.params.id, function (err, property) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: property
        });
    });
});

router.get('/', function (req, res, next) {
    Property.find().exec(function (err, properties) {
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
