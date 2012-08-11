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
MilkywayUI.bar = new Class({
    base_class: 'ui-bar',

    position_top: 0,
    position_left: 0,
    vertical_align: 'bottom',

    Extends: MilkywayUI.component,

    initialize: function(options) {
        this.vertical_align = options.vertical_align;
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
        }).inject(this.parent_el, this.vertical_align);
    }
});

MilkywayUI.StatusBar = new Class({
    Extends: MilkywayUI.bar,
    initialize: function(options) {
    //﻿  ﻿  console.info('Created StatusBar');
        this.height = 30;
        //- id
//        this.id = ($chk(options.id)) ? options.id : id.get();
        this.vertical_align = options.vertical_align;
    }
});

MilkywayUI.EventBar = new Class({
    Extends: MilkywayUI.bar,
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
        this.viewport_el.inject(this.parent_el, this.vertical_align);
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