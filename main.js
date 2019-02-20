// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
 

// Navigation Menu Smooth Scroll
$(document).ready(function(){
// Add smooth scrolling to all links
$("a").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
} // End if
});
});


// Filter Dynamic Work
var fActive = '';
function filterGroup(group){
  if(fActive != group){
    $('section').filter('.'+group).slideDown();
    $('section').filter(':not(.'+group+')').slideUp();
    fActive = group;
  }
}
    $('.f-group-1').click(function(){ filterGroup('group-1'); });
    $('.f-group-2').click(function(){ filterGroup('group-2'); });
    $('.f-group-3').click(function(){ filterGroup('group-3'); });

    $('.f-all').click(function(){
    $('section').slideDown();
    fActive = 'all';
});