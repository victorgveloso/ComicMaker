var toggledSidenav = 0;

function openSideNav() {
  if (toggledSidenav == 0) {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("master").style.marginRight = "40px";
    document.getElementById("openSideNav").style.right = "-66px";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("master").style.marginRight = "290px";
    document.getElementById("openSideNav").style.right = "184px";
  }
  toggledSidenav = !toggledSidenav;
}
