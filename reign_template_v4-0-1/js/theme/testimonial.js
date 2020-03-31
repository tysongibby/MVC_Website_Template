'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|  Hover dir for Gallery
-----------------------------------------------*/

const $carouselSynced = $('.owl-carousel-synced');
spUtils.$document.ready(() => {

  if ($carouselSynced.length) {
    const Selector = {
      ALL_TIMELINE: '*[data-zanim-timeline]',
      ACTIVE_ITEM: '.owl-item.active',
    };
    const owlZanim = {
      zanimTimeline($el) {
        return $el.find(Selector.ALL_TIMELINE);
      },
      play($el) {
        if (this.zanimTimeline($el).length === 0) return;
        $el.find(`${Selector.ACTIVE_ITEM} > ${Selector.ALL_TIMELINE}`).zanimation((animation) => {
          animation.play();
        });
      },
      kill($el) {
        if (this.zanimTimeline($el).length === 0) return;
        this.zanimTimeline($el).zanimation((animation) => {
          animation.kill();
        });
      },
    };

    $carouselSynced.each((index, value) => {
      const $this = $(value);
      const options = $this.data('options') || {};
      if (spUtils.isRTL()) {
        options.rtl = true;
        options.navText || (options.navText = ['<span class="fas fa-angle-right"></span>', '<span class="fas fa-angle-left"></span>']);
      } else {
        options.navText || (options.navText = ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>']);
      }
      options.touchDrag = true;

      $this.owlCarousel($.extend(options || {}, {
        onInitialized(event) {
          owlZanim.play($(event.target));
          const avatar = $($carouselSynced.find('.item')[event.item.index]).data('avatar');
          $(".testimonial-avatar").css('background-image',`url(${avatar})`);
        },
        onTranslate(event) {
          owlZanim.kill($(event.target));
        },
        onTranslated(event) {
          owlZanim.play($(event.target));
        },
        onChange(event) {
          const avatar = $($carouselSynced.find('.item')[event.item.index+1]).data('avatar');
          $(".testimonial-avatar").css('background-image',`url(${avatar})`);
        },
      }));
    });
  }
});
