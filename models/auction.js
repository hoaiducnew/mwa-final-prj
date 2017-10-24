var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var schema = new Schema({
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true},
    startingBid: {type: Number},
    currentBid: {type: Number},
    status: {type: String},  
    currentHighestBidder: {type: Schema.Types.ObjectId, ref: 'User'},
    property: {type: Schema.Types.ObjectId, ref: 'Property'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Auction', schema);