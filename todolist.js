function logout(){
	window.location = "index.html";
}

function uniqueId() {
	return Math.random().toString(36).substr(2, 9);
}

function saveCustomerDetails(){
	if (typeof(window.localStorage) !== 'undefined') {
		var customerInfo = {
			uniqueId: uniqueId(),
			firstName: document.getElementById("firstName").value,
			lastName: document.getElementById("lastName").value,
			emailAddres: document.getElementById("emailAddress").value,
			mobileNumber: document.getElementById("mobileNumber").value,
			address: document.getElementById("address").value,
			city: document.getElementById("city").value,
			zipcode: document.getElementById("zipcode").value
		};
		let userName = customerInfo.firstName + " " + customerInfo.lastName;
		alert(userName);
		localStorage.setItem(customerInfo.uniqueId, JSON.stringify(customerInfo));
		var li = document.createElement("li");
		let childList = document.createTextNode(userName);
		li.appendChild(childList)
		document.getElementById("customerDetails").appendChild(li);
		document.getElementsByTagName("input").value = null;
	}
}

window.onload = function(){
	//document.getElementById("UserName").innerHTML = localStorage.getItem("userName");
	for (var i = 0; i < localStorage.length; i++) {
		var _getCustomerData = JSON.parse(localStorage.getItem(localStorage.key(i)));
		var li = document.createElement("li");
		let userName = _getCustomerData.firstName + " " + _getCustomerData.lastName;
		let childList = document.createTextNode(userName);
		li.appendChild(childList);
		document.getElementById("customerDetails").appendChild(li);
	}
}