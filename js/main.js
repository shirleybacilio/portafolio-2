jQuery(function ($) {

  $('.centered').each(function (e) {
    $(this).css('margin-top', ($('#main-slider').height() - $(this).height()) / 2);
  });

  $(window).resize(function () {
    $('.centered').each(function (e) {
      $(this).css('margin-top', ($('#main-slider').height() - $(this).height()) / 2);
    });
  });

//scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
});
    //contact form
    var form = $('.contact-form');
    form.submit(function () {
      $this = $(this);
      $.post($(this).attr('action'), function (data) {
        $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
      }, 'json');
      return false;
    });


    //goto top
    $('.gototop').click(function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $("body").offset().top
      }, 500);
    });
  });


//fade in of my name

$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 5) {  
    $('#home').addClass('active');
  } else {
    $('#home').removeClass('active');
  }
});

$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 694) {
    $('.line').addClass("animated bounceInright");
    $
  } else {
    $('.line').removeClass("animated bounceInright");
  }
});

$(document).scroll(function() {    
  var scroll = $(this).scrollTop();

  if (scroll >= 700) {
    $("#menu").addClass("active");
  } else {
    $("#menu").removeClass("transparent");

  }

});


//foto de perfil

$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  console.log(scroll);

  if (scroll >= 800) {
    $('.profile').addClass("animated bounce");
    $('#sobre-mi').addClass('active');

    
  } else {
    $('.profile').removeClass("animated bounce");
    $('#sobre-mi').removeClass('active');

  }
});
$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 1528) {  
    $('#trabajo').addClass('active');
    $('.line').addClass('animated bounceInRight');
  } else {
    $('#trabajo').removeClass('active');
    $('.line').removeClass('animated bounceInRight');
  }
});

$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 2389) {  
   $('#servicio').addClass('active');
   $('.line').addClass('animated bounceInright');
 } else {
   $('servicio').removeClass('active');
   $('.line').removeClass('animated bounceInright');
 }
});

$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 3243) {  
    $('.line').addClass('animated bounceInRight');
    $('#blog').addClass('active');
  } else {
   $('.line').removeClass('animated bounceInRight');
   $('#blog').removeClass('active');
 }
});

$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 4069) {  
   $('#contac').addClass('active');
 } else {
   $('#contac').removeClass('active');
 }
});

