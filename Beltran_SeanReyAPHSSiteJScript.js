function openNav() {
    document.getElementById("mySidenav").style.width = "10cm";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function logout(event){
      alert("Logged out.");
        window.location.replace("index.html");
}