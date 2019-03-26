$("#menu").click(function() {
    $(".icon").animate({opacity: "0"}, 1000);
    setTimeout(function(){
      if ( $("#myTopnav").hasClass('topnav responsive') ){
        $("#myTopnav").removeClass(" responsive");
     }
    else {
     $("#myTopnav").addClass(' responsive');
   }   }, 1000);

    $(".icon").animate({opacity: "1"}, 1000);
});
