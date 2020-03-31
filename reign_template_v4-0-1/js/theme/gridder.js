'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|  Hover dir for Gallery
-----------------------------------------------*/

spUtils.$document.ready(() => {

  const $gridder = $(".gridder");

  if($gridder.length) {
    $gridder.each( (index, value) => {
      const $this = $(value);
      const options = $.extend({
        scroll: true,
        scrollOffset: 75,
        scrollTo: "listitem", // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: true, // Show Navigation
        nextText: "<span class='fas fa-angle-right'></span>", // Next button text
        prevText: "<span class='fas fa-angle-left'></span>", // Previous button text
        closeText: "<span class='fas fa-times'></span>", // Close button text
      }, $this.data('options'));
      $this.gridderExpander(options);
    });
  }
});