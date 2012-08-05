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
MilkywayUI.Bar = new Class({
﻿  /**
 ﻿  * The base CSS class to apply to this panel's element (defaults to 'x-main').
 ﻿  * @type String
 ﻿  */
    base_class:﻿ 'x-bar',
﻿  /**
﻿   * The HTML element, where Tui will render the its viewport.
﻿   * @type Object
﻿   */
﻿
    container_el:﻿ null,
﻿  /**
 ﻿   * The height of the viewport.
 ﻿   * @type Integer
 ﻿   */
﻿
    height:﻿ 0,
﻿  /**
 ﻿   * The HTML element's.
 ﻿   * @type String
 ﻿   */
﻿
    html_el:﻿ null,
﻿  /**
 ﻿   * The HTML element's type to generate bar's tag.
 ﻿   * @type String
 ﻿   */
    ﻿
    html_el_type:﻿ 'div',
    ﻿  /**
     ﻿   * The id of the generated HTML DOM element. If it's not given, it will be
     ﻿   * generated automatically.
     ﻿   * @type String
     ﻿   */
    id:﻿ '',
    ﻿
    position_top:﻿ 0,
    ﻿
    position_left:﻿ 0,
    ﻿
    vertical_align:﻿ 'bottom',
    ﻿
    skin_class:﻿ null,

﻿   /**
 ﻿   * Initialize the bar.
 ﻿   * @param {Object} options The startup options
 ﻿   */
﻿
    initialize: function () {
    ﻿  ﻿  var options = ($type(arguments[0]) == 'object') ? arguments[0] : {};
    ﻿  ﻿  //- height
    ﻿  ﻿  this.height = options.height;
    ﻿  ﻿  //- id
    ﻿  ﻿  this.id = ($chk(options.id)) ? options.id : id.get();
    ﻿  ﻿  if ($type(options.skin_class) == 'string') this.skin_class = options.skin_class;

    ﻿  ﻿  this.vertical_align = options.vertical_align; //- Just for future, not yet implemented.
    ﻿
    },

    ﻿  /**
    ﻿   * Render bar.
    ﻿   */
    render: function () {
//﻿  ﻿  console.info(this);
        new Element(this.html_el, {
            'id':﻿  ﻿  this.id,
            'class': this.base_class,
            'styles':﻿  {
    ﻿  ﻿  ﻿  ﻿      'height':﻿  this.height
//﻿  ﻿  ﻿  ﻿        'top':﻿  ﻿  this.position_top
    ﻿        }
﻿       });
        inject(this.container_el, this.vertical_align);
    }
});

MilkywayUI.StatusBar = new Class({
﻿
Extends: MilkywayUI.Bar,

﻿
initialize: function () {
//﻿  ﻿  console.info('Created StatusBar');
﻿  ﻿  var options = ($type(arguments[0]) == 'object') ? arguments[0] : {};
﻿  ﻿  this.height = 30;
﻿  ﻿  //- id
﻿  ﻿  this.id = ($chk(options.id)) ? options.id : id.get();
﻿  ﻿  this.vertical_align = options.vertical_align;
﻿
}
})
;

MilkywayUI.EventBar = new Class({
﻿
Extends: MilkywayUI.Bar,

﻿
render: function () {
//﻿  ﻿  console.info('Render Eventbar');
﻿  ﻿  this.html_el = new Element(this.html_el_type, {
﻿  ﻿  ﻿  'id'
:﻿  ﻿  this.id,
﻿  ﻿  ﻿  'class'
:﻿  this.base_class,
﻿  ﻿  ﻿  'styles'
:﻿  {
    ﻿  ﻿  ﻿  ﻿  'height'
    :﻿  this.height,
﻿  ﻿  ﻿  ﻿  'width'
    :﻿  this.container_el.getSize().x,
﻿  ﻿  ﻿  ﻿  'top'
    :﻿  ﻿  this.position_top,
﻿  ﻿  ﻿  ﻿  'left'
    :﻿  ﻿  this.position_left
﻿  ﻿  ﻿
    }
﻿  ﻿
}
)
;
﻿  ﻿
this.html_el.inject(this.container_el, this.vertical_align);
﻿  ﻿
this.html_el.adopt(new Element('div', {
﻿  ﻿  ﻿
'id'
:﻿  ﻿
this.id + '-content',
﻿  ﻿  ﻿
'class'
:﻿
this.skin_class,
﻿  ﻿  ﻿
'styles'
:﻿
{
﻿  ﻿  ﻿  ﻿  'height'
:﻿  this.height,
﻿  ﻿  ﻿  ﻿  'width'
:﻿  this.container_el.getSize().x
﻿  ﻿  ﻿
}
﻿  ﻿  }))
;
﻿  ﻿
MilkywayUI.events.each(function (item, key) {
//﻿  ﻿  ﻿  console.log(item, key);
    ﻿  ﻿  ﻿  $(this.id + '-content').set('html', $(this.id + '-content').get('html') + ' ' + '&laquo;' + key + '&raquo; - ' + item.name);
﻿  ﻿
}, this);
﻿  }
});