function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("nav-bar-btn").style.display = "none";
    var i = document.getElementById('main').offsetWidth;
    if(i>768){
      document.getElementById("main").style.marginLeft = "250px";
    }
  }
  
  function closeNav() {
    document.getElementById("main").style.marginLeft = "10px";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("nav-bar-btn").style.display = "block";
  }


 $('body').on('click', function(){
    if( parseInt( $('#mySidenav').css('width') ) > 0 ){
      closeNav();
    }
  });

