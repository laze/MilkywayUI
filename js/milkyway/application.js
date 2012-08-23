
MilkywayUI.Application = new Class({
    viewport: null,
    screens: new Hash(),

    initialize: function(options) {
        /**
         * Set up application namespace.
         */
        if (typeOf(options.name) === 'string') {
            window[options.name] = this;
        }
        this.viewport = new MilkywayUI.ui.Viewport(options);
    },

    /**
     * Set up a new screen for the application.
     * @param {String} name The name of the screen. When application runs, the screen will be available via this name.
     * @param {Object} screen_desc The screen description.
     *
     * @see MilkywayUI.screen
     */
    setScreen: function(name, screen_desc) {
        this.screens.set(name, new MilkywayUI.screen(screen_desc));
    },

    /**
     * Get a screen from the list.
     * @param {String} name The screen identifier name.
     * @return {Object} A screen object.
     */
    getScreen: function(name) {
        return this.screens.get(name);
    },

    getActiveScreen: function() {

    },

    render: function() {
        this.viewport.render();
//        this.getActiveScreen().render();
    }
});