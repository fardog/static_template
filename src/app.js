$(document).ready(function() {

	// initialize Foundation
	$(document).foundation();

	var viewModel = function() {
		var self = this;

		self.header = ko.observable("Static Site Template");
	};

	var view = new viewModel();

	ko.applyBindings(view);
});
