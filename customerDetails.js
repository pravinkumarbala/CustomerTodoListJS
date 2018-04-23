$(document).ready(function() {

	// Getting the Customer Id to Global Variable
	// Display on the content on the fields
	$('#customerDetails').on('click','li', function() {
		var customerReferenceID = $(this).attr('custID');
		var _displayCustomerData_ = $.parseJSON(localStorage.getItem(customerReferenceID));
		$('#firstName').val(_displayCustomerData_.firstName);
		$('#lastName').val(_displayCustomerData_.lastName);
		$('#emailAddress').val(_displayCustomerData_.emailAddress);
		$('#mobileNumber').val(_displayCustomerData_.mobileNumber);
		$('#address').val(_displayCustomerData_.address);
		$('#city').val(_displayCustomerData_.city);
		$('#zipcode').val(_displayCustomerData_.zipcode);

		var updateButton = '<button type="button" class="btn btn-info" id="updateData">Update</button>';

		$('form').on('focusin', 'input', function() {
			$('.createButton').prepend(updateButton);

			$('#updateData').on('click', function() {
				var custDet = {
					custUniqueId: customerReferenceID,
					firstName: $('#firstName').val(),
					lastName: $('#lastName').val(),
					emailAddress: $('#emailAddress').val(),
					mobileNumber: $('#mobileNumber').val(),
					address: $('#address').val(),
					city: $('#city').val(),
					zipcode: $('#zipcode').val()
				}
				localStorage.setItem(custDet.custUniqueId, JSON.stringify(custDet));
				$('#inputFields input').val(null);
				$('#updateData').remove();
			});
		});
	});

	//Deleting the Element from the list
	$('#customerDetails').on('click', 'span', function() {
		var customerDeleteId = $(this).parent('li').attr('custID');
		$('li[custID=' + customerDeleteId + ']').remove();
		localStorage.removeItem(customerDeleteId);
		alert(customerDeleteId);
	});

	// Adding Customer Information to the list
	$('#saveCustomerDetails').click(function() {
		let firstName = $('#firstName').val();
		let lastName = $('#lastName').val();
		let emailAddress = $('#emailAddress').val();
		let mobileNumber = $('#mobileNumber').val();
		let address = $('#address').val();
		let city = $('#city').val();
		let zipcode = $('#zipcode').val();       
		if (!firstName && !lastName && !emailAddress && !mobileNumber && !address && !city && !zipcode) {
			alert("Please enter the Information in all the fields");
		} else{
			var custDet = {
				custUniqueId: Math.random().toString(36).substr(2, 9),
				firstName: firstName,
				lastName: lastName,
				emailAddress: emailAddress,
				mobileNumber: mobileNumber,
				address: address,
				city: city,
				zipcode: zipcode
			}
			//alert(userName);
			localStorage.setItem(custDet.custUniqueId, JSON.stringify(custDet));
			let userName = custDet.firstName + " " + custDet.lastName;
			//$('#customerDetails').append($('<li>').text(userName).attr('custID', custDet.custUniqueId));
			let custInfo = '<li custID="' + custDet + '" class="noUpdate">' + userName + '<span class="glyphicon glyphicon-remove"></span></li>';
			$('#customerDetails').append(custInfo);
			$('#inputFields input').val(null);
		}
	});

	// Display the li automatically from the Storage
	$.each(localStorage, function(customerId, customerInformation) {
		var _customerData_ = $.parseJSON(customerInformation);
		if (customerId !== "length") {
			console.log(customerId + " " +_customerData_.firstName);
			let userName = _customerData_.firstName + " " + _customerData_.lastName;
			//$('#customerDetails').append($('<li>').text(userName).attr('custID', _customerData_.custUniqueId));
			let custInfo = '<li custID="' + _customerData_.custUniqueId + '" class="noUpdate">' + userName + '<span class="glyphicon glyphicon-remove"></span></li>';
			$('#customerDetails').append(custInfo);
		}
	});
	
});