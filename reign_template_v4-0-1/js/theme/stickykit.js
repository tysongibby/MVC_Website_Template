'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|   Sticky Kit
-----------------------------------------------*/
spUtils.$document.ready(() => {
  const stickyKit = $('.sticky-kit');
  if (stickyKit.length) {
    stickyKit.each((index, value) => {
      let options = $(value).data('options');
      options = $.extend({},options);
      $(value).stick_in_parent(options);
    });
  }
});
