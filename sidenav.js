var toggledSidenav = 0;

function openSideNav(i) {
  if (toggledSidenav == 0) {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("master").style.marginRight = "40px";
    switch (i) {
      case 0:
        document.getElementById("openSideNavTodos").style.right = "184px";
        break;
      case 1:
        document.getElementById("openSideNavOnomatopeias").style.right = "150px";
        break;
      case 2:
        document.getElementById("openSideNavObjetos").style.right = "180px";
        break;
      case 3:
        document.getElementById("openSideNavBaloes").style.right = "184px";
        break;
      default:

    }
  } else {
    document.getElementById("mySidenav").style.width = ""; //"250px";
    //document.getElementById("master").style.marginRight = "290px";
    document.getElementById("openSideNavTodos").style.right = ""; //"184px";
    document.getElementById("openSideNavObjetos").style.right = "";
    document.getElementById("openSideNavOnomatopeias").style.right = "";
    document.getElementById("openSideNavBaloes").style.right = "";
  }
  toggledSidenav = !toggledSidenav;
}
