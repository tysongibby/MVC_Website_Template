'use strict';

import spUtils from './Utils';
// import { on } from 'cluster';

/*-----------------------------------------------
|   On page scroll for #id targets
-----------------------------------------------*/
spUtils.$document.ready(($) => {
  $(document).on('click', 'a[data-fancyscroll]', function scrollTo(e) {
    // const $this = $(e.currentTarget);
    const $this = $(this);
    if (spUtils.location.pathname === $this[0].pathname && 
spUtils.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
spUtils.location.hostname === this.hostname) {
    e.preventDefault();  
    let target = $(this.hash);
      target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - ($this.data('offset') || 0)),
        }, 500, 'swing', () => {
          const hash = $this.attr('href');
          window.history.pushState ?
            window.history.pushState(null, null, hash) : window.location.hash = hash;
        });
        return false;
      }
    }
    return true;
  });

  let {hash} = window.location;

  if(document.getElementById(hash.slice(1))){
    let $this = $(hash);
    $('html,body').animate({
      scrollTop: $this.offset().top - $(`a[href='${hash}']`).data('offset'),
    }, 800, 'swing', () => {
      window.history.pushState ?
        window.history.pushState(null, null, hash) : window.location.hash = hash;
    });
  }
});







