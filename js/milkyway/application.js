
MilkywayUI.Application = new Class({
    /**
     * @type {Object} The application's viewport. The only one.
     */
    viewport: null,

    /**
     * @type {Array} The array of the showed controller-view pairs.
     */
    history: new Array(),

    initialize: function(options) {
        /**
         * Set up application namespace.
         */
        if (typeOf(options.name) === 'string') {
            window[options.name] = this;
        }
        /**
         * Set up application's viewport.
         * @type {MilkywayUI.ui.Viewport} The application viewport.
         */
        this.viewport = new MilkywayUI.ui.Viewport(options);
        if (typeOf(options.views) === 'array') {
            options.views.each(function(item, index) {
                if (typeOf(item) === 'string') {
                    /**
                     * Parse the file to object
                     */
                }
                if (item.name !== undefined) {
                    index = item.name;
                }
                this.setScreen(index, item);
            });
        }
    },

    /**
     * Set up a new screen for the application.
     * @param {String} name The name of the screen. When application runs, the screen will be available via this name.
     * @param {Object} screen_desc The screen description.
     *
     * @see MilkywayUI.screen
     */
    setScreen: function(name, screen_desc) {
        this.views.set(name, new MilkywayUI.screen(screen_desc));
    },

    /**
     * Get a screen from the list.
     * @param {String} name The screen identifier name.
     * @return {Object} A screen object.
     */
    getScreen: function(name) {
        return this.views[name];
    },

    getActiveScreen: function() {

    },

    setController: function() {

    },

    render: function() {
        this.viewport.render();
//        this.getActiveScreen().render();
    }
});