var mongoose = require('mongoose'),
    models = require('./models'),
    md5 = require('MD5');

module.exports = {
    check: function() {
        models.Contact.find({}, function(err, contacts) {
            if (contacts.length === 0) {
                console.log('no contacts found, seeding...');
                var newContact = new models.Contact({
                    email: 'jkat98@gmail.com',
                    name: {
                        first: 'Jason',
                        last: 'Krol'
                    },
                    phone: '215-123-1234',
                    gravatar: md5('jkat98@gmail.com')
                });
                newContact.save(function(err, contact) {
                    console.log('successfully inserted contact: ' + contact._id);
                });

                newContact = new models.Contact({
                    email: 'testerson@example.com',
                    name: {
                        first: 'Steve',
                        last: 'Testerson'
                    },
                    phone: '215-123-1234',
                    gravatar: md5('testerson@example.com')
                });
                newContact.save(function(err, contact) {
                    console.log('successfully inserted contact: ' + contact._id);
                });

                newContact = new models.Contact({
                    email: 'nancy@testerson.com',
                    name: {
                        first: 'Nancy',
                        last: 'Testerson'
                    },
                    phone: '215-123-1234',
                    gravatar: md5('nancy@testerson.com')
                });
                newContact.save(function(err, contact) {
                    console.log('successfully inserted contact: ' + contact._id);
                });
            } else {
                console.log('found ' + contacts.length + ' existing contacts!');
            }
        });
    },
    checkCompanies: function() {
               models.Company.find({}, function(err, companies) {
            if (companies.length === 0) {
                console.log('no contacts found, seeding...');
                var newCompany = new models.Company({
                        name: 'Acme Widgets',
                        ticker: 'ACME',
                        year1: '100',
                        year2: '150',
                        year3: '220',
                        year4: '375',
                        year5: '505'  
                });
                newCompany.save(function(err, company) {
                    console.log('successfully inserted company: ' + company._id);
                });
            } else {
                console.log('found ' + companies.length + ' existing companies!');
            }
        });       
    }
};
