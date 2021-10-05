jQuery(document).ready(function ($) {
  var pageURL = jQuery(location).attr("href");
  var inicio = location.protocol + "//" + location.hostname + "/inicio/";
  var intro = location.protocol + "//" + location.hostname + "/";
  var proyectos = location.protocol + "//" + location.hostname + "/proyectos/";
  var hospitalidad = location.protocol + "//" + location.hostname + "/proyectos/hospitalidad/";
  var industrial = location.protocol + "//" + location.hostname + "/proyectos/industrial/";
  var comercial =  location.protocol + "//" + location.hostname + "/proyectos/comercial/";
  var coporativo = location.protocol + "//" + location.hostname + "/proyectos/corporativo/";

  var screenSize = $(window).width();


  /*inicio*/
  if(pageURL == inicio){
    if(screenSize <= 600){
      setTimeout(function(){
        $(".js").attr("style","overflow: hidden !important;");
        $("body").attr("style","overflow: hidden !important;");
        $(".ios.js").attr("style","overflow: hidden !important;");
        $("html").attr("style","overflow: hidden !important;");

     
         },600);
     
    }
  }
  /* footer*/
  if(screenSize >= 700){
     if(pageURL == proyectos ){
  $("#Footer ").attr("style","position: fixed; width: 100%; bottom: 0;");
     }else if(pageURL == hospitalidad){
      $("#Footer ").attr("style","position: fixed; width: 100%; bottom: 0;");
      }else if (pageURL == industrial){
         $("#Footer ").attr("style","position: fixed; width: 100%; bottom: 0;");
       }else if (pageURL == comercial){
            $("#Footer ").attr("style","position: fixed; width: 100%; bottom: 0;");
        }else if (pageURL == coporativo){
               $("#Footer ").attr("style","position: fixed; width: 100%; bottom: 0;");
        }else{}
  }else{}


 
   /*global */
   $("html").attr("style","margin-top: 0px !important;");
   $(window).scroll(function () {
     $(".page-id-353 #Content").attr("style"," margin-top: 206px;");
   });

  /*header */
  if(pageURL == inicio ){

    $(window).scroll(function () {
      $("#Header_wrapper #Header #Top_bar").attr("style","position: initial; background-color: #fff !important;");
    });
  }
  
   /*menu*/
  $("#Top_bar a.responsive-menu-toggle").click(function(){
    setTimeout(function(){
   $("body").attr("style","left: 0px !important; transition: 0.3s;");

    },600); 
  }); 

   //social icons
   $(".social .facebook a").attr("title","Instagram"); 
   $(".social .linkedin a").attr("title","Facebook"); 
   $(".social .instagram a").attr("title","Linkedin");
   $(".social .custom a").attr("title","Waze"); 
   
  
  
   //search
   if(window.location.href.indexOf("/?s=") >= 0){

    $("#Subheader").attr("style","background-color: white !important;");
     if(screenSize <= 700){
      $("#Content").attr("style","margin-top: 17px; !important;");
      $(".title").attr("style"," position: relative; top: 4px !important;");
     }else{
      
      $("#Subheader .title").attr("style","font-size: 28px !important;");
      $(".title").attr("style","font-size: 22px !important;");
      $("#Content").attr("style","margin-top: 110px; !important;");
      $(".title").attr("style"," position: relative; top: 131px !important;");
     }
   

  }else{}
   
   
  /*intro*/
  if (pageURL == intro) {
    if (screenSize >= 700) {
      $("html").attr("style", "height: 90%;");
    }
  }
  /* footer*/
  if (pageURL == inicio) {
    $(".footer_copy").attr("style", "display: none;");

    // $(".column.one").attr("style", "display: none;");
  }

  /*publicaciones */
  $("a.insta-gallery-button.follow").text("SÍGANOS EN INSTAGRAM");
  /*sevicio */

  $("#slide-plaficacion").click(function () {
    $("#diseno").addClass("hideService");
    $("#interiores").addClass("hideService");
    $("#gestion").addClass("hideService");
    $("#desarrollo").addClass("hideService");

    $("#planificacion").removeClass("hideService");
  });

  $("#slide-diseno").click(function () {
    $("#planificacion").addClass("hideService");
    $("#interiores").addClass("hideService");
    $("#gestion").addClass("hideService");
    $("#desarrollo").addClass("hideService");

    $("#diseno").removeClass("hideService");
  });

  $("#slide-interiores").click(function () {
    $("#planificacion").addClass("hideService");
    $("#diseno").addClass("hideService");
    $("#gestion").addClass("hideService");
    $("#desarrollo").addClass("hideService");

    $("#interiores").removeClass("hideService");
  });

  $("#slide-desarrollo").click(function () {
    $("#planificacion").addClass("hideService");
    $("#diseno").addClass("hideService");
    $("#interiores").addClass("hideService");
    $("#gestion").addClass("hideService");

    $("#desarrollo").removeClass("hideService");
  });

  $("#slide-gestion").click(function () {
    $("#planificacion").addClass("hideService");
    $("#diseno").addClass("hideService");
    $("#interiores").addClass("hideService");
    $("#desarrollo").addClass("hideService");

    $("#gestion").removeClass("hideService");
  });

  /*nuestro-equipo*/
  //---------------- show or hide collaborators
  $("#slide-rashid").click(function () {
    $("#maricruz").addClass("hiddecollaborator");
    $("#carlos").addClass("hiddecollaborator");
    $("#alejandra").addClass("hiddecollaborator");
    $("#evelyn").addClass("hiddecollaborator");
    $("#kembly").addClass("hiddecollaborator");
    $("#luis").addClass("hiddecollaborator");
    $("#viviana").addClass("hiddecollaborator");
    $("#joshua").addClass("hiddecollaborator");

    $("#rashid").removeClass("hiddecollaborator");
  });

  $("#slide-maricruz").click(function () {
    $("#rashid").addClass("hiddecollaborator");
    $("#carlos").addClass("hiddecollaborator");
    $("#alejandra").addClass("hiddecollaborator");
    $("#evelyn").addClass("hiddecollaborator");
    $("#kembly").addClass("hiddecollaborator");
    $("#luis").addClass("hiddecollaborator");
    $("#viviana").addClass("hiddecollaborator");
    $("#joshua").addClass("hiddecollaborator");

    $("#maricruz").removeClass("hiddecollaborator");
  });

  $("#slide-carlos").click(function () {
    $("#rashid").addClass("hiddecollaborator");
    $("#maricruz").addClass("hiddecollaborator");
    $("#alejandra").addClass("hiddecollaborator");
    $("#evelyn").addClass("hiddecollaborator");
    $("#kembly").addClass("hiddecollaborator");
    $("#luis").addClass("hiddecollaborator");
    $("#viviana").addClass("hiddecollaborator");
    $("#joshua").addClass("hiddecollaborator");

    $("#carlos").removeClass("hiddecollaborator");
  });

  $("#slide-alejandra").click(function () {
    $("#rashid").addClass("hiddecollaborator");
    $("#maricruz").addClass("hiddecollaborator");
    $("#carlos").addClass("hiddecollaborator");
    $("#evelyn").addClass("hiddecollaborator");
    $("#kembly").addClass("hiddecollaborator");
    $("#luis").addClass("hiddecollaborator");
    $("#viviana").addClass("hiddecollaborator");
    $("#joshua").addClass("hiddecollaborator");

    $("#alejandra").removeClass("hiddecollaborator");
  });

  $("#slide-evelyn").click(function () {
    $("#rashid").addClass("hiddecollaborator");
    $("#maricruz").addClass("hiddecollaborator");
    $("#carlos").addClass("hiddecollaborator");
    $("#alejandra").addClass("hiddecollaborator");
    $("#kembly").addClass("hiddecollaborator");
    $("#luis").addClass("hiddecollaborator");
    $("#viviana").addClass("hiddecollaborator");
    $("#joshua").addClass("hiddecollaborator");

    $("#evelyn").removeClass("hiddecollaborator");
  });

  $("#slide-kembly").click(function () {
    $("#rashid").addClass("hiddecollaborator");
    $("#maricruz").addClass("hiddecollaborator");
    $("#carlos").addClass("hiddecollaborator");
    $("#alejandra").addClass("hiddecollaborator");
    $("#evelyn").addClass("hiddecollaborator");
    $("#luis").addClass("hiddecollaborator");
    $("#viviana").addClass("hiddecollaborator");
    $("#joshua").addClass("hiddecollaborator");

    $("#kembly").removeClass("hiddecollaborator");
  });

  $("#slide-luis").click(function () {
    $("#rashid").addClass("hiddecollaborator");
    $("#maricruz").addClass("hiddecollaborator");
    $("#carlos").addClass("hiddecollaborator");
    $("#alejandra").addClass("hiddecollaborator");
    $("#evelyn").addClass("hiddecollaborator");
    $("#kembly").addClass("hiddecollaborator");
    $("#viviana").addClass("hiddecollaborator");
    $("#joshua").addClass("hiddecollaborator");

    $("#luis").removeClass("hiddecollaborator");
  });

  $("#slide-viviana").click(function () {
    $("#rashid").addClass("hiddecollaborator");
    $("#maricruz").addClass("hiddecollaborator");
    $("#carlos").addClass("hiddecollaborator");
    $("#alejandra").addClass("hiddecollaborator");
    $("#evelyn").addClass("hiddecollaborator");
    $("#kembly").addClass("hiddecollaborator");
    $("#luis").addClass("hiddecollaborator");
    $("#joshua").addClass("hiddecollaborator");

    $("#viviana").removeClass("hiddecollaborator");
  });

  $("#slide-joshua").click(function () {
    $("#rashid").addClass("hiddecollaborator");
    $("#maricruz").addClass("hiddecollaborator");
    $("#carlos").addClass("hiddecollaborator");
    $("#alejandra").addClass("hiddecollaborator");
    $("#evelyn").addClass("hiddecollaborator");
    $("#kembly").addClass("hiddecollaborator");
    $("#luis").addClass("hiddecollaborator");
    $("#viviana").addClass("hiddecollaborator");

    $("#joshua").removeClass("hiddecollaborator");
  });
});
