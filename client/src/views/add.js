var Marionette = require('backbone.marionette');

module.exports = AddView = Marionette.ItemView.extend({
    template: require('../../templates/add.hbs'),
    events: {
        'click a.save-button': 'save'
    },

    save: function(e) {
        e.preventDefault();
        var newCompany = {
            name: this.$el.find('#name').val(),
            ticker: this.$el.find('#ticker').val(),
            year1: this.$el.find('#year1').val(),
            year2: this.$el.find('#year2').val(),
            year3: this.$el.find('#year3').val(),
            year4: this.$el.find('#year4').val(),
            year5: this.$el.find('#year5').val()
        };

        window.App.data.contacts.create(newCompany);
        window.App.core.vent.trigger('app:log', 'Add View: Saved new company!');
        window.App.controller.home();
    }
});
