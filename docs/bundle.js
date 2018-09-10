$(document).ready(function() {
  $("#contact").click(function() {
    $('.menu-item a').removeClass('selected');

    console.log($(".fifth").offset().top);
    $('html, body').animate({
      scrollTop: $(".fifth").offset().top
    }, 800);
  });

  $("#home").click(function() {
    console.log($(".first").offset().top);
    $('html, body').animate({
      scrollTop: $(".first").offset().top
    }, 800);
  });

  $("#beloved").click(function() {
    console.log($(".second").offset().top);
    $('html, body').animate({
      scrollTop: $(".second").offset().top
    }, 800);
  });

  $("#weather").click(function() {
    console.log($(".third").offset().top);
    $('html, body').animate({
      scrollTop: $(".third").offset().top
    }, 800);
  });

  $("#places").click(function() {
    console.log($(".fourth").offset().top);
    $('html, body').animate({
      scrollTop: $(".fourth").offset().top
    }, 800);
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < $(window).height()){
      $('.menu-item a').css({'color':'#3d3d42'});
      $('.cls-1').css({'fill':'#3d3d42'});
      $('.logo span').css({'color':'#3d3d42'});

    }
    if($(document).scrollTop() >= $(window).height() - 30){
      $('.menu-item a').css({'color':'#c0c0c1'});
      $('.cls-1').css({'fill':'#c0c0c1'});
      $('.logo span').css({'color':'#c0c0c1'});

    }
    if($(document).scrollTop() > 2*$(window).height() - 30){
      $('.menu-item a').css({'color':'#3d3d42'});
      $('.cls-1').css({'fill':'#3d3d42'});
      $('.logo span').css({'color':'#3d3d42'});

    }
    if($(document).scrollTop() > 3*$(window).height() - 30){
      $('.menu-item a').css({'color':'#c0c0c1'});
      $('.cls-1').css({'fill':'#c0c0c1'});
      $('.logo span').css({'color':'#c0c0c1'});
    }
    if($(document).scrollTop() > 4*$(window).height() - 30){
      $('.menu-item a').css({'color':'#3d3d42'});
      $('.cls-1').css({'fill':'#3d3d42'});
      $('.logo span').css({'color':'#3d3d42'});

    }
  });
});

function selected(e){
  $('.menu-item a').removeClass('selected');
  $(e).addClass('selected');
}

function sendEmail(){
  var name = $('.name');
  var email = $('.email')
  var message = $('.message');
}
