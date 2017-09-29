function openTopNav() {
  if (document.getElementById("myTopnav").style.height != "50px") {
    document.getElementById("myTopnav").style.height = "50px";
    document.getElementById("main").style.marginTop = "50px";
    document.getElementById("mySidenav").style.marginTop = "50px";
    document.getElementById("openSideNav").style.top = "120px";
    document.getElementById("TopperNav").style.top = "-56px";
  } else {
    document.getElementById("myTopnav").style.height = "0";
    document.getElementById("main").style.marginTop = "0";
    document.getElementById("mySidenav").style.marginTop = "0";
    document.getElementById("openSideNav").style.top = "70px";
    document.getElementById("TopperNav").style.top = "-106px";
  }
}
