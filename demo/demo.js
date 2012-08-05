var gui = new MilkywayUI.Viewport({
    id:'viewport_test',
    bars:new MilkywayUI.EventBar({
        'height':20,
        'skin_class':'galaxy-eventbar'
    }),
    screens:[new MilkywayUI.Screen({
        'id':'video_test',
        'auto_render':true,
        'height':600,
        'width':800,
        'top':120,
        'left':0
    })]
});
alert('2. - before render');
gui.render();