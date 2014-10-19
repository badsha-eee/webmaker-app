var App = require('../../lib/app');
var view = require('../../lib/view');

module.exports = view.extend({
    id: 'play',
    template: require('./index.html'),
    data: {
        cancel: '/profile'
    },
    created: function () {
        var self = this;

        // Fetch app
        var id = self.$parent.$data.params.id;
        var app = new App(id);

        // Bind app
        self.$data.app = app.data;
        self.title = app.data.name;

        self.$data.onDone = '/make/' + id + '/share';
    }
});
