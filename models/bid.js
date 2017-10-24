var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    amount: {type: Number, required: true},
    // time: {type: Date, default: Date.now},
    // bidder: {type: String, required: true},
    // property: {type: String, required:true}
    // property: {type: mongoose.Schema.Types.ObjectId, ref: 'Property'}
});


module.exports = mongoose.model('Bid', schema);