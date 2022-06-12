$(document).ready(function(){
    $("#menu").click(function(){
        document.getElementById("nav").style.top="0";
        document.getElementById("menu").style.display="none";
        document.getElementById("back-menu").style.display="block";

    });
    $("#back-menu").click(function(){
        document.getElementById("nav").style.top="-200vh";
        document.getElementById("menu").style.display="block";
        document.getElementById("back-menu").style.display="none";
    });
   

 
  });



var typed=new Typed(".types",{
      strings:["Student."],
      typeSpeed:150,
      backSpeed:100,
      loop:true
    });



  $(document).ready(function(){
    $(".projects").mouseover(function(){
      $(".info").delay("slow").css("display", "block");
    });
    $(".projects").mouseout(function(){
      $(".info").delay("slow").css("display", "none");
    });
  });


  ///email

  var btn=document.getElementById('butn');
  btn.addEventListener('click',function(e){
      e.preventDefault();
      var Name=document.getElementById('Name').value;
      var Emails=document.getElementById('Email').value;
      var Sudject=document.getElementById('Sudject').value;
      var Message=document.getElementById('Message').value;
      var body='<h2>My name is'+Name+'</h2><h3>email id:<br/>'+Emails+'</h3><br/>' + '<br/> <h3>' + Message +'</h3>'; 
      if(Name!="" && Emails!="" && Sudject!="" && Message!="")
      {
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "diptas73@gmail.com",
          Password : "6044880EA77662A6B87562B57C77D4E8D297",
          To :"sdipta707@gmail.com"   ,
          From :"diptas73@gmail.com",
          Subject : Sudject,
          Body : body
      }).then(
        alert("Receive the Mail")
        
       
      );
      location.reload(true)
      }
      else
      {
        
        alert("please fill up the all input box")
      }
    
    
  })


  $(window).on("load",function(){
    $('#preloader').fadeOut(1500);
});
