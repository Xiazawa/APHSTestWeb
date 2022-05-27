function auth(event){
    event.preventDefault();
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="password"){
        alert("Login Succesful.");
        window.location.replace("Beltran_SeanReyAPHSSite.html");
    }
    else{
        alert("Incorrect username or password");
        return;
    }
}