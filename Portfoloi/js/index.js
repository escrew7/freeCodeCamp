$( document ).ready(function() {

    $('.fader').fadeIn(2000).removeClass('fader');
  

var amountScrolled = 300;

$(window).scroll(function() {
	if ($(window).scrollTop() > amountScrolled ) {
		$('.back').fadeIn('slow');
	} else {
		$('.back').fadeOut('slow');
	}
});

$(".back").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
  });

$("a[href='#about']").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top}, 1000);
});

$("a[href='#work']").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top}, 1000);
});

$("a[href='#contact']").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top}, 1000);
});

$("a[href='#home']").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top}, 1000);
});
  
});