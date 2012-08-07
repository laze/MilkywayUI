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
     * @type Array
     */
    bars:                   [],
    /**
     * The base CSS class to apply to this panel's element (defaults to 'x-main').
     * @type String
     */
    base_class:             'ui-main',
    /**
     * The HTML element, where Tui will render the its viewport.
     * @type Object
     */
    container_el:           null,
    /**
     * The height of the viewport.
     * @type Integer
     */
    height:                 0,
    /**
     * The width of the viewport.
     * @type Integer
     */
    width:                  0,
    /**
     * The HTML element, what is the main element of the viewport.
     * @type Object
     */
    html_el:                null,
    /**
     * The HTML element's type to generate UI's interface.
     * @type String
     */
    html_el_tag:            'div',
    /**
     * The id of the generated HTML DOM element. If it's not given, it will be
     * generated automatically.
     * @type String
     */
    id:                     '',
    /**
     * The screens of the current application.
     * @type Array
     */
    screens:                [],

    /**
     * Initialize the viewport.
     * @param {Object} options The startup options of the object.
     */
    initialize: function() {
        var options = (typeOf(arguments[0]) === 'object') ? arguments[0] : {};
        //- bars
        if (typeOf(options.bars) === 'array') this.bars = options.bars;
        else if (typeOf(options.bars) === 'object') this.bars.push(options.bars);
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
        //- screens
        if (typeOf(options.screens) === 'array') {
            this.screens = options.screens;
        } else if (typeOf(options.screens) === 'object') {
            this.screens.push(options.screens);
        }
        //- id
        this.id = (options.id) ? options.id : id.get();
        //- container_el
        if (!this.container_el) this.container_el = $(document.body);
        //- height - dependent of container_el
        this.height = (typeOf(options.height) === 'number') ? options.height : parseInt(this.container_el.getStyle('height'));
        //- html_el - dependent of container_el
//        if (this.container_el.hasChild(this.id)) this.html_el = $(this.id);
//        else this.html_el = new Element(this.html_el_tag, {
//            'id':           this.id,
//            'class':        this.base_class,
//            'styles':       {
//                'height':       this.container_el.getStyle('height'),
//                'width':        this.container_el.getStyle('width')
//            }
//        });
//        MilkywayUI.addEventHandler('p', 'play', function() {
////                      console.info('event handler defined in milkyway viewport');
////                      console.log(arguments);
//            if ($('movie_test').paused == false) $('movie_test').pause();
//            else $('movie_test').play();
//
//        });
    },

    /**
     * Render viewport.
     *
     */
    render: function() {
        if (this.container_el.hasChild(this.id)) $(this.id).addClass(this.base_class);
        else this.container_el.adopt(this.html_el);
        this.screens.each(function(screen) {
            screen.container_el = this.html_el;
            if (screen.auto_render) screen.render();
        }, this);
        var placeholder_height = this.height;
        if (!$(this.id).hasChild(this.id+'-placeholder')) $(this.id).adopt(new Element('div', {
            'id':           this.id + '-placeholder',
            'class':        this.base_class,
            'styles':       {
                'height':       0,
                'width':        this.html_el.getStyle('width')
            }
        }));
        this.bars.each(function(bar) {
            placeholder_height -= bar.height;
            bar.container_el = this.html_el;
            bar.position_top = this.html_el.getPosition().y + this.html_el.getSize().y - bar.height;
            bar.position_left = this.html_el.getPosition().x;
            bar.render();
        }, this);
        $(this.id+'-placeholder').setStyle('height',placeholder_height);
    }
});