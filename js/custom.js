// Closes the sidebar menu
$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Map scrolling behaviour
$(document).ready(function() {
  $('#map_iframe').addClass('scrolloff');
  $('#map').on('click', function () {
    $('#map_iframe').removeClass('scrolloff');
  });

  $('#map_iframe').mouseleave(function  () {
    $('#map_iframe').addClass('scrolloff');
  });
});

function setContent(id){
var titles = ["HOME", "CLASSES", "SCHEDULE","RATES","INSTRUCTORS","EVENTS"];
var headings = ["Welcome To Oregon Judo", "Beginner &amp; Intermediate", "Tuesday and Thursday Every Week","","",""];
var contents = ["Hello all, We are a nationally sanctioned judo club through the USJF. Judo is a fun, safe sport enjoyed by people all over the world. Our goal is to create a friendly environment for people to come and participate in something special.<br><br>Can't wait to meet you,<br>Loren Loose", "(classes content)", "<br><b>Beginner Judo</b> - 11:00 AM<br><b>Intermediate Judo</b> - 12:00 PM<br>(More Classes to Come!)",""];
}