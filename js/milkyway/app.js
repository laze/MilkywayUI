
MilkywayUI.application = new Class({
    viewport: null,
    screens: new Hash(),

    initialize: function(options) {
        this.viewport = new MilkywayUI.viewport(options)
    },

    getScreen: function(name) {

    },

    getActiveScreen: function() {

    },

    render: function() {
        this.viewport.render();
//        this.getActiveScreen().render();
    }
});