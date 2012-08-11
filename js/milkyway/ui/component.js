/**
 * Created with JetBrains WebStorm.
 * User: laze
 * Date: 2012.08.12.
 * Time: 0:22
 * To change this template use File | Settings | File Templates.
 */

/**
 * The MilkywayUI.component class is the basic of all UI component, like screens, bars, buttons, etc... It handles the
 * basic properties, and methods.
 * @author <a href="mailto:laze@laze.hu">Balazs Ercsey - laze</a>
 * @class
 * @this {MilkywayUI.component}
 */
MilkywayUI.component = new Class({
    /**
     * @type {Boolean} auto_render If true the component will be automatically rendered, if not, user should render it
     *                             manually. Automatic rendering means, that the component will be attached to the DOM
     *                             by default.
     */
    auto_render: true,

    /**
     * @type {Object} component_el The generated DOM element.
     */
    component_el: null,

    /**
     * @type {String} component_tag The component's HTML tag what will generate on render.
     */
    component_tag: 'div',

    /**
     * @type {Integer} height The height of the given component
     */
    height: 0,

    /**
     * @type {String} id The id of the generated HTML element.
     */
    id: '',

    /**
     * @type {Object} parent_el The parent element object.
     */
    parent_el: null,

    /**
     * @type {Boolean} rendered Is the element rendered or not yet?
     */
    rendered: false,

    /**
     * @type {Integer} width The width of the given component
     */
    width: 0,

    /**
     * Se up configuration for a new component.
     * @constructor
     * @param {Object} configuration The basic configuration of the component.
     */
    initialize: function(configuration) {

    },

    /**
     * Removes the generated component from the DOM tree. It will seems, it's hidden, but don't use this for hide,
     * because this method is completely remove the element from the DOM tree
     * @see MilkywayUI.component.hide()
     */
    detach: function() {
        this.component_el.dispose();
    },

    hide: function() {
        this.component_el.hide();
    },

    /**
     * Get the height of the component.
     * @return {Integer}
     */
    getHeight: function() {
        return this.height;
    },

    /**
     * Set the height of the component.
     * @param {Integer} height
     */
    setHeight: function(height) {
        if (typeOf(height) === 'number') {
            this.height = height;
            /**
             * @todo
             * Generated component also should be updated - if its exists.
             */
        }
    },

    /**
     * Returns the HTML element's id.
     * @return {String}
     */
    getId: function() {
        return this.id;
    },

    /**
     * Set id for the HTML element what will be generated. (After rendering, this method not works.)
     * @param {String} id Optional. The id of the element, or if it's null, then a UID will be generated for the id.
     */
    setId: function(id) {
        if (!this.rendered) {
            if (typeOf(id) === 'string') {
                this.id = id;
            } else {
                this.id = String.uniqueID();
            }
        }
    },

    /**
     * Get the width of the component.
     * @return {Integer}
     */
    getWidth: function() {
        return this.width;
    },

    /**
     * Set the width of the component.
     * @param {Integer} width
     */
    setWidth: function(width) {
        if (typeOf(width) === 'number') {
            this.width = width;
            /**
             * @todo
             * Generated component also should be updated - if its exists.
             */
        }
    }

});