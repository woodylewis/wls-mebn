var Marionette = require('backbone.marionette');

module.exports = ContactDetailsView = Marionette.ItemView.extend({
    template: require('../../templates/company_details.hbs'),
    onRender: function() {
            var data = [
                            this.model.attributes.year1,
                            this.model.attributes.year2,
                            this.model.attributes.year3,
                            this.model.attributes.year4,
                            this.model.attributes.year5
                        ];
            
            var width = 420,
                barHeight = 20;

            var x = d3.scale.linear()
                .domain([0, d3.max(data)])
                .range([0, width]);

            //--------- SELECT THE WLS-CHART ELEMENT -----------
            var chart = d3.select(this.el.children[1])
                .attr("width", width)
                .attr("height", barHeight * data.length);

            var bar = chart.selectAll("g")
                .data(data)
              .enter().append("g")
                .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

            bar.append("rect")
                .attr("width", x)
                .attr("height", barHeight - 1);

            bar.append("text")
                .attr("x", function(d) { return x(d) - 16; })
                .attr("y", barHeight / 2)
                .attr("dy", ".35em")
                .text(function(d) { return d; });
    },
    events: {
        'click a.back': 'goBack',
        'click a.delete': 'deleteContact'
    },
    goBack: function(e) {
        e.preventDefault();
        window.App.controller.home();
    },
    deleteContact: function(e) {
        e.preventDefault();
        console.log('Deleting contact');
        window.App.data.contacts.remove(this.model);

        // this will actually send a DELETE to the server:
        this.model.destroy();

        window.App.controller.home();
    }
});
