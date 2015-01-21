var models = require('../app/models'),
    md5 = require('MD5');

module.exports = {
    index: function(req, res) {
        models.Company.find({}, function(err, data) {
            res.json(data);
            console.log('COMPANY', data);
        });

    },
    getById: function(req, res) {
        models.Company.find({ _id: req.params.id }, function(err, company) {
            if (err) {
                res.json({error: 'Company not found.'});
            } else {
                res.json(company);
            }
        });
    },
    add: function(req, res) {
        var newCompany = new models.Company(req.body);
        newCompany.gravatar = md5(newCompany.email);
        newCompany.save(function(err, company) {
            if (err) {
                res.json({error: 'Error adding company.'});
            } else {
                res.json(company);
            }
        });
    },
    // update: function(req, res) {
    //     console.log(req.body);
    //     models.Company.update({ _id: req.body.id }, req.body, function(err, updated) {
    //         if (err) {
    //             res.json({error: 'Company not found.'});
    //         } else {
    //             res.json(updated);
    //         }
    //     })
    // },
    delete: function(req, res) {
        models.Company.findOne({ _id: req.params.id }, function(err, company) {
            if (err) {
                res.json({error: 'Company not found.'});
            } else {
                company.remove(function(err, contact){
                    res.json(200, {status: 'Success'});
                })
            }
        });
    }
};
