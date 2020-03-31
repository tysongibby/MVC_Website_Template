'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|  Flex slider
-----------------------------------------------*/

spUtils.$document.ready(() => {
  const flexslider = $('.flexslider');
  if(flexslider.length){


    const flexSliderZanim = (slider, target) => {
        if($(slider).find('*[data-zanim-timeline]').length === 0) return;
        $(slider).find('*[data-zanim-timeline]').zanimation(animation => animation.kill());
        $(target).zanimation(animation => animation.play());
    }

    flexslider.each((item, value) => {    
      const $this = $(value);
      
      $this.flexslider($.extend(
        $this.data("options") || {
          prevText: '<span class="indicator-arrow indicator-arrow-left"></span>',
          nextText: '<span class="indicator-arrow indicator-arrow-right"></span>',
        }, {
          start: (slider) => {
            flexSliderZanim(slider, slider.find('*[data-zanim-timeline].flex-active-slide'));
          },
          before: (slider) => {
            flexSliderZanim(slider, slider.find("ul.slides > li:nth-child("+(slider.getTarget(slider.direction)+1)+")")[0]);
          }
        }
      ));
    });
  }

});