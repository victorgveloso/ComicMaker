var toggledTopnav = 0;
function openTopNav() {
  if (toggledTopnav == 0) {
    document.getElementById("myTopnav").style.height = "0";
    //document.getElementById("main").style.marginTop = "40px";
    document.getElementById("mySidenav").style.top = "0";
    document.getElementById("openSideNavTodos").style.top = "70px";
    document.getElementById("openSideNavOnomatopeias").style.top = "200px";
    document.getElementById("openSideNavObjetos").style.top = "340px";
    document.getElementById("openSideNavBaloes").style.top = "445px";
    document.getElementById("openTopNav").style.top = "-106px";
  } else {
    document.getElementById("myTopnav").style.height = "";
    //document.getElementById("main").style.marginTop = "90px";
    document.getElementById("mySidenav").style.top = "";
    document.getElementById("openSideNavTodos").style.top = "";
    document.getElementById("openSideNavOnomatopeias").style.top = "";
    document.getElementById("openSideNavObjetos").style.top = "";
    document.getElementById("openSideNavBaloes").style.top = "";
    document.getElementById("openTopNav").style.top = "";
  }
  toggledTopnav = !toggledTopnav;
}
