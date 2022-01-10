$(document).ready(function(){
    $("#menu").click(function(){
        document.getElementById("nav").style.display="block";
        document.getElementById("menu").style.display="none";
        document.getElementById("back-menu").style.display="block";
        document.getElementById("navigation").style.height="350px";

    });
    $("#back-menu").click(function(){
        document.getElementById("nav").style.display="none";
        document.getElementById("menu").style.display="block";
        document.getElementById("back-menu").style.display="none";
        document.getElementById("navigation").style.height="";
    });
  });