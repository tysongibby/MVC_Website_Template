'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|  Hover dir for Gallery
-----------------------------------------------*/

spUtils.$document.ready(() => {
  
  const hoverdir = $(".hoverdir-grid");

  if( hoverdir.length) {
    hoverdir.each((index, value) => {
      const $this = $(value);

      const options = $.extend({
        speed: 300,
        easing: 'ease',
        hoverDelay: 0,
        inverse: false,
        hoverElem: '.hoverdir-item-content'
      }, $this.data('options') );

      $this.find('.hoverdir-item').hoverdir(options);

    })
  }
});