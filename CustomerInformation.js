function login(){
	var	userName = document.getElementById("emailAddress").value;
	var password = document.getElementById("password").value;

	if (!userName && !password) {
		console.log("Please enter the data in the fields");
	} else if (userName.equals(localStorage.getItem("emailAddress")) && password.equals(localStorage.getItem("password"))) {
		alert("Correct Username " + this.userName + " password : " + password);
	} else {
		alert("Wrong user and password");
	}
}

function registerForm(){
		var userName = document.getElementById("userName").value;
		var emailAddress = document.getElementById("emailAddress").value;
		var password = document.getElementById("password").value;
		var repassword = document.getElementById("repassword").value;
		var dateOfBirth = document.getElementById("dateOfBirth").value;

		console.log(userName)

	if (password == repassword) {
		localStorage.setItem('userName', userName);
		localStorage.setItem("emailAddress", emailAddress);
		localStorage.setItem("password", password);
		localStorage.setItem("dateOfBirth", dateOfBirth);
		console.log(userName + " " + emailAddress + " " + password + " " + dateOfBirth);
		window.location = "index.html"
	} else {
		console.log("The password are not same");
	}
}