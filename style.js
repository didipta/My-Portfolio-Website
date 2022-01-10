$(document).ready(function(){
    $("#menu").click(function(){
        document.getElementById("nav").style.display="block";
        document.getElementById("menu").style.display="none";
        document.getElementById("back-menu").style.display="block";
        document.getElementById("navigation").style.height="400px";

    });
    $("#back-menu").click(function(){
        document.getElementById("nav").style.display="none";
        document.getElementById("menu").style.display="block";
        document.getElementById("back-menu").style.display="none";
        document.getElementById("navigation").style.height="";
    });
  });

  //typing 

  var typed=new Typed(".types",{
      strings:["Student","Web Developer","Desiger","App Developer"],
      typeSpeed:100,
      backSpeed:60,
      loop:true
    });