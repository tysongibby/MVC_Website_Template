'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|   Tooltip
-----------------------------------------------*/
spUtils.$document.ready(() => {
  // https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
  $('[data-toggle="tooltip"]').tooltip();
});
