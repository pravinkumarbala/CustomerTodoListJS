$(document).ready(function() {
	$('#addNewEvent').on('click', function() {
		let newEvent = $('#addNewEvent').val();
		$('#addEvent').append($('li'))
	});
});