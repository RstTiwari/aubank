//jquery code for activating 


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});


// js code opening the help dreawer section
var helpbtn = document.getElementById("helpBtn");
var drawer = document.getElementById("rightSideDrawer")
var closeBtn = document.getElementById("drawerCloseBtn");

helpbtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

function openMenu() {
    helpbtn.classList.toggle('active')
    drawer.classList.toggle('active')
    
}

function closeMenu (){
    helpbtn.classList.remove('active')
    drawer.classList.remove('active')
}

var moblieclsBtn = document.getElementById("aumobile__clsoe__btn")
var mobile = document.getElementById("aumobile__header")

moblieclsBtn.addEventListener("click" , closeMobile)
function closeMobile (){
    mobile.style.display = "none"
}
