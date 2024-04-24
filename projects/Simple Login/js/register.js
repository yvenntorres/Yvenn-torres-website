function register() {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var password = document.getElementById("password").value;
    
    if(username === "" || name === "" || gender === "" || password === "") {
        document.getElementById("errormess").innerHTML = "All textboxes is required";
    }
    else {
        document.getElementById("errormess").innerHTML = "Registered Successfully!";
    }
}