var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Contact = new Schema({
    email:      { type: String },
    name: {
        first:  { type: String },
        last:   { type: String }
    },
    phone:      { type: String },
    gravatar:   { type: String }
});

var Company = new Schema ({
    name:       { type: String},
    ticker:     { type: String},
    year1:      { type: Number},
    year2:      { type: Number},
    year3:      { type: Number},
    year4:      { type: Number},
    year5:      { type: Number}    
});

module.exports = {
        Contact: mongoose.model('Contact', Contact),
        Company: mongoose.model('Company', Company)
};
