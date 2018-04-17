function logout(){
	window.location = "index.html";
}

function uniqueId() {
	return Math.random().toString(36).substr(2, 9);
}

function saveCustomerDetails(){
	var randomID = document.getElementById("id");
	if ( !randomID) {
		randomID = uniqueId();
	} else {
		randomID = " ";
	}
	if (typeof(window.localStorage) !== 'undefined') {
		var customerInfo = {
			uniqueId: randomID,
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
		let li = document.createElement("li");
		let childList = document.createTextNode(userName);
		li.appendChild(childList);
		li.setAttribute("customerID", randomID);
		document.getElementById("customerDetails").appendChild(li);
		document.getElementById("inputFields").reset();
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
		li.setAttribute("customerID", _getCustomerData.uniqueId);
		document.getElementById("customerDetails").appendChild(li);
	}
}

// var customerIdentificationNumber = function(){
// 	var customerList = document.getElementById("#customerDetails li").getElementsByTagName('li');
// 	var id = null;
// 	for (var i = 0; i < customerList.length; i++) {
// 		customerList[i].onclick = function(){
// 			id = this.getAttribute('customerID');
// 			break
// 		}
// 	}
// 	alert(id);
// 	return id;
// }

document.getElementById("customerDetails").addEventListener("click", function() {

	var customerList = document.getElementById("customerDetails").getElementsByTagName('li');
	for (var i = 0; i < customerList.length; i++) {
		customerList[i].onclick = function(){
			alert(this.getAttribute('customerID'));
			//var id = customerIdentificationNumber();
			//alert(id);
			var _getCustomerData = JSON.parse(localStorage.getItem(this.getAttribute('customerID')));
			document.getElementById("firstName").value = _getCustomerData.firstName;
			document.getElementById("lastName").value = _getCustomerData.lastName;
			document.getElementById("emailAddress").value = _getCustomerData.emailAddres;
			document.getElementById("mobileNumber").value = _getCustomerData.mobileNumber;
			document.getElementById("address").value = _getCustomerData.address;
			document.getElementById("city").value = _getCustomerData.city;
			document.getElementById("zipcode").value = _getCustomerData.zipcode;
		}
	}
})


function deleteCustomerDetails(){
	$()
}