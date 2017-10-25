var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Property = require('../models/property');

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.header('token'));
    User.findById(decoded.user._id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        var property = new Property({
            name: req.body.name,
            expectedPrice: req.body.expectedPrice,
            facilities: req.body.facilities,
            area: req.body.area,
            type: req.body.type,
            imagePath: req.body.imagePath,
            address: {
                address1: req.body.address1,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip
            },
            owner: user
        });

        property.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            res.status(201).json(result);
        });
    });
});

router.delete('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.header('token'));
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

router.put('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.header('token'));
    Property.findById(req.params.id, function (err, property) {
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
        property.name = req.body.name;
        property.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json(result);
        });
    });
});

router.get('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.header('token'));
    Property.findById(req.params.id, function (err, property) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json(property);
    });
});

router.get('/', function (req, res, next) {
    var decoded = jwt.decode(req.header('token'));
    Property.find().exec(function (err, properties) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json(properties);
    });
});

module.exports = router;
