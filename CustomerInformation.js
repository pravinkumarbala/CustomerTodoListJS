function login(){
	var	userName = document.getElementById("emailAddress").value;
	var password = document.getElementById("password").value;

	if (!userName && !password) {
		console.log("Please enter the data in the fields");
	} else {
		for (var i = 0; i < localStorage.length; i++) {
		var _getUserDetails = JSON.parse(localStorage.getItem(localStorage.key(i)));
		if (userName == localStorage.getItem("emailAddress") && password == localStorage.getItem("password")) {
			alert("Correct Username " + userName + " password : " + password);
			window.location = "home.html"
		}
	}
	}
}

function registerForm(){
	var userRegister = {
		userName: document.getElementById("userName").value,
		emailAddress: document.getElementById("emailAddress").value,
		password: document.getElementById("password").value,
		repassword: document.getElementById("repassword").value,
		dateOfBirth: document.getElementById("dateOfBirth").value
	};

	if (userRegister.password == userRegister.repassword) {
		localStorage.setItem(userRegister.emailAddress, JSON.stringify(userRegister));
		console.log(userRegister.userName + " " + userRegister.emailAddress + " " + userRegister.password + " " + userRegister.dateOfBirth);
		window.location = "index.html"
	} else {
		console.log("The password are not same");
	}
}