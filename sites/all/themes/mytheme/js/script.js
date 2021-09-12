(function ($, Drupal) {
  Drupal.behaviors.mytheme = {
    attach:function (context,settings) {
      if ($("body:not('.processed')").length) {
        $("body").addClass('processed');
      }
    }
  };
})
(jQuery, Drupal);
