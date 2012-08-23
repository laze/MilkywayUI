/**
* @fileoverview
*
* @author Balazs Ercsey <laze@laze.hu>
* @version 0.1
*/



/**
 * The Milkyway UI's screen class.
 *
 * @class MilkywayUI.Screen
 * @constructor
 * @return Screen
 */
MilkywayUI.ui.Screen = new Class({
    auto_render:            false,
    /**
     * The base CSS class to apply to this panel's element (defaults to 'ui-screen').
     * @type String
     */
    base_class:             'ui-screen',
    parent_el:           null,
    /**
     * The height of the screen.
     * @type Integer
     */
    height:                 0,
    /**
     * The width of the screen.
     * @type Integer
     */
    width:                  0,
    /**
     * The HTML element's type to generate screen.
     * @type String
     */
    viewport_el:                'div',
    /**
     * The id of the generated HTML DOM element. If it's not given, it will be
     * generated automatically.
     * @type String
     */
    id:                     '',

    /**
     * Initialize the screen.
     *
     * @param {Object} options Screen's properties to set up them.
     */
    initialize: function(options) {
        console.log(' ***** Screnn initialize with parameters:');
        console.log(options);
        var options = ($type(arguments[0]) === 'object') ? arguments[0] : {};
        //- auto_render
        if (typeOf(options.auto_render) === 'boolean') this.auto_render = options.auto_render;
        //- id
        this.id = ($chk(options.id)) ? options.id : id.get();
        //- height
        this.height = options.height;
        //- width
        this.width = options.width;
        //- top
        this.top = options.top;
        //- left
        this.left = options.left;
    },

    /**
     * Renders screen.
     *
     * @return void;
     */
    render: function() {
        if ($(this.id)) {
            $(this.id).addClass(this.base_class);
            return true;
        }
        this.parent_el.adopt(new Element(this.viewport_el, {
            'id':           this.id,
            'html':         '<video id="movie_test" src="big_buck_bunny.ogv">your browser does not support the video tag</video>',
//                      'html':         '<object width="640" height="385"><param name="movie" value="http://www.youtube.com/v/vV0bM6_TYvc?fs=1&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="transparent"></param><embed src="http://www.youtube.com/v/vV0bM6_TYvc?fs=1&amp;hl=en_US" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="transparent" width="640" height="385"></embed></object>',
            'styles': {
                'background-color': 'purple',
                'display':      'block',
                'position':     'relative',
                'left':         this.left,
                'top':          this.top,
                'height':       this.height,
                'width':        this.width,
                'z-index':      70
            }
        }));
    }
});