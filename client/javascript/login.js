document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Username: ' + username);
    console.log('Password: ' + password);

    if(username === "wasadmin@test.com" && password === "red" ){
        
        document.querySelector("#errorMsg").innerHTML = "Logged in and Not authorized if the username and/or password doesn’t match.";
    }

});