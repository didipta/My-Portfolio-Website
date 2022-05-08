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
$("#sce5").click(function(){
      
    document.getElementById("sce-more5").style.display="block";
    document.getElementById("sce5").style.display="none";
});
$("#sce-more5").click(function(){
      
    document.getElementById("sce-more5").style.display="none";
    document.getElementById("sce5").style.display="block";
    
});
$("#sce0").click(function(){
      
    document.getElementById("sce-more0").style.display="block";
    document.getElementById("sce0").style.display="none";
});
$("#sce-more0").click(function(){
      
    document.getElementById("sce-more0").style.display="none";
    document.getElementById("sce0").style.display="block";
    
});
});

  //typing 

  var typed=new Typed(".types",{
      strings:["Student."],
      typeSpeed:150,
      backSpeed:100,
      loop:true
    });

    ////perloader

    $(window).on("load",function(){
        $('#preloader').fadeOut(2000);
    });



    window.addEventListener("Click",function(){
        var header=document.querySelector("navigation ul li");
        header.classList.toggle("nonehead", button.click );
    });



    (function() {
	
        var Progress = function( element ) {
            
            this.context = element.getContext( "2d" );
            this.refElement = element.parentNode;
            this.loaded = 0;
            this.start = 4.72;
            this.width = this.context.canvas.width;
            this.height = this.context.canvas.height;
            this.total = parseInt( this.refElement.dataset.percent, 10 );
            this.timer = null;
            
            this.diff = 0;
            
            this.init();	
        };
        
        Progress.prototype = {
            init: function() {
                var self = this;
                self.timer = setInterval(function() {
                    self.run();	
                }, 25);
            },
            run: function() {
                var self = this;
                
                self.diff = ( ( self.loaded / 100 ) * Math.PI * 2 * 10 ).toFixed( 2 );	
                self.context.clearRect( 0, 0, self.width, self.height );
                self.context.lineWidth = 4;
                self.context.fillStyle = "rgb(212, 212, 212)";
                self.context.strokeStyle = "#f80b52";
                self.context.textAlign = "center";
                
                self.context.fillText( self.loaded + "%", self.width * .5, self.height * .5 + 2, self.width );
                self.context.beginPath();
                self.context.arc( 35, 35, 30, self.start, self.diff / 10 + self.start, false );
                self.context.stroke();
                
                if( self.loaded >= self.total ) {
                    clearInterval( self.timer );
                }
                
                self.loaded++;
            }
        };
        
        var CircularSkillBar = function( elements ) {
            this.bars = document.querySelectorAll( elements );
            if( this.bars.length > 0 ) {
                this.init();
            }	
        };
        
        CircularSkillBar.prototype = {
            init: function() {
                this.tick = 25;
                this.progress();
                
            },
            progress: function() {
                var self = this;
                var index = 0;
                var firstCanvas = self.bars[0].querySelector( "canvas" );
                var firstProg = new Progress( firstCanvas );
                
                
                
                var timer = setInterval(function() {
                    index++;
                        
                    var canvas = self.bars[index].querySelector( "canvas" );
                    var prog = new Progress( canvas );
                    
                    if( index == self.bars.length ) {
                            clearInterval( timer );
                    } 
                    
                }, self.tick * 100);
                    
            }
        };
    var button = document.getElementById("softs");
      
        button.addEventListener( "click", function() {
            var circularBars = new CircularSkillBar( "#sbars .sbar" );
        },false);
            document.addEventListener( "DOMContentLoaded", function() {
            var circularBars = new CircularSkillBar( "#hbars .hbar" );
        });
    })();
    
    
    $(document).ready(function () { 
        $("#hards").click(function(){
            $(".sbar")
                .filter(function(){ return ! $(this).is(":hidden"); })
                .fadeOut(200, function(){
                    $('.hbar,.hbars').fadeIn(300);
                });
                $('#softs').removeClass("bactive");
                $('#hards').addClass("bactive");		
        });
        $("#softs").click(function(){
            $(".hbar")
                .filter(function(){ return ! $(this).is(":hidden"); })
                .fadeOut(200, function(){
                    $('.sbar,.sbars').fadeIn(300);
                });
                $('#hards').removeClass("bactive");
                $('#softs').addClass("bactive");
        });
    });
