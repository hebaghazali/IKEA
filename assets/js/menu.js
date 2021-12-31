var menu= document.getElementById("main-menu");
var offCanva=document.getElementById("offcanvasExample");
var content;
function ShowDiv(id){
    content = document.getElementById(id);
    content.style.display="block";
    menu.style.display="none";
}
function ShowMain(){
    menu.style.display="block";
    content.style.display="none";
}