var toggledSidenav = 0;

function openSideNav() {
  if (toggledSidenav == 0) {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("openSideNav").style.right = "-66px";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "270px";
    document.getElementById("openSideNav").style.right = "184px";
  }
  toggledSidenav = !toggledSidenav;
}
