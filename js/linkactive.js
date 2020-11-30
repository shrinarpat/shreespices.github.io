var toggle = true;
function funone(){
  if(toggle) {
    document.getElementById("navbar").style.display = "block";
    //document.getElementById("signup1").style.display = "none";
    toggle = false;
  } else {
    document.getElementById("navbar").style.display = "none";
    toggle = true;
  } 
}

function myfunction(ele) {
    var links = document.getElementsByClassName("link");
    linkLength = links.length;
    var i;
    for(i = 0; i<linkLength; i++)
    {
        links[i].classList.remove("active");
    }
    ele.classList.add("active");
}
