function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("nav-bar-btn").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("nav-bar-btn").style.display = "block";
  }


 $('body').on('click', function(){
    if( parseInt( $('#mySidenav').css('width') ) > 0 ){
      closeNav();
    }
  });