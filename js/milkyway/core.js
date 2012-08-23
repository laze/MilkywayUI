// Copyright 2012 laze. All Rights Reserved.

/**
 * @fileoverview This is the very basic namespace of the MilkywayUI. Core must be included in the HTML, and it will
 * include all other parts of the framework.
 *
 * @author laze@laze.hu (Balazs Ercsey)
 */

(function(){
    /**
     * Define the MilkywayUI object on Window. This is the namespace of MilkywayUI wher we collect basic methods.
     * @type {Object}
     */
    this.MilkywayUI = {
        /**
         * The version number.
         * @type {string}
         */
        version: '0.2',

        /**
         * Binded events of the framework.
         * @type {Object}
         */
        events: new Object(),

        /**
         * @type {Boolean} Check whether the MilkywayUI is loaded or not.
         */
        ready: false,

        /**
         * The client application's namespace.
         * @type {Object} The client application.
         */
        application: null,

        /**
         * Initialize the framework. Includes different parts, necessary modules, and build up the application and the
         * viewport of that.
         *
         * @return {void}
         */
        initialize: function() {
            /**
             * @const
             * @type {String} SYS_PATH The root path of MilkywayUI.
             */
            MilkywayUI.SYS_PATH = $('MilkywayUI').get('src').replace('milkyway/core.js', '');
            /**
             * @const
             * @type {String} APP_PATH The root path of the client application.
             */
            MilkywayUI.APP_PATH = $('MilkywayApp').get('src').substr(0, $('MilkywayApp').get('src').lastIndexOf('/') + 1);

            /** Load basically necessary components.
             */
            MilkywayUI.require('milkyway.ui.component');
            MilkywayUI.require('milkyway.ui.viewport');
            MilkywayUI.require('milkyway.ui.bar');
            MilkywayUI.require('milkyway.ui.screen');

            /**
             * If application class included, we instantiates the application.
             */
            MilkywayUI.require('milkyway.application', {
                onLoad: function() {
                    MilkywayUI.application = new MilkywayUI.Application(MilkywayUI._application.configuration);
                    MilkywayUI.ready = true;

                    MilkywayUI.render();
                }
            });
        },

        /**
         * Define application.
         *
         * @param {object} options The object what describes the application.
         */
        defineApp: function(options) {
            if (typeOf(options) === 'object') {
                MilkywayUI._application = {
                    configuration: options
                };
            }
        },

        /** Include a file. Path should be defined as namespaces like:
         * app_name.view_controller
         * or
         * milkyway.group.component (milkyway.ui.screen)
         *
         * @param {String} path
         * @param {Object} options
         * @return Void
         */
        require: function(path, options) {
            if (typeOf(path) == 'string') {
                Asset.javascript(MilkywayUI.SYS_PATH + path.replace(/\./gi, '/') + '.js', options);
            }
        },

        registerEventHandler: function() {
            window.addEvent('keydown', function(event) {
                if (MilkywayUI.events[event.key] != undefined) MilkywayUI.events[event.key].handler.run(event);
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
            if (arguments[3] == true) {
                MilkywayUI.events[key.toLowerCase()] = {
                    'name':    name,
                    'handler': handler
                };
            } else if(MilkywayUI.events[key.toLowerCase()] == undefined) {
                MilkywayUI.events[key.toLowerCase()] = {
                    'name':    name,
                    'handler': handler
                };
            }
        },

        getEventKeys: function() {
            return Object.keys(this.events);
        },

        render: function() {
            MilkywayUI.application.render();
        }
    };

    this.Galaxy = {};
})();

window.addEvent('domready', function() {
    MilkywayUI.initialize();
});