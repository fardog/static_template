$(document).ready(function() {
	
	/**
		The knockout view models which is applied to the whole page.
	*/
	var viewModel = function() {
		var self = this;
		
	}; /* end viewModel */
	
	
	// Apply our Knockout bindings
	var view = new viewModel();
	ko.applyBindings(view);
});
