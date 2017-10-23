var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, required: true},
    expectedPrice: {type: Number},
    facilities: {type: String},
    area: {type: Number},
    type: {type: String},
    imagePath: {type: String},
    address: {
        address1: {type: String},
        address2: {type: String},
        city: {type: String},
        state: {type: String},
        zip: {type: Number}
    },
    owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

// schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Property', schema);