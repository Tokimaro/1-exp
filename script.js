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


window.onscroll = function(){
  myFunc();
};


  var header = document.getElementById('header');
  var sticky = header.offsetTop;

function myFunc(){
  if(window.pageYOffset > sticky){
    header.classList.add('sticky');
    header.classList.add('bord');
  }else{
    header.classList.remove('sticky');
    header.classList.remove('bord');
  }
}
