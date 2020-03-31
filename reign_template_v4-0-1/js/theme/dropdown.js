'use strict';

import spUtils from './Utils';
import spDetector from './detector';


/*-----------------------------------------------
|   Documentation and Component Navigation
-----------------------------------------------*/
spUtils.$document.ready(() => {

  const $navbarDropdown = $('.navbar-theme .dropdown');

  if(!spDetector.isMobile){
    $navbarDropdown.addClass('dropdown-on-hover');
  }else{
    $navbarDropdown.removeClass('dropdown-on-hover');
  }

  const toggleDropdown = (e) => {
    const $el = $(e.target);
    let dropdown = $el.closest('.dropdown-on-hover'),
        dropdownMenu = $('.dropdown-menu', dropdown);
    
    setTimeout(() => {
        let shouldOpen = e.type !== 'click' && dropdown.is(':hover');
        dropdownMenu.toggleClass('show', shouldOpen);
        dropdown.toggleClass('show', shouldOpen);
    
        $('[data-toggle="dropdown"]',dropdown).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 100 : 0);
  }
  
  $('body').on('mouseenter mouseleave','.dropdown-on-hover',toggleDropdown)
           .on('click', '.dropdown-menu a', toggleDropdown);

})