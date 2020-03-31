'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/
spUtils.$document.ready(() => {
  const $navbar = $('.navbar-theme');
  const $headerOverlay = $('.header-overlay');
  const $headerContent = $('.header-text, .header-indicator-down');

  if ($navbar.length) {
    const windowHeight = spUtils.$window.height();

    spUtils.$window.scroll(() => {
      const scrollTop = spUtils.$window.scrollTop();

      let alpha = (scrollTop / windowHeight) * 2;
      let beta = (scrollTop / windowHeight);

      (alpha >= 1) && (alpha = 1);
      $navbar.css({ 'background-color': `rgba(0, 0, 0, ${alpha})`});

      // Reduce header content opacity on scroll
      (alpha >= 1) && (alpha = 1);
      $headerOverlay.css({ 'background-color': `rgba(0, 0, 0, ${beta})`});
      $headerContent.css({ 'opacity': 1 - beta});

      // Reduce border bottom opacity on scroll
      $navbar.css({'border-color': `rgba(255, 255, 255, ${0.15 - alpha})`});
    });

    // Fix navbar background color [after and before expand]
    const classList = $navbar.attr('class').split(' ');
    const breakpoint = classList.filter(c => c.indexOf('navbar-expand-') >= 0)[0].split('navbar-expand-')[1];
    spUtils.$window.resize(() => {
      if (spUtils.$window.width() > spUtils.breakpoints[breakpoint]) {
        return $navbar.removeClass('bg-dark');
      } else if (!$navbar.find('.navbar-toggler').hasClass('collapsed')) {
        return $navbar.addClass('bg-dark');
      }
      return null;
    });

    // Top navigation background toggle on mobile
    $navbar.on('show.bs.collapse hide.bs.collapse', (e) => {
      $(e.currentTarget).toggleClass('bg-dark');
    });
  }
});
