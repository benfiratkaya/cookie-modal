//
// Card
//

"use strict";

// Cookie Modal

var CookieModal = (function() {
  // Variables

  var $modal = $('[data-toggle="cookie-modal"]');
  var $modalAccept = $modal.find('[data-accept="true"]');

  // Methods

  function showModal($this) {
    var cookie = localStorage.getItem("cookie_modal");

    if (!cookie) {
      $this.show();
      $this.addClass("show");
    }
  }

  function hideModal($this) {
    $this.removeClass("show");
    $this.delay(300).hide(0);
  }

  // Events

  if ($modal.length) {
    showModal($modal);

    $modalAccept.on("click", function(e) {
      hideModal($modal);
      localStorage.setItem("cookie_modal", 1);
    });
  }
})();
