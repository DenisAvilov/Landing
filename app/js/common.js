$(document).ready(function() {
    $('#my-menu').mmenu({
       extensions: [ "theme-white",  'pagedim-black', "border-full"],
           navbar: {
           title: '<img src="img/Logo_DAD.png" alt="DAD">',
           close: false
       },
       offCanvas: {
           position: 'right'
       }
    });
       var api = $('#my-menu').data('mmenu');
       api.bind('open:finish', function() {
             $('.hamburger').addClass('is-active');

       });
       api.bind('close:finish', function() {
              $('.hamburger').removeClass('is-active');
       });
});


