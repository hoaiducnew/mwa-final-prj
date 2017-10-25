var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    bidAmount: {type: Number, required: true},
    bidTime: {type: Date, default: Date.now},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    auction: {type: Schema.Types.ObjectId, ref: 'Auction'}
});



schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Bid', schema);