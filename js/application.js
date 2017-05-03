$("#menu-toggle,#menu-close,#home,#about,#portfolio,#contact-me").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});


  $('#email-me').click(function(){
    $('#email-clicked').slideDown('slow');
    setTimeout(function() {
      $('#email-clicked').fadeOut('slow');
    }, 3000);
  });

  //Scroll to top
  $("a").on('click', function(event) {
   if (this.hash !== "") {
     event.preventDefault();
     // Store hash
     var hash = this.hash;
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){
       window.location.hash = "";
     });
   }
  });

  // AJAX
   function sendMessage(e) {
     e.preventDefault();
     var form = $('#messageMe');
     var formData = $(form).serialize();

     // Fill in, add, or change to suit your needs
     $.ajax({
       type: 'POST',
       url: $(form).attr('action'),
       data: formData
     })
     $('#messageSuccess').append('<p>Message sent successfully.</p>');
     $('#name,#subject,#email,#message').val("");
   };



