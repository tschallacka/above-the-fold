+function($,window,document) {
    var $visibleElements = $('*').withinviewport();
    $.each(document.styleSheets,function(index,elem) {
    try {
        if(elem.cssRules) {
            
            $.each(elem.cssRules,function(index,rule) {
                if(rule instanceof CSSMediaRule) {
                    var mq = window.matchMedia('@media '+rule.conditionText);
                    if(mq.matches) {
                        // the width of browser is more then 700px
                    }
                    else {
                        continue;
                    }
                }
                else if(rule instanceof CSSStyleRule) {
                }
                else if(rule instanceof CSSKeyframesRule) {
                }
                else if(rule instanceof CSSFontFaceRule) {
                }
                else {
                    console.log('uck');
                }
            });
        }
    }
    catch(e) {
        var error = "Cross site security prevents reading from "+elem.href+" please include a version hosted on your server to be able include these style rules as well";
        console.error(error);
    }
});
}(jQuery,window,document);
