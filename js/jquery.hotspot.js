!function(){"use strict";var r=jQuery.noConflict();function o(o){var i=r(o.mainselector+" "+o.imageselector).prop("naturalWidth"),s=r(o.mainselector+" "+o.imageselector).prop("naturalHeight"),l=r(o.mainselector).width(),c=r(o.mainselector).height();r(o.selector).each(function(){var t=r(this).attr("data-x"),e=r(this).attr("data-y"),t=t/i*l,e=e/s*c;r(this).css({top:e,left:t,display:"block"}),r(this).children(o.tooltipselector).css({"margin-left":-r(this).children(o.tooltipselector).width()/2})})}function i(t,e){r(t).children(e.tooltipselector).is(":visible")?(r(t).children(e.tooltipselector).css("display","none"),r(t).removeClass("hotspot-tooltip-open")):(r(e.selector+" "+e.tooltipselector).css("display","none"),r(t).children(e.tooltipselector).css("display","block"),r(t).addClass("hotspot-tooltip-open"),r(window).width()-(r(t).children(e.tooltipselector).offset().left+r(t).children(e.tooltipselector).outerWidth())<0&&r(t).children(e.tooltipselector).css({right:"0",left:"auto"}))}r.fn.hotSpot=function(t){var e=r.extend({},r.fn.hotSpot.defaults,t);switch(this.each(function(){o.call(r(this),e)}),r(window).resize(function(){this.each(function(){o.call(r(this),e)})}.bind(this)),e.bindselector){case"click":this.find(e.selector).bind("click",function(t){i(t.currentTarget,e)}),this.find(e.selector).addClass("hotspot-on-click");break;case"hover":this.find(e.selector).hover(function(t){i(t.currentTarget,e)})}return this},r.fn.hotSpot.defaults={mainselector:".hotspot-img",selector:".hot-spot",imageselector:"img",tooltipselector:".tooltip",bindselector:"hover"}}(jQuery);