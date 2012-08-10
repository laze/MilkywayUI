/**
 * @fileoverview MilkywayUI's viewport
 *
 * @author Balazs Ercsey laze@laze.hu
 * @version 0.1
 */



/**
 * The MilkywayUI's viewport class.
 *
 * @class MilkywayUI.Viewport
 * @constructor
 * @return Viewport
 */
MilkywayUI.viewport = new Class({
    /**
     * The bars what could be shown on the viewport. Basically it has a bar
     * for communication, for confirm, alert and load messages, and another
     * for show actually handled keys.
     * @type {Array}
     */
    bars:                   [],
    /**
     * The base CSS class to apply to this panel's element (defaults to 'x-main').
     * @type {string}
     */
    base_class:             'ui-main',
    /**
     * The HTML element, where Tui will render the its viewport.
     * @type {object}
     */
    container_el:           null,
    /**
     * The height of the viewport.
     * @type {Integer}
     */
    height:                 0,
    /**
     * The width of the viewport.
     * @type {Integer}
     */
    width:                  0,
    /**
     * The HTML element, what is the main element of the viewport.
     * @type {object}
     */
    html_el:                null,
    /**
     * The HTML element's type to generate UI's interface.
     * @type {string}
     */
    html_el_tag:            'div',
    /**
     * The id of the generated HTML DOM element. If it's not given, it will be
     * generated automatically.
     * @type {string}
     */
    id:                     '',
    /**
     * The screens of the current application.
     * @type {Array}
     */
    screens:                [],

    /**
     * Initialize the viewport.
     * @param {Object} options The startup options of the object.
     */
    initialize: function(options) {
        if (typeOf(options) === 'object') {
            /** Set up properties...
             */
            this.setId(options.name);
            this.setHeight(options.height);
            this.setWidth(options.width);
            this.setContainer(options.container);

            this.generate();
        }
//        //- bars
//        if (typeOf(options.bars) === 'array') this.bars = options.bars;
//        else if (typeOf(options.bars) === 'object') this.bars.push(options.bars);
//        else this.bars = [/*{
//             'type':                         'dialog',
//             'vertical_align':       'bottom'
//             },{
//             'type':                         'status',
//             'height':                       20,
//             'vertical_align':       'bottom'
//             },*/
//                new MilkywayUI.EventBar({
//                    'height':               20,
//                    'vertical_align':       'bottom'
//                })];

//        MilkywayUI.addEventHandler('p', 'play', function() {
////                      console.info('event handler defined in milkyway viewport');
////                      console.log(arguments);
//            if ($('movie_test').paused == false) $('movie_test').pause();
//            else $('movie_test').play();
//
//        });
    },

//        if (this.container_el.hasChild(this.id)) $(this.id).addClass(this.base_class);
//        else this.container_el.adopt(this.html_el);
//        this.screens.each(function(screen) {
//            screen.container_el = this.html_el;
//            if (screen.auto_render) screen.render();
//        }, this);
//        var placeholder_height = this.height;
//        if (!$(this.id).hasChild(this.id+'-placeholder')) $(this.id).adopt(new Element('div', {
//            'id':           this.id + '-placeholder',
//            'class':        this.base_class,
//            'styles':       {
//                'height':       0,
//                'width':        this.html_el.getStyle('width')
//            }
//        }));
//        this.bars.each(function(bar) {
//            placeholder_height -= bar.height;
//            bar.container_el = this.html_el;
//            bar.position_top = this.html_el.getPosition().y + this.html_el.getSize().y - bar.height;
//            bar.position_left = this.html_el.getPosition().x;
//            bar.render();
//        }, this);
//        $(this.id+'-placeholder').setStyle('height',placeholder_height);

    /**
     * Generate the viewport.
     */
    generate: function() {
        console.log(this.container_el);
        if (!this.container_el.contains($(this.id))) {
            this.html_el = new Element(this.html_el_tag, {
                'id': this.id
            });
            /**
             * Adopt to the DOM tree. Container should be set previously.
             */
            this.container_el.adopt(this.html_el);
        }
        /**
         * Set up viewport element properties.
         */
        this.html_el = $(this.id).set({
            'class': this.base_class,
            'styles': {
                'height': this.height,
                'width': this.width
            }
        });
    },

    /**
     * Set up the visible area's id.
     * @param {String} id HTML id parameter of the main container. If no id given, it will be a unique generated id.
     */
    setId: function(id) {
        if (typeOf(id) === 'string') {
            this.id = 'ui' + id.camelCase().replace(/\s/gi, '').hyphenate() + '-viewport';
        } else {
            this.id = 'ui-' + String.uniqueID() + '-viewport';
        }
    },

    /**
     * Set up the visible area's height.
     * @param {Integer} height The height of the shown area.
     */
    setHeight: function(height) {
        if (typeOf(height) === 'number') {
            this.height = height;
        }
    },

    /**
     * Set up the visible area's width.
     * @param {Integer} width The width of the shown area.
     */
    setWidth: function(width) {
        if (typeOf(width) === 'number') {
            this.width = width
        }
    },

    /**
     * Set up container element by id.
     * @param {String} container Optional. The id of the container element. If no valid element id given, the container
     *                           element automatically will be replaced to document.body.
     */
    setContainer: function(container) {
        if (typeOf(container) === 'string' && $(document.body).contains($(container))) {
            this.container_el = $(container);
        } else {
            this.container_el = $(document.body);
        }
    },

    /**
     * Render viewport.
     *
     */
    render: function() {
    }
});