/**
 * @fileoverview
 *
 * @author Balazs Ercsey laze@laze.hu
 * @version 0.1
 */


/**
 * The MilkywayUI's bar class.
 *
 * @class MilkywayUI.Bar
 * @constructor
 * @return Bar
 */
MilkywayUI.ui.Bar = new Class({
    base_class: 'ui-bar',

    position_top: 0,
    position_left: 0,
    screen_alignment: 'bottom',

    Extends: MilkywayUI.ui.Component,

    initialize: function(options) {
        /**
         * Define bar namespace for different type of other bars what are derived from this class.
         */
        MilkywayUI.ui.bar = {};

        this.screen_alignment = options.screen_alignment;
    },

    /**
 ﻿   * Render bar.
 ﻿   */
    render: function() {
        new Element(this.viewport_el, {
            'id': this.id,
            'class': this.base_class,
            'styles': {
                'height': this.height
            }
        }).inject(this.parent_el, this.screen_alignment);
    }
});

MilkywayUI.ui.bar.StatusBar = new Class({
    Extends: MilkywayUI.ui.Bar,
    initialize: function(options) {
    //﻿  ﻿  console.info('Created StatusBar');
        this.height = 30;
        //- id
//        this.id = ($chk(options.id)) ? options.id : id.get();
        this.screen_alignment = options.screen_alignment;
    }
});

MilkywayUI.ui.bar.EventBar = new Class({
    Extends: MilkywayUI.ui.Bar,
    render: function () {
        this.viewport_el = new Element(this.html_el_type, {
            'id': this.id,
            'class': this.base_class,
            'styles': {
                'height': this.height,
                'width': this.parent_el.getSize().x,
                'top': this.position_top,
                'left': this.position_left
            }
        });
        this.viewport_el.inject(this.parent_el, this.screen_alignment);
        this.viewport_el.adopt(new Element('div', {
            'id': this.id + '-content',
            'styles': {
                'height': this.height,
                'width': this.parent_el.getSize().x
            }
        }));

        MilkywayUI.events.each(function (item, key) {
            $(this.id + '-content').set('html', $(this.id + '-content').get('html') + ' ' + '&laquo;' + key + '&raquo; - ' + item.name);
        }, this);
    }
});