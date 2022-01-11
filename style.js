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

  $(document).ready(function(){
  $("#sce1").click(function(){
      
    document.getElementById("sce-more1").style.display="block";
    document.getElementById("sce1").style.display="none";
});
$("#sce-more1").click(function(){
      
    document.getElementById("sce-more1").style.display="none";
    document.getElementById("sce1").style.display="block";
    
});
$("#sce2").click(function(){
      
    document.getElementById("sce-more2").style.display="block";
    document.getElementById("sce2").style.display="none";
});
$("#sce-more2").click(function(){
      
    document.getElementById("sce-more2").style.display="none";
    document.getElementById("sce2").style.display="block";
    
});
$("#sce3").click(function(){
      
    document.getElementById("sce-more3").style.display="block";
    document.getElementById("sce3").style.display="none";
});
$("#sce-more3").click(function(){
      
    document.getElementById("sce-more3").style.display="none";
    document.getElementById("sce3").style.display="block";
    
});
$("#sce4").click(function(){
      
    document.getElementById("sce-more4").style.display="block";
    document.getElementById("sce4").style.display="none";
});
$("#sce-more4").click(function(){
      
    document.getElementById("sce-more4").style.display="none";
    document.getElementById("sce4").style.display="block";
    
});
});

  //typing 

  var typed=new Typed(".types",{
      strings:["Student","Web Developer","Desiger","App Developer"],
      typeSpeed:100,
      backSpeed:60,
      loop:true
    });

    ////perloader

    $(window).on("load",function(){
        $('#preloader').fadeOut(2000);
    })
