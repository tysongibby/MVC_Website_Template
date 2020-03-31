'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|  Hover dir for Gallery
-----------------------------------------------*/

spUtils.$document.ready(() => {
  const toTopBtn = $('.btn-back-to-top');
  spUtils.$window.scroll( () => {
    const scrollTop = spUtils.$window.scrollTop();
    if(scrollTop > 100) {
      toTopBtn.fadeIn();
    }
    else {
      toTopBtn.fadeOut();
    }
  })
})