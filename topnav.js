var toggledTopnav = 0;
function openTopNav() {
  if (toggledTopnav == 0) {
    document.getElementById("myTopnav").style.height = "0";
    document.getElementById("main").style.marginTop = "0";
    document.getElementById("mySidenav").style.top = "0";
    document.getElementById("openSideNav").style.top = "70px";
    document.getElementById("openTopNav").style.top = "-106px";
  } else {
    document.getElementById("myTopnav").style.height = "50px";
    document.getElementById("main").style.marginTop = "50px";
    document.getElementById("mySidenav").style.top = "50px";
    document.getElementById("openSideNav").style.top = "120px";
    document.getElementById("openTopNav").style.top = "-56px";
  }
  toggledTopnav = !toggledTopnav;
}
