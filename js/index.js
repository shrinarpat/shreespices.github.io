

var packet = document.getElementsByClassName("pack"); 
var counter = 0;
var stop = false;
var numberOfImg = packet.length;
var myinterval;
function changeProduct(){
  if(counter > 8) {counter = 0;}
  var j = (++counter);
  for(var i = 0;i<numberOfImg;i++)
  {
    if(j>8){j = 0;}
  packet[i].src = "../media/pack-" + j + ".png";
  j++;
  }
}


function changeProductback(){
  if(counter < 1) {counter = 9;}
  var j = (--counter);
  for(var i = 0;i<numberOfImg;i++)
  {
    if(j>8){j = 0;}
  packet[i].src = "../media/pack-" + j + ".png";
  j++;
  }
  if(!stop) { clearInterval(myinterval); }
}

function setfunction(){
 myinterval = setInterval(changeProduct,5000);
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}