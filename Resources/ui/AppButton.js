exports.AppButton = function(label){
	
	var self = Titanium.UI.createButton({
		top: 0,
		left: 0,
		width: "40%", 
		height: 80,
		title: label
	});
	
	
	return self;
};
