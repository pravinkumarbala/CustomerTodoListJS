$(document).ready(function() {

	// Getting the Customer Id to Global Variable
	// Display on the content on the fields
	$('#customerDetails').on('click', 'li', function() {
		let globalCustomerId = $(this).attr('custID');
		var _displayCustomerData_ = $.parseJSON(localStorage.getItem(globalCustomerId));
		$('#firstName').val(_displayCustomerData_.firstName);
		$('#lastName').val(_displayCustomerData_.lastName);
		$('#emailAddress').val(_displayCustomerData_.emailAddress);
		$('#mobileNumber').val(_displayCustomerData_.mobileNumber);
		$('#address').val(_displayCustomerData_.address);
		$('#city').val(_displayCustomerData_.city);
		$('#zipcode').val(_displayCustomerData_.zipcode);

		//Deleting the Element from the list
		$('#deleteCustomerDetails').on('click', function() {
			if (!$('#inputFields')) {
				alert("Delete is not possible");
			} else {
				localStorage.removeItem(globalCustomerId);
				$('[custID='+ globalCustomerId +']').fadeOut('slow', function() {
					$(this).remove();
					$('#inputFields input').val(null);
				});
			}
		});
	});

	// Adding Customer Information to the list
	$('#saveCustomerDetails').click(function() {
		var custDet = {
			custUniqueId: Math.random().toString(36).substr(2, 9),
			firstName: $('#firstName').val(),
			lastName: $('#lastName').val(),
			emailAddress: $('#emailAddress').val(),
			mobileNumber: $('#mobileNumber').val(),
			address: $('#address').val(),
			city: $('#city').val(),
			zipcode: $('#zipcode').val()
		}
		//alert(userName);
		localStorage.setItem(custDet.custUniqueId, JSON.stringify(custDet));
		let userName = custDet.firstName + " " + custDet.lastName;
		$('#customerDetails').append($('<li>').text(userName).attr('custID', custDet.custUniqueId));
		$('#inputFields input').val(null);
		
	});

	// Display the li automatically from the Storage
	$.each(localStorage, function(customerId, customerInformation) {
		var _customerData_ = $.parseJSON(customerInformation);
		if (customerId !== "length") {
			console.log(customerId + " " +_customerData_.firstName);
			let userName = _customerData_.firstName + " " + _customerData_.lastName;
			$('#customerDetails').append($('<li>').text(userName).attr('custID', _customerData_.custUniqueId));
		}
	});
	
});