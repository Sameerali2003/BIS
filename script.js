function openNav() {
  // Sidebar ki width 250px set karein
  document.getElementById("mySidebar").style.width = "150px";
  // Content ko thoda push karein
  document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
  // Sidebar ki width 0 set karke hide karein
  document.getElementById("mySidebar").style.width = "0";
  // Content ko wapis apni jagah layein
  document.getElementById("main").style.marginLeft = "0";
}