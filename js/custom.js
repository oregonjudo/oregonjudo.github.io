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
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 700) {        
        document.getElementById('scroll-top').style.display = "block";   
    } else {
        document.getElementById('scroll-top').style.display = "none";  
    }
});
});

function setContent(id){
var titles = ["HOME", "CLASSES", "SCHEDULE","RATES","INSTRUCTORS","EVENTS"];
var headings = ["Welcome To Oregon Judo", "Beginner/Intermediate &amp; Advanced", "Tuesday and Thursday Every Week","","Loren Loose",""];
var contents = [
"We are a nationally sanctioned judo club through the USJF. Judo is a fun, safe sport enjoyed by people all over the world. Our goal is to create a friendly environment for people to come and participate in something special.<br><br>Can't wait to meet you,<br>Loren Loose", 

"<b>Beginner class</b> covers and reviews the basics of judo. Lead by the instructor, students can learn drills and workouts in a place that is comfortable for them. We want you to succeed!<p class='ind'><b>Intermediate class</b> bridges the gap from beginner to advanced by refining basic skills, and adding new tools and techniques to work with.</p><p class='ind'><b>Advanced class</b> has a minimum requirement of a blue-belt. You may also be invited by the senior instructor. This class covers judo at the competition level. Randori(sparring) is required.</p></p>",

 "<br><b>Beginner Judo</b> - 11:00 AM<br><b>Intermediate Judo</b> - 12:00 PM<br>(More Classes to Come!)",
 
 "A USJF membership is required, this is a $50.00 purchase and is good for one year. More info can be found <a href='http://www.usjf.com/membership/' target='_blank'>HERE</a>. Club dues are $50.00 per month, or a $10.00 fee per drop-in. All classes and activities are included with monthly club dues.",
 
 "Loren has been studying and training in judo for 10+ years. He is Shodan rank, promoted by the USJF.",
 
 "(Check back for Events to Come)"
 ];
 document.getElementById('ctitle').innerHTML = titles[id];
 document.getElementById('ctag').innerHTML = headings[id];
 document.getElementById('content').innerHTML = contents[id];
}