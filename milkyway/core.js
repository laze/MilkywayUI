
(function(){
    /** Define the MilkywayUI object on Window.
     *
     * @type {Object}
     */
    this.MilkywayUI = {
        version: '0.2',
        events: new Hash(),

        registerEventHandler: function() {
            window.addEvent('keydown', function(event) {
                if (MilkywayUI.events.has(event.key)) MilkywayUI.events.get(event.key).handler.run(event);
            });
        },

        /**
         * Register event handler for the MilkywayUI.
         *
         * @param {Sting} key The key for pressing. You feel free to set Ctrl+Enter or other combinations also.
         * @param {String} name The name of the action.
         * @param {Function} handler The event handler function.
         * @param {Boolean} [force] If key handler registered, then force decide whether it will overwritten or not.
         * @return void
         */
        addEventHandler: function(key, name, handler) {
            if (arguments[3] == true) MilkywayUI.events.set(key.toLowerCase(), {
                'name':    name,
                'handler': handler
            });
            else MilkywayUI.events.include(key.toLowerCase(), {
                'name':    name,
                'handler': handler
            });
        },

        getEventKeys: function() {
            return this.events.getKeys();
        },

        render: function() {
            alert('rendering comes here');
        }
    };

    this.Galaxy = {};
})();

Asset.javascript('milkyway/ui/viewport.js');
Asset.javascript('milkyway/ui/screen.js');